import { Box, Flex, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { blogsData } from "../helpers/staticData";
import { useState } from "react";

export default function Blogs() {
  const [projectLength, setProjectLength] = useState(3);
  return (
    <Box margin={"24px 0"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"24px"} fontWeight={"800"} margin="24px 0 12px 0">
          Blogs
        </Text>
        {blogsData.length > 3 ? (
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            textDecoration={"underline"}
            cursor={"pointer"}
            onClick={() =>
              setProjectLength((prev) =>
                prev === blogsData.length ? 3 : blogsData.length
              )
            }
          >
            {projectLength === blogsData.length ? "hide" : "view more"}
          </Text>
        ) : null}
      </Flex>
      <Flex gap="24px" flexWrap={"wrap"}>
        {blogsData.slice(0, projectLength).map((card) => {
          return <ProjectCard card={card} key={card.title} />;
        })}
      </Flex>
    </Box>
  );
}
