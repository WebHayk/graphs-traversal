function depthFirstSearch(graph, startNode, visit) {
    const visited = new Set();
    const dfs = (node) => {
        if (visited.has(node)) return;
        visit(node);
        visited.add(node);
        graph.getNeighbors(node).forEach((neighbor) => dfs(neighbor));
    };
    dfs(startNode);
}

module.exports = depthFirstSearch;
