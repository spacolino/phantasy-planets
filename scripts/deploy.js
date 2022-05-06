async function main() {
    // We get the contract to deploy
    const Planets = await ethers.getContractFactory("PlanetsContract");
    const planets = await Planets.deploy("PhantasyPlanets"
                                    ,"PHP"
                                    ,5000000000000000
                                    ,1000
                                    ,3
                                    ,"ipfs://QmNqqZycFCsGKTwgW8Vaf2K7umB3wznwPctbo8HyyXkGE4/");
  
    await planets.deployed();
  
    console.log("Planets deployed to:", planets.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  