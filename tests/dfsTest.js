const Graph = require('../src/dataStructures/graph');
const depthFirstSearch = require('../src/algorithms/depthFirstSearch');

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

depthFirstSearch(graph, 'A', (node) => console.log(node));
