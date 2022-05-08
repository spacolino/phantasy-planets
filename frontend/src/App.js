import logo from './logo.svg';
import './App.css';
import { useMoralis, useMoralisWeb3ApiCall} from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from 'react';
import Moralis from 'moralis';
import { contractABI, contractAddress } from "./contract/contract";
import { ethers } from 'ethers';

function App() {

  let web3provider;
  const Web3Api = useMoralisWeb3Api();
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if(file) {
      console.log("FILE:" + file.name);
    }
  }, [file]);

  const login = async () => {
    if (!isAuthenticated) {
    
      await authenticate({signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));          
          web3provider  = Moralis.enableWeb3();
        })
        .catch(function (error) {
          console.log(error);
        });
    }  
    else
    {
      const options = {          
        address: "0x2cb4F25E9b4218920bFe8D39251269a0b96dE3b8"
      };
      const NFTs = Web3Api.account.getNFTs(options)
      .then(function(nfts) {
        console.log(nfts);
      });
    }    
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

  const mint = async () => {
      
    try {             
        let lib = Moralis.web3Library;
        const prov = new lib.providers.Web3Provider(Moralis.provider);
        const signer = prov.getSigner();        
        const web3 = new lib.Contract(contractAddress, contractABI, signer);        
        const _contract = await web3.mint(3, {value: ethers.utils.parseEther("0.0003")});
        await _contract.wait();

        // const contract = new web3.eth.Contract(contractABI, contractAddress);
        // const response = await contract.methods
        //   .safeMint(metadataurl)
        //   .send({ from: user.get("ethAddress") })
        //   .on('receipt', function(receipt) {
        //     console.log(receipt);
        //   }).then(function(receipt) {
        //     console.log(receipt);
        //   });
          
        // const tokenId = response.events.Transfer.returnValues.tokenId;
        
        alert(
          `3 NFTs successfully minted. Contract address - ${contractAddress}`
        );
    }
    catch(err)
    {
      console.error(err);
    }
  }


  return (
    <div className="App">
      <header className="App-header">        
        <button onClick={login}>Connect Wallet</button>
        <button onClick={logOut} disabled={isAuthenticating}>Disconnect</button>
        <p/>
        {/* <input type='text' value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} /> */}
        {/* <input type="file" onChange={(e) => {

            if(e.target.files != null) {
              console.log("File: " + e.target.files[0].name);
              setFile(e.target.files[0])              
            }
          }
        } 
        /> */}
        <p/>
        <button onClick={mint}>Mint</button>        
      </header>
    </div>
  );
}

export default App;
