/*

The following two are the most commonly used representations of a graph.

1. Adjacency Matrix: An adjacency matrix represents a graph as a matrix of boolean values (0s and 1s). In a computer, a finite graph can be represented as a square matrix, where the boolean value indicates if two vertices are connected directly.

2. Adjacency List: An adjacency list represents a graph as an array of linked lists where an index of the array represents a vertex and each element in its linked list represents the other vertices that are connected with the edges, or say its neighbor.
*/

class Graph {
  noOfVertices: number | null;
  adjlist: Map<number, number[]>;
  constructor(noOfVertices: number) {
    this.noOfVertices = noOfVertices;
    this.adjlist = new Map();
  }

  // add Vertex Graph
  addVertex(value: number) {
    this.adjlist.set(value, []);
  }

  // add Edge Graph
  addEdge(value: number, width: number) {
    this.adjlist.get(value)?.push(width);
    this.adjlist.get(width)?.push(value);
  }

  // print graph
  printGraph() {
    const getKey = this.adjlist.keys();
    let conc = "";

    for (let i of getKey) {
      const getValue = this.adjlist.get(i) ?? [];

      for (let j of getValue) {
        conc += j + " ";
        console.log(`${i} => ${conc}`);
      }
      // console.log(conc);
    }
    return conc;
  }
}

export default Graph;
