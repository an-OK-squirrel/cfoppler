// Cube simulator

function Cube() {
  this.edges = {};
  this.edgesO = {};
  for (var i = 0; i < 12; i++) {
    this.edges[cubeMisc.edgeList[i]] = cubeMisc.edgeList[i];
    this.edgesO[cubeMisc.edgeList[i]] = 0;
  }
}

// Random functions and stuff
var cubeMisc = {
  edgeList: ["UF", "UR", "UB", "UL", "FR", "RB", "BL", "LF", "DF", "DR", "DB", "DL"],
};