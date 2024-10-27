import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import { techStack } from "../helpers/staticData";
function TechStack() {
  return (
    <Box margin={"24px 0 36px 0"}>
      <Text
        fontSize={'24px'}
        fontWeight={"800"}
        margin="24px 0 12px 0"
      >
        Tech Stack
      </Text>
      <Flex gap="12px 24px" flexWrap={"wrap"}>
        {techStack.map((item, i) => {
          return (
            <Tag
              gap="12px"
              background={`keywords.shade${i % 21}.light`}
              color={`keywords.shade${i % 21}.dark`}
              fontSize={"14px"}
            >
              {item.title}
            </Tag>
          );
        })}
      </Flex>
    </Box>
  );
}

export default TechStack;
