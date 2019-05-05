const { createGraph, createNode } = require('./graph')

const graph = createGraph(true)

const nodes = ['a', 'b', 'c', 'd', 'e', 'f']
const edges = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e']
]

nodes.forEach(node => {
  graph.addNode(node)
})

edges.forEach(nodes => {
  graph.addEdge(...nodes)
})

graph.dfs('a', node => {
  console.log(node.key)
})

document.getElementById("app").innerHTML = `
      <h1>Data Structures in JS using POI and Jest</h1>
      <h2>Depth First Search Example</h2>
      <p> Open developer console </p>
    `
