import { describe, test, expect } from "bun:test";
import Graph from "./graph";

describe("Create Graph algorithm", () => {
  test("should be add 1,2,3 and print the value", () => {
    const g = new Graph(6);
    var vertices = ["A", "B", "C", "D", "E", "F"];

    // adding vertices
    for (let i = 0; i < vertices.length; i++) {
      g.addVertex(vertices[i]);
    }
    // adding edges
    g.addEdge("A", "B");
    g.addEdge("A", "D");
    g.addEdge("A", "E");
    g.addEdge("B", "C");
    g.addEdge("D", "E");
    g.addEdge("E", "F");
    g.addEdge("E", "C");
    g.addEdge("C", "F");
    const expected = g.printGraph();
    const result = "B D E A C B E F A E A D F C E C ";
    expect(expected).toEqual(result);
  });
});
