import { Box, Flex, Text } from "@chakra-ui/react";
import "./Future.css";

function Future() {
  return (
    <Flex
      justify="center"
      align="center"
      height="100v"      
      paddingTop="150px"
      className="future"
    >
      <Box width="800px" id="future">
        <div>
          <Text fontSize="42px" textShadow="0 5px #717171">
            FUTURE
          </Text>
          <Text
            fontSize="26px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            We are going to be competely transparent and tell you immediately that this is our first NFT project, so we are kinda newbies in this space.
            Since we are avid gamers and game developers, our main focus are actually indie NFT based games, but we decided to dip our toes into web3, blockchain and NFT universe with a NFT drop first, 
            with the purpose to get some experience, contacts in the NFT community and possibly some funding to get a couple more people on the team.            
          </Text>
          <Text
            fontSize="26px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >            
            After this, the plan is to focus our efforts on developing a minimalistic indie sci-fi archaeology and exploration game with ARPG and roguelite elements.
            An important part of the game will be a 'play to earn' mechanic based on NFTs that you can find in the ancient ruins across various planets.
            Well, probably just one small planet for starters, later expanding on more. And this is where this NFT collection comes in, the planets.
          </Text>
        </div>
      </Box>
    </Flex>
  );
}

export default Future;
