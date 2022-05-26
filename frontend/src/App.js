// import * as React from "react";
import { useMoralis, useMoralisWeb3ApiCall } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";
import Moralis from "moralis";
import { contractABI, contractAddress } from "./contract/contract";
import { ethers } from "ethers";
import "./App.css";
import useSticky from './hooks/useSticky.js'
import MainMint from './MainMint';
import NavBar from './NavBar';

function App() {

  const {isSticky ,element} = useSticky();
  const [accounts, setAccounts] = useState([]);

  let web3provider;
  const Web3Api = useMoralisWeb3Api();
  const { authenticate, isAuthenticated, isAuthenticating, account, logout } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Authenticated");
    }
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated || !account) {
      await authenticate({ signingMessage: "Phantasy Planets" })
        .then(function (user) {
          console.log(user.get("ethAddress"));
          web3provider = Moralis.enableWeb3();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // } else {
    //   const options = {
    //     address: "0x2cb4F25E9b4218920bFe8D39251269a0b96dE3b8",
    //   };
    //   const NFTs = Web3Api.account.getNFTs(options).then(function (nfts) {
    //     console.log(nfts);
    //   });
    // }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  const mint = async () => {
    try {
      let lib = Moralis.web3Library;
      const prov = new lib.providers.Web3Provider(Moralis.provider);
      const signer = prov.getSigner();
      const web3 = new lib.Contract(contractAddress, contractABI, signer);
      const _contract = await web3.mint(3, {
        value: ethers.utils.parseEther("0.0003"),
      });
      await _contract.wait();

      alert(
        `3 NFTs successfully minted. Contract address - ${contractAddress}`
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="App">
        <NavBar sticky={isSticky} accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
        {/* <div>
          <button onClick={login}>Connect Wallet</button>
          <button onClick={logOut} disabled={isAuthenticating}>
            Disconnect
          </button>
          <button onClick={mint}>Mint</button>
        </div> */}
      </div>
      {/* <div className="moving-background"></div> */}
     </div>
  );
}

export default App;
