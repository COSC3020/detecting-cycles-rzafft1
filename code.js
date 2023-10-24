function search(graph, start, target, visited, path)
{
    if (path.length > 0 && start == target)
    {
        path.push(target)
        return path
    }

    visited[start] = true
    path.push(start)
 
    for (let i = 0; i < graph.length; i++)
    {
        if (path.length > 0 && i == target && graph[start][i] == 1)
        {
            path.push(target)
            if (path[path.length-1] == target)
            {
                return path
            }
        }
        if (visited[i] == false && graph[start][i] == 1)
        {
            let thispath = search(graph, i, target, visited, path)
            if (thispath[thispath.length-1] == target)
            {
                return thispath
            }
        }
    }
    return path
}

function hasCycle(graph) {
    cycles = false
    for (let i = 0; i < graph.length; i++)
    {
        let visited = Array(graph.length).fill(false)
        let path = []
        path = search(graph, i, i, visited, path)
        if (path[0] == path[path.length-1] && path.length > 1)
        {
            cycles = true
        }
    }
    return cycles
}