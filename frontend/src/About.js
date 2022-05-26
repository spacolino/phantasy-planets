import { Box, Flex, Text } from "@chakra-ui/react";
import "./About.css";

function About() {
  return (
    <Flex
      justify="center"
      align="center"
      height="100v"
      paddingBottom="10px"
      paddingTop="150px"
      className="about"
    >
      <Box width="800px" id="about">
        <div>
          <Text fontSize="42px" textShadow="0 5px #717171">
            PhantasyPlanets
          </Text>
          <Text
            fontSize="26px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            Phantasy Planets is a NFT collection of completely random generated
            space scenes with randomly generated planets of various types as the
            main stars of the show :)
          </Text>
        </div>
      </Box>
    </Flex>
  );
}

export default About;
