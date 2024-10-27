import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../helpers/staticData";
import { useState } from "react";

export default function ProjectsAndBlogs() {
  const [projectLength, setProjectLength] = useState(3);
  return (
    <Box margin={"24px 0"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"24px"} fontWeight={"800"} margin="24px 0 12px 0">
          Projects
        </Text>
        {projectsData.length > 3 ? (
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            textDecoration={"underline"}
            cursor={"pointer"}
            onClick={() =>
              setProjectLength((prev) =>
                prev === projectsData.length ? 3 : projectsData.length
              )
            }
          >
            {projectLength === projectsData.length ? "hide" : "view more"}
          </Text>
        ) : null}
      </Flex>

      <Flex 
      gap="24px" 
      flexWrap={'wrap'}>
        {projectsData.slice(0, projectLength).map((card) => {
          return <ProjectCard card={card} key={card.title} />;
        })}
      </Flex>
    </Box>
  );
}
