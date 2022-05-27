import { Box, Flex, Text, SimpleGrid, Image, Badge } from "@chakra-ui/react";
import "./About.css";

function About() {
  return (
    <Flex
      justify="center"
      align="start"
      // height="100v"      
      marginBottom={600}
      paddingTop="150px"
      className="about"
    >
      <Box width="40%" id="about">
        <div>
          <Text fontSize="42px" textShadow="0 4px #717171">
            <Badge>PHANTASY</Badge> PLANETS
          </Text>
          <Text
            fontSize="26px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            Phantasy Planets is a NFT collection of completely random generated
            space scenes with randomly generated planets of various types as the
            main stars of the show.
          </Text>
          <Text
            fontSize="26px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            Since we currently don't have any proper artists on the team and having quite some experience with computer generated graphics, we generate every pixel you see in the images by code.
            Each scene consist of a planet and can have various additional elements on it: background starfield and nebulas of various shapes and colors, a Milky Way, moons, secondary suns, planet rings, comets etc. 
          </Text>
          <Text
            fontSize="26px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >           
            Each element has it's own rarity. The rarity of a complete scene is based on which elements are on in and their respective rarities. 
            Based on this, we divide all the generated NFTs in a couple of rarity groups: common, uncommon, rare, super rare and 'there-can-be-only-one' (yes, there will be a couple of special unique planets).
            The art style of the scenes is a mix between stylized (exagerating some features) and realistic.
          </Text>
          <Text
            fontSize="26px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >           
            Since everything is randomly generated, no two images are the same, even if they have the same elements.
          </Text>
          <Text
            fontSize="26px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >           
            A couple of examples:
          </Text>
          <SimpleGrid columns={2} spacing={10}>
            <Box>
              <Image src="/planet_1.png" />
            </Box>
            <Box>
              <Image src="/planet_2.png" />
            </Box>
            <Box>
              <Image src="/planet_3.png" />
            </Box>
            <Box>
              <Image src="/planet_4.png" />
            </Box>
            </SimpleGrid>
        </div>
      </Box>
    </Flex>
  );
}

export default About;
