import { ethers } from "hardhat";

async function main() {
  
//deploys smart contract
  const Secret = await ethers.getContractFactory("Secret");
  const secret = await Secret.deploy();

  await secret.deployed();

  console.log(`deployed to ${secret.address}`);
  console.log(`Block explorer URL: https://blockscout.scroll.io/address/${secret.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
