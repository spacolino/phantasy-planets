import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3ApiCall } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import Moralis from "moralis";

import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
// import Twitter from "./assets/social-media-icons/twitter_32x32.png";
// import Discord from "./assets/social-media-icons/discord_32x32.png";
import "./Navbar.css";

export default function Navbar({
  authenticate,
  isAuthenticated,
  account,
  isConnected,
}) {
  var address = "";

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 120) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);
  });

  async function connectAccount() {
    if (!isAuthenticated || !account) {
      await authenticate({ signingMessage: "Phantasy Planets" })
        .then(function (user) {
          console.log(user.get("ethAddress"));
          isConnected = true;
          // web3provider = Moralis.enableWeb3();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    // <Flex className="navbar">
    <Flex className={color ? "navbar navbar-bg" : "navbar"}>
      {/** Left Side */}
      <Flex
        className={color ? "navbar-logo-active" : "navbar-logo"}
        justify="space-around"
        width="20%"
        padding="0 90px"
      >
        {/* <Link href="https://twitter.com">
          <Image src={Twitter} boxSize="38px" margin="0 5px" />
        </Link>
        <Link href="https://twitter.com">
          <Image src={Discord} boxSize="38px" margin="0 5px" />
        </Link> */}
        <Link to="about" smooth="true" offset={-150} duration={500}>
          PHANTASY PLANETS
        </Link>
      </Flex>

      {/** Right Side */}
      <Flex justify="space-around" align="center" width="40%">
        <Box margin="0 10px" className="nav-item-box">
          <Link
            className="nav-item"
            activeClass="active"
            to="about"
            smooth={true}
            spy={true}
            duration={500}
            offset={-150}
          >
            About
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 10px" className="nav-item-box">
          <Link
            className="nav-item"
            activeClass="active"
            to="future"
            smooth={true}
            spy={true}
            duration={500}
            offset={-150}
          >
            Future
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 10px" className="nav-item-box">
          <Link
            className="nav-item"
            activeClass="active"
            to="mint"
            smooth={true}
            spy={true}
            duration={500}
            offset={-150}
          >
            Mint
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 10px" className="nav-item-box">
          <Link
            className="nav-item"
            activeClass="active"
            to="team"
            smooth={true}
            spy={true}
            duration={500}
            offset={-150}
          >
            Team
          </Link>
        </Box>
        <Spacer />

        {/** Connect */}
        {isConnected ? (
          <Box margin="0 10px">Connected</Box>
        ) : (
          <Box margin="0 10px">
            <Button
              backgroundColor="#b86184"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="0 10px"
              // onClick={connectAccount}
            >
              Connect
            </Button>
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
