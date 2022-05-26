import { Box, Flex, Text } from "@chakra-ui/react";
import "./Future.css";

function Future() {
  return (
    <Flex
      justify="center"
      align="center"
      height="100v"
      paddingBottom="10px"
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
            Blalalalala
          </Text>
        </div>
      </Box>
    </Flex>
  );
}

export default Future;
