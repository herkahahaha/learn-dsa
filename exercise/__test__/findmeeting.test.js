import { describe, test, expect } from "bun:test";
import { FindMeetings } from "../medium/findmeeting";

const schedules = [
  [
    [13, 15],
    [11, 12],
    [10, 13],
  ], // Schedule for member 1
  [[8, 9]], // Schedule for member 2
  [[13, 18]], // Schedule for member 3
];
const meetings = FindMeetings(schedules);

describe("find availables slot for meeting time", () => {
  test("should have array data", () => {
    const expected = meetings;
    const result = [
      [8, 9],
      [10, 18],
      [25, 24],
    ];
    expect(expected).toEqual(result);
  });
});
