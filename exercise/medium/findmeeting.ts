// export function FindMeetings(schedules: number[][]) {
//   const timeline: boolean[] = new Array(25).fill(false); // Initialize timeline representing all time slots

//   // Mark busy intervals of each team member on the timeline
//   schedules.forEach((memberSchedule: number[]) => {
//     memberSchedule.forEach((interval: number) => {
//       // const [start, end] = interval
//       const start = interval;
//       const end = interval + 1;
//       for (let i = start; i < end; i++) {
//         timeline[i] = true;
//       }
//     });
//   });

//   // Find the available time slots where all members are free
//   const availableSlots = [] as number[][];
//   let start = 0 as number;
//   for (let i = 0; i <= 24; i++) {
//     if (!timeline[i]) {
//       // Found a gap where all members are free
//       if (start !== i) {
//         availableSlots.push([start, i]);
//       }
//       start = i + 1;
//     }
//   }
//   if (start !== 24) {
//     availableSlots.push([start, 24]); // Add the last available slot if needed
//   }

//   return availableSlots;
// }

export function FindMeetings(schedules:number[][][]): number[][] {
  // combine all array data into a single array of intervals
  const allIntervals =  schedules.flat()
  // sorting all intervals
  allIntervals.sort((a, b) => a[0] - b[0])
  // initialize the result with the first interval
  const result: number[][] = [allIntervals[0]]
  // loop/merge overlaping intervals if overlaping merge use max, else add to result
  for(let i = 1; i < allIntervals.length; i++) {
    const currentInterval = allIntervals[i]
    const lastMergedInterval = result[result.length - 1];

    if(currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1])
    } else {
      result.push(currentInterval)
    }
  }
  // calculate available time slot
  const availableSlots: number[][] = []
  if(result[0][0] > 0) {
    availableSlots.push([0, result[0][0]])
  }

  for(let i = 1; i< result.length; i++) {
    availableSlots.push([result[i - 1][1], result[i][0]])
  }

  if(result[result.length -1][1] < 24) {
    availableSlots.push([result[result.length -1][1], 24])
  }
  return availableSlots
}
