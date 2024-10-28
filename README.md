# 📊 Graph Traversal Algorithms in JavaScript

Welcome to the **Graph Traversal** repository! This project implements essential graph traversal algorithms like **Depth-First Search (DFS)** and **Breadth-First Search (BFS)** in JavaScript. These algorithms explore nodes in directed or undirected graphs, providing a foundational toolset for applications in networking, game development, and pathfinding.

## 🚀 Features

- 🔎 **Depth-First Search (DFS)**: Efficient exploration by diving deep into graph branches before backtracking.
- 🌐 **Breadth-First Search (BFS)**: Layer-by-layer traversal, ideal for finding the shortest path in unweighted graphs.
- 🔄 **Cycle Detection**: Identify cycles to prevent infinite loops and understand graph structures.
- 📏 **Connected Components**: Discover isolated groups within a graph.
- 🌱 **Pathfinding**: Identify paths between nodes for navigation and routing purposes.

## 🧩 Usage

1. **Initialize a Graph**
   ```javascript
   const Graph = require('./src/dataStructures/graph');
   
   // Create a new graph instance
   const myGraph = new Graph();
   
   // Add nodes to the graph
   myGraph.addNode('A');
   myGraph.addNode('B');
   myGraph.addNode('C');
   
   // Add edges between nodes
   myGraph.addEdge('A', 'B');
   myGraph.addEdge('A', 'C');

2. **Run Traversal Algorithms**
   ```javascript
   const { depthFirstSearch, breadthFirstSearch } = require('./src/algorithms');

   // Perform DFS starting from node 'A'
   console.log("Depth-First Search:");
   depthFirstSearch(myGraph, 'A', (node) => console.log(node));

   // Perform BFS starting from node 'A'
   console.log("Breadth-First Search:");
   breadthFirstSearch(myGraph, 'A', (node) => console.log(node));

# 🧪 Running Tests

To make sure everything is working as expected, run the test suite:

```bash
npm test
```

# ✨ Final Words by Hayk
Thank you for exploring the Graph Traversal Algorithms project! This repository is designed to be more than just code—it’s a toolkit for navigating the intricacies of graph data structures with efficiency and clarity. With carefully crafted algorithms for DFS and BFS, this project aims to provide you with a solid foundation in graph theory, tailored for practical application.

— Hayk
