const Graph = require('../src/dataStructures/graph');
const breadthFirstSearch = require('../src/algorithms/breadthFirstSearch');

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

breadthFirstSearch(graph, 'A', (node) => console.log(node));
