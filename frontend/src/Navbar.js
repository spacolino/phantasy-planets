import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3ApiCall } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import Moralis from "moralis";

import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
// import Twitter from "./assets/social-media-icons/twitter_32x32.png";
// import Discord from "./assets/social-media-icons/discord_32x32.png";
import Logo from "./assets/planets/lonely-planet.png";
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
        <Link to="/about">
          {/* <Text
            fontSize="18px"
            textShadow="0 2px #717171"
            textDecoration="none"
            textColor={"#ff5100"}
          >
            PHANTASY PLANETS
          </Text> */}
          {/* <Image src={Logo} height="74px" margin={"0 5px"} /> */}
          <Image className={color ? "navbar-logo-active" : "navbar-logo"} />
        </Link>
      </Flex>

      {/** Right Side */}
      <Flex justify="space-around" align="center" width="750px">
        <Box margin="0 10px">
          <Link className="nav-item" to="/about">
            About
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 10px">
          <Link className="nav-item" to="/future">
            Future
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 10px">
          <Link className="nav-item disabled-link" to="/mint">
            Mint
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 10px">
          <Link className="nav-item" to="team">
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
              backgroundColor="#c36363"
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
