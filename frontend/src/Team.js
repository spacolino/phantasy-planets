import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import "./Team.css";
import "./Global.css";

function Team() {
  return (
    <Flex justify="center" align="start" paddingTop="150px" className="category-content">
      <Box width="800px" id="team">
        <div>
          <Text className="category-title" paddingBottom={40}>
            TEAM
          </Text>
          <SimpleGrid columns={2} spacing={40}>
            <Box>
              <Text fontSize="24px" textShadow="0 2px #717171">
                GOOATH
              </Text>
              <Text className="category-text"
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
              <Text className="category-text"
              >
                The web3, blockchain, smart contracts and 'everything backend'
                guy on the project. (TO-DO)
              </Text>
            </Box>
            <Box>
              <Text fontSize="24px" textShadow="0 2px #717171">
                WANTED!
              </Text>
              <Text className="category-text"                
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
