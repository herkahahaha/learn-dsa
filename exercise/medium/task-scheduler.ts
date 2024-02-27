export const TaskScheduler = (tasks: string[], n: number): number => {
  const taskCount: Record<string, number> = {};
  let maxCount = 0;
  let maxCountTask = 0;

  for (let i of tasks) {
    taskCount[i] = (taskCount[i] || 0) + 1;
    if (taskCount[i] > maxCount) {
      maxCount = taskCount[i];
      console.log("max count", maxCount);
      maxCountTask = 1;
    } else if (taskCount[i] === maxCount) {
      maxCountTask++;
      console.log("max count task", maxCountTask);
    }
    console.log("==>", taskCount[i]);
  }

  const store = maxCount - 1;
  console.log("store", store);
  const emptySlot = store * (n - (maxCountTask - 1));
  console.log("emptyslot", emptySlot);
  const remainingTask = tasks.length - maxCount * maxCountTask;
  console.log("remaining task", remainingTask);
  const idle = Math.max(0, emptySlot - remainingTask);
  console.log("break idle", idle);

  return tasks.length + idle;
};
