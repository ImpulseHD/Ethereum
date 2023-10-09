import logger from "../utils/logger";
import Block from "../utils/block";
import fs from "fs";

async function createBlockchain() {
    const genesisBlock: Block = new Block("0x0000000000000000000000000000000000000000000000000000000000000000");
    fs.writeFileSync("./data/blockchain.json", JSON.stringify([genesisBlock]));
    logger.info("Blockchain created successfully with genesis block")
};

export function createNodeFromGenesis() {
    logger.info("Starting node on Ethereum mainnet...");
    createBlockchain();
};