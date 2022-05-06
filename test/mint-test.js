const { expect } = require("chai");
const { ethers } = require("hardhat");
const { experimentalAddHardhatNetworkMessageTraceHook } = require("hardhat/config");

describe(" ----------- PLANETS CONTRACT MINTING TEST --------------- ", function () {

  let planets;

  this.beforeEach(async function() {

    const Planets = await ethers.getContractFactory("PlanetsContract");
    planets = await Planets.deploy("Planets","Pnt"
                            ,5000000000000000
                            ,1000
                            ,3
                            ,"ipfs://QmbytEjcqZpYzkNefqxwwx49RtxAN5RJEH4vSX6KorMXxC/hidden.json");    

    await planets.deployed();

    console.log(" ");
    console.log("Contract deployed to: %s", planets.address);
  })

  it("NFT minted successfully", async function () {        
    [owner, account1] = await ethers.getSigners();

    const provider = ethers.provider;
    let balance = await provider.getBalance(account1.address);

    console.log(" ");
    console.log("Contract is paused.");
    console.log(" ");
    console.log("-----------------------------");
    console.log("Contract owner address: %s", owner.address);
    console.log("Minting wallet address: %s", account1.address);
    console.log("Minting wallet balance (wei): %s", balance);
    console.log("-----------------------------");
    expect(await planets.balanceOf(account1.address)).to.equal(0);
        
    const txPaused = await planets.setPaused(false);        
    expect(await planets.paused()).to.equal(false);    

    console.log(" ");
    console.log("Contract unpaused.");
    
    let mintQuantity = 1;
    console.log(" ");    
    console.log("Mint %s NFT token(s)", mintQuantity);
    console.log("Mint price (wei): %s", ethers.utils.parseEther("0.005") * mintQuantity);
    const txMint = await planets.connect(account1)
                                 .mint(mintQuantity, {value: ethers.utils.parseEther("0.005")});
    await txMint.wait();

    let balanceOf = await planets.balanceOf(account1.address);    
    expect(await planets.balanceOf(account1.address)).to.equal(mintQuantity);

    balance = await provider.getBalance(account1.address);

    console.log("-----------------------------");
    console.log("Mint successfull.");
    console.log("Wallet Planets NFT token balance: %s", balanceOf);
    console.log("Minting wallet balance (wei): %s", balance);
  });

  it("2 NFTs minted successfully", async function () {        
    [owner, account1] = await ethers.getSigners();

    const provider = ethers.provider;
    let balance = await provider.getBalance(account1.address);

    console.log(" ");
    console.log("Contract is paused.");
    console.log(" ");
    console.log("-----------------------------");
    console.log("Contract owner address: %s", owner.address);
    console.log("Minting wallet address: %s", account1.address);
    console.log("Minting wallet balance (wei): %s", balance);
    console.log("-----------------------------");
    expect(await planets.balanceOf(account1.address)).to.equal(0);
        
    const txPaused = await planets.setPaused(false);        
    expect(await planets.paused()).to.equal(false);    

    console.log(" ");
    console.log("Contract unpaused.");
    
    let mintQuantity = 2;
    let mintPrice = ethers.utils.parseEther("0.01");
    console.log(" ");    
    console.log("Mint %s NFT token(s)", mintQuantity);
    console.log("Mint price (wei): %s", mintPrice);
    const txMint = await planets.connect(account1)
                                 .mint(mintQuantity, {value: mintPrice});
    await txMint.wait();

    let balanceOf = await planets.balanceOf(account1.address);    
    expect(await planets.balanceOf(account1.address)).to.equal(mintQuantity);

    balance = await provider.getBalance(account1.address);

    console.log("-----------------------------");
    console.log("Mint successfull.");
    console.log("Wallet Planets NFT token balance: %s", balanceOf);
    console.log("Minting wallet balance (wei): %s", balance);
  });

  it("3 NFTs minted successfully", async function () {        
    [owner, account1] = await ethers.getSigners();

    const provider = ethers.provider;
    let balance = await provider.getBalance(account1.address);

    console.log(" ");
    console.log("Contract is paused.");
    console.log(" ");
    console.log("-----------------------------");
    console.log("Contract owner address: %s", owner.address);
    console.log("Minting wallet address: %s", account1.address);
    console.log("Minting wallet balance (wei): %s", balance);
    console.log("-----------------------------");
    expect(await planets.balanceOf(account1.address)).to.equal(0);
        
    const txPaused = await planets.setPaused(false);        
    expect(await planets.paused()).to.equal(false);    

    console.log(" ");
    console.log("Contract unpaused.");
    
    let mintQuantity = 3;
    let mintPrice = ethers.utils.parseEther("0.015");
    console.log(" ");    
    console.log("Mint %s NFT token(s)", mintQuantity);
    console.log("Mint price (wei): %s", mintPrice);
    const txMint = await planets.connect(account1)
                                 .mint(mintQuantity, {value: mintPrice});
    await txMint.wait();

    let balanceOf = await planets.balanceOf(account1.address);    
    expect(await planets.balanceOf(account1.address)).to.equal(mintQuantity);

    balance = await provider.getBalance(account1.address);

    console.log("-----------------------------");
    console.log("Mint successfull.");
    console.log("Wallet Planets NFT token balance: %s", balanceOf);
    console.log("Minting wallet balance (wei): %s", balance);
  });

  it("4 or more NFTs mint should no pass!", async function () {        
    [owner, account1] = await ethers.getSigners();

    const provider = ethers.provider;
    let balance = await provider.getBalance(account1.address);

    console.log(" ");
    console.log("Contract is paused.");
    console.log(" ");
    console.log("-----------------------------");
    console.log("Contract owner address: %s", owner.address);
    console.log("Minting wallet address: %s", account1.address);
    console.log("Minting wallet balance (wei): %s", balance);
    console.log("-----------------------------");
    expect(await planets.balanceOf(account1.address)).to.equal(0);
        
    const txPaused = await planets.setPaused(false);        
    expect(await planets.paused()).to.equal(false);    

    console.log(" ");
    console.log("Contract unpaused.");
    
    let mintQuantity = 4;
    let mintPrice = ethers.utils.parseEther("0.02");
    console.log(" ");    
    console.log("Mint %s NFT token(s)", mintQuantity);
    console.log("Mint price (wei): %s", mintPrice);

    // expect to fail
    await expect(planets.connect(account1)
                                 .mint(mintQuantity, {value: mintPrice}))
          .to.be.revertedWith("Invalid mint amount!");

    let balanceOf = await planets.balanceOf(account1.address);    
    expect(await planets.balanceOf(account1.address)).to.equal(0);

    balance = await provider.getBalance(account1.address);

    console.log("-----------------------------");
    console.log("Minting 4 or more token did not pass.");
    console.log("Wallet Planets NFT token balance: %s", balanceOf);
    console.log("Minting wallet balance (wei): %s", balance);
  });
});