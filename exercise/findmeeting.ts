export function FindMeetings(schedules: any) {
  const timeline = new Array(25).fill(false); // Initialize timeline representing all time slots

  // Mark busy intervals of each team member on the timeline
  schedules.forEach((memberSchedule: any) => {
    memberSchedule.forEach((interval: any) => {
      const [start, end] = interval;
      for (let i = start; i < end; i++) {
        timeline[i] = true;
      }
    });
  });

  // Find the available time slots where all members are free
  const availableSlots = [];
  let start = 0;
  for (let i = 0; i <= 24; i++) {
    if (!timeline[i]) {
      // Found a gap where all members are free
      if (start !== i) {
        availableSlots.push([start, i]);
      }
      start = i + 1;
    }
  }
  if (start !== 24) {
    availableSlots.push([start, 24]); // Add the last available slot if needed
  }

  return availableSlots;
}
