require("@nomiclabs/hardhat-waffle");



// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://speedy-nodes-nyc.moralis.io/75de1ad087cf3e2eed4fd036/eth/rinkeby`,
      accounts: [`4b83f4f6b1c90ed9fc425129358a7327dd4877e5136df1a7aae65f355b192378`]
    }
  }
};
