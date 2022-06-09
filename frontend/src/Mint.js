import { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useMoralis, useMoralisWeb3ApiCall } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";

import Moralis from "moralis";
import { contractABI, contractAddress } from "./contract/contract";
import { ethers } from "ethers";

export default function Mint({ isConnected }) {
  const [mintAmount, setMintAmount] = useState(1);

  async function handleMint() {
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
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  return (
    <Flex justify="center" align="center" paddingTop="150px">
      <Box width="40%" id="mint">
        <div>
          <Text fontSize="42px" textShadow="0 5px #000000">
            Mint
          </Text>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            PhantasyPlanets will be limited to just 1000 and forever have
            priority and exclusivity over future features.
          </Text>
        </div>
        {isConnected ? (
          <div>
            <Flex align="center" justify="center">
              <Button
                backgroundColor="#b86184"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleDecrement}
              >
                -
              </Button>
              <Input
                readOnly
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type="number"
                value={mintAmount}
              />
              <Button
                backgroundColor="#b86184"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                marginTop="10px"
                onClick={handleIncrement}
              >
                +
              </Button>
            </Flex>
            <Button
              backgroundColor="#b86184"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              marginTop="10px"
              onClick={handleMint}
            >
              Mint
            </Button>
          </div>
        ) : (
          <Text
            marginTop="20px"
            fontSize="40px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="#D6517D"
          >
            {/* You must connect to Mint */}
            Coming in Autumn 2022
          </Text>
        )}
      </Box>
    </Flex>
  );
}
