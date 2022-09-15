const { Worker, Master } = require("../src");
const path = require("path");
const cluster = require("cluster");

const config = {
  ticker: "BSV",
  nodes: [`18.192.253.59:8333`],
  forceUserAgent: `Bitcoin SV`,
  invalidBlocks: [],
  dataDir: path.join(__dirname, "data"),
  pruneBlocks: 0, // 0 for no block pruning
  blockHeight: -1, // Sync to block height
  port: 8080, // Master cluster port
};

if (cluster.isWorker) {
  const worker = new Worker();
} else if (cluster.isPrimary) {
  const master = new Master(config);
  master.startServer();
}
