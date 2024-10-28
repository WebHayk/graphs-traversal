function initializeVisited(graph) {
    const visited = {};
    graph.adjacencyList.forEach((_, node) => {
        visited[node] = false;
    });
    return visited;
}

module.exports = { initializeVisited };
