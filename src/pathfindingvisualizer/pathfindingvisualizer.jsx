import React, { Component } from "react"; //to create a component
import Node from "./Node/Node"; //importing a single node of the matrix as a node component
import { dijkstra, getNodesInShortestPathOrder } from "../algorithms/dijkstras"; //contains tha algorithms

import "./pathfindingvisualizer.css";

const START_NODE_ROW = 10; //starting node coordinates
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 19; //ending node coordinates
const FINISH_NODE_COL = 49;

export default class PathfindingVisualizer extends Component {
  constructor() {
    //initialization of the node matrix
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false, //first the mouse is not pressed hence its false
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid }); //updating the state of the grid component
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col); //when mouse is toggled down then create a wall
    this.setState({ grid: newGrid, mouseIsPressed: true }); //set mouse pressed as true and initialize wall
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return; //if mouse is already pressed then return
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col); //else toggle the wall
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <>
        <div></div>
        <button onClick={() => this.visualizeDijkstra()}>
          Visualize Dijkstra's Algorithm
        </button>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
