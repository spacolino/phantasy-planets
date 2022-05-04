async function main() {
    // We get the contract to deploy
    const Planets = await ethers.getContractFactory("PlanetsContract");
    const planets = await Planets.deploy("Planets","Pnt",800000000000000,1000,3,"ipfs://QmbytEjcqZpYzkNefqxwwx49RtxAN5RJEH4vSX6KorMXxC/hidden.json");
  
    await planets.deployed();
  
    console.log("Planets deployed to:", planets.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  