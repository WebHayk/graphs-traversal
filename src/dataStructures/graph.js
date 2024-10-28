class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addNode(node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }

    addEdge(node1, node2) {
        this.adjacencyList.get(node1).push(node2);
        this.adjacencyList.get(node2).push(node1);
    }

    getNeighbors(node) {
        return this.adjacencyList.get(node);
    }
}

module.exports = Graph;
