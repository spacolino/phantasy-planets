import { Box, Flex, SimpleGrid, Text, Spacer } from "@chakra-ui/react";
import "./Team.css";

function Team() {
  return (
    <Flex justify="center" align="start" paddingTop="150px" className="team">
      <Box width="800px" id="team">
        <div>
          <Text fontSize="42px" textShadow="0 4px #717171" paddingBottom={40}>
            TEAM
          </Text>
          <SimpleGrid columns={2} spacing={40}>
            <Box>
              <Text fontSize="24px" textShadow="0 2px #717171">
                GOOATH
              </Text>
              <Text
                fontSize="20px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                textShadow="0 2px 2px #000000"
              >
                The procedurally-generated-art coding guy on the project.
                Currently a product lead in a non related industry, working with
                creative people of all kinds: software engineers, artists, sound
                engineers etc. Basically an old fart, a lifelong gamer with a
                passion for game development. Worked on some published game
                projects in the past, admittedly none very successful, but
                accumulated copious amount of experience doing it.
              </Text>
            </Box>
            <Box>
              <Text fontSize="24px" textShadow="0 2px #717171">
                SPACE-O
              </Text>
              <Text
                fontSize="22px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                textShadow="0 2px 2px #000000"
              >
                The web3, blockchain, smart contracts and 'everything backend'
                guy on the project. (TO-DO)
              </Text>
            </Box>
            <Box>
              <Text fontSize="24px" textShadow="0 2px #717171">
                WANTED!
              </Text>
              <Text
                fontSize="20px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                textShadow="0 2px 2px #000000"
                s
              >
                We are aware that communities are very important part of this
                kind of projects, so we are looking for a good community
                manager, experienced in the NFT field. If you are one of those
                and interested in joining: [link]
              </Text>
            </Box>
          </SimpleGrid>
        </div>
      </Box>
    </Flex>
  );
}

export default Team;
