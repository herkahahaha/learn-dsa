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
