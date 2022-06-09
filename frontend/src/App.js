// import * as React from "react";
import { useMoralis /*, useMoralisWeb3ApiCall*/ } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";
// import Moralis from "moralis";
// import { contractABI, contractAddress } from "./contract/contract";
// import { ethers } from "ethers";
import "./App.css";
import Mint from "./Mint";
import Navbar from "./Navbar";
import About from "./About";
import Future from "./Future";
import Team from "./Team";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  var isConnected = false;

  let web3provider;
  // const Web3Api = useMoralisWeb3Api();
  const { authenticate, isAuthenticated, isAuthenticating, account, logout } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Authenticated");
    }
  }, [isAuthenticated]);

  // const login = async () => {
  //   if (!isAuthenticated || !account) {
  //     await authenticate({ signingMessage: "Phantasy Planets" })
  //       .then(function (user) {
  //         console.log(user.get("ethAddress"));
  //         web3provider = Moralis.enableWeb3();
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // } else {
  //   const options = {
  //     address: "0x2cb4F25E9b4218920bFe8D39251269a0b96dE3b8",
  //   };
  //   const NFTs = Web3Api.account.getNFTs(options).then(function (nfts) {
  //     console.log(nfts);
  //   });
  // }
  // };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  // const mint = async () => {
  //   try {
  //     let lib = Moralis.web3Library;
  //     const prov = new lib.providers.Web3Provider(Moralis.provider);
  //     const signer = prov.getSigner();
  //     const web3 = new lib.Contract(contractAddress, contractABI, signer);
  //     const _contract = await web3.mint(3, {
  //       value: ethers.utils.parseEther("0.0003"),
  //     });
  //     await _contract.wait();

  //     alert(
  //       `3 NFTs successfully minted. Contract address - ${contractAddress}`
  //     );
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div className="App">
      <Navbar
        authenticate={authenticate}
        isAuthenticated={isAuthenticated}
        account={account}
        isConnected={isConnected}
      />
      {/* <About />
      <Future />
      <Mint isConnected={isConnected} />
      <Team /> */}
      <Outlet />
      <Footer />
      {/* <div>
          <button onClick={login}>Connect Wallet</button>
          <button onClick={logOut} disabled={isAuthenticating}>
            Disconnect
          </button>
          <button onClick={mint}>Mint</button>
        </div> */}
    </div>
  );
}

export default App;
