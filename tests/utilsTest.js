const Graph = require('../src/dataStructures/graph');
const { initializeVisited } = require('../src/algorithms/utils');

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addEdge('A', 'B');

console.log(initializeVisited(graph));
