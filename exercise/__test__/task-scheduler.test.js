import { describe, test, expect } from "bun:test";
import { TaskScheduler } from "../medium/task-scheduler";

describe("first", () => {
  test(`
  Input: tasks = ["A","A","A","B","B","B"], n = 2
  Output: 8
  Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
  After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.`, () => {
    const schedule = ["A", "A", "A", "B", "B", "B"];
    const expected = TaskScheduler(schedule, 2);
    const result = 8;
    expect(expected).toEqual(result);
  });

  test(`
  Input: tasks = ["A","C","A","B","D","B"], n = 1
  Output: 6
  Explanation: A possible sequence is: A -> B -> C -> D -> A -> B. With a cooling interval of 1, you can repeat a task after just one other task.`, () => {
    const schedule = ["A", "C", "A", "B", "D", "B"];
    const expected = TaskScheduler(schedule, 1);
    const result = 6;
    expect(expected).toEqual(result);
  });

  test(`
  Input: tasks = ["A","A","A", "B","B","B"], n = 3
  Output: 10
  Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B. There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.
`, () => {
    const schedule = ["A", "A", "A", "B", "B", "B"];
    const expected = TaskScheduler(schedule, 3);
    const result = 10;
    expect(expected).toEqual(result);
  });
});
