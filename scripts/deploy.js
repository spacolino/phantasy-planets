async function main() {
    // We get the contract to deploy
    const Planets = await ethers.getContractFactory("Planets");
    const planets = await Planets.deploy();
  
    await planets.deployed();
  
    console.log("Planets deployed to:", planets.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  