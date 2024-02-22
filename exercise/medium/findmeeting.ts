export function FindMeetings(schedules: number[][]) {
  const timeline: boolean[] = new Array(25).fill(false); // Initialize timeline representing all time slots

  // Mark busy intervals of each team member on the timeline
  schedules.forEach((memberSchedule: number[]) => {
    memberSchedule.forEach((interval: number) => {
      // const [start, end] = interval
      const start = interval;
      const end = interval + 1;
      for (let i = start; i < end; i++) {
        timeline[i] = true;
      }
    });
  });

  // Find the available time slots where all members are free
  const availableSlots = [] as number[][];
  let start = 0 as number;
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
