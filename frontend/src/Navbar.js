import React from "react";
import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link } from "react-scroll";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Discord from "./assets/social-media-icons/discord_32x32.png";
import "./Navbar.css";

export default function Navbar({ accounts, setAccounts }) {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_request_Accounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <Flex className="navbar">
      {/** Left Side */}
      <Flex justify="space-around" width="20%" padding="0 90px">
        <Link href="https://twitter.com">
          <Image src={Twitter} boxSize="38px" margin="0 5px" />
        </Link>
        <Link href="https://twitter.com">
          <Image src={Discord} boxSize="38px" margin="0 5px" />
        </Link>
      </Flex>

      {/** Right Side */}
      <Flex justify="space-around" align="center" width="40%" padding="40px">
        <Box margin="0 15px">
          <Link activeClass='active' to="about" smooth={true} spy={true} duration={500} offset={-150}>About</Link>
        </Box>
        <Spacer />
        <Box margin="0 15px">
          <Link activeClass='active' to="future" smooth={true} spy={true} duration={500}  offset={-150}>
            Future
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 15px">
          <Link activeClass='active' to="mint" smooth={true} spy={true} duration={500}  offset={-150}>
            Mint
          </Link>
        </Box>
        <Spacer />
        <Box margin="0 15px">
          <Link activeClass='active' to="team" smooth={true} spy={true} duration={500}  offset={-150}>
            Team
          </Link>
        </Box>
        <Spacer />

        {/** Connect */}
        {isConnected ? (
          <Box margin="0 15px">Connected</Box>
        ) : (
          <Button
            // backgroundColor="#D6517D"
            backgroundColor={"7f7f7f"}
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            opacity="0.6"
            disabled
            // onClick={connectAccount}
          >
            Wen Chain?
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
