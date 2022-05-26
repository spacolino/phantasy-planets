import React from 'react';
import {Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';
import './NavBar.css';
import Twitter from "./assets/social-media-icons/twitter_32x32.png"
import Email from "./assets/social-media-icons/email_32x32.png"

export default function NavBar({sticky, accounts, setAccounts}) {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_request_Accounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex className={sticky ? "navbar navbar-sticky" : "navbar"}>
            {/** Left Side */}
            <Flex justify="space-around" width="20%" padding="0 75px">
                <Link href="https://twitter.com">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>                        
                <Link href="https://twitter.com">
                    <Image src={Email} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>

            {/** Right Side */}
            <Flex justify="space-around" align="center" width="40%" padding="30px">
                <Box margin="0 15px">About</Box>
                <Spacer/>
                <Box margin="0 15px">Mint</Box>
                <Spacer/>
                <Box margin="0 15px">Team</Box>
                <Spacer/>
                

                {/** Connect */}
                {isConnected ? (
                    <Box margin="0 15px">Connected</Box>
                ) : (
                    <Button 
                        backgroundColor="#D6517D"
                        borderRadius="5px" 
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="0 15px"
                        onClick={connectAccount}
                        >
                            Connect
                    </Button>                    
                )}
            </Flex>
        </Flex>
    )
}