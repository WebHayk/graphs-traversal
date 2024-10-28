function breadthFirstSearch(graph, startNode, visit) {
    const visited = new Set();
    const queue = [startNode];
    visited.add(startNode);

    while (queue.length > 0) {
        const node = queue.shift();
        visit(node);
        graph.getNeighbors(node).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        });
    }
}

module.exports = breadthFirstSearch;
