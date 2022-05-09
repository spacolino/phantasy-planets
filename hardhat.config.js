require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const fsPromises = fs.promises;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// Task to update template json metadata
// Currently updates image and external URIs
// TO-DO: source and destination folders
task("updateMetadata", "Updates metadata with actual data")
  .addParam("count", "Files count")
  .addParam("imageuri", "Images Ipfs CID")
  .addParam("pageuri", "Images Ipfs CID")
  .setAction(async function (taskArguments, hre) {
    // var path = taskArguments.path;
    var count = taskArguments.count;
    var imageUri = taskArguments.imageuri;
    var pageUri = taskArguments.pageuri;

    console.log(
      `File count:${count} Image URI:${imageUri} Page URI:${pageUri}`
    );

    try {
      let filehandle = null;
      let filehandleWrite = null;

      for (let id = 1; id <= count; id++) {
        // open template metadata
        filehandle = await fsPromises.open(
          `/home/spaco/development/crypto-planets/metadata/templates/${id}.json`,
          "r+"
        );

        if (
          !fs.existsSync(
            "/home/spaco/development/crypto-planets/metadata/updated/"
          )
        ) {
          fs.mkdirSync(
            "/home/spaco/development/crypto-planets/metadata/updated/"
          );
        }

        // create updated metadata file
        filehandleWrite = await fsPromises.open(
          `/home/spaco/development/crypto-planets/metadata/updated/${id}.json`,
          "w+"
        );

        // read template metadata
        var data = await filehandle.readFile("utf8");

        // update data
        newData = data
          .replace("##IMAGE_URI##", `${imageUri}.png`)
          .replace("##PAGE_URI##", `${pageUri}`);

        // write updated data to new file
        await filehandleWrite.writeFile(newData);

        console.log(`${id}.json`);

        // close both files
        filehandle.close();
        filehandleWrite.close(0);
      }
    } catch (e) {
      console.log(e);
    }
  });

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: `https://speedy-nodes-nyc.moralis.io/75de1ad087cf3e2eed4fd036/eth/ropsten`,
      accounts: [
        `40064369e6f8ac0f609bc79a60bc3cc6bccb4624bf554c0f71babe537182477f`,
      ],
    },
    rinkeby: {
      url: `https://speedy-nodes-nyc.moralis.io/75de1ad087cf3e2eed4fd036/eth/rinkeby`,
      accounts: [
        `40064369e6f8ac0f609bc79a60bc3cc6bccb4624bf554c0f71babe537182477f`,
      ],
    },
  },
};
