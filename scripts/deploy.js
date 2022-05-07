async function main() {
    // We get the contract to deploy
    const Planets = await ethers.getContractFactory("PlanetsContract");
    const planets = await Planets.deploy("PhantasyPlanets"
                                    ,"PHP"
                                    ,100000000000000
                                    ,1000
                                    ,3
                                    ,"ipfs://QmNqqZycFCsGKTwgW8Vaf2K7umB3wznwPctbo8HyyXkGE4/"
                                    ,"ipfs://QmZ328XoJy3WbbhaqmaCZrW2vr59a3xwJARm6zUPVRVTet/contract.json");
  
    await planets.deployed();
  
    console.log("Planets deployed to:", planets.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  