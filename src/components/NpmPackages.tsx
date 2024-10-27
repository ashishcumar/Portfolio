import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { npmData } from "../helpers/staticData";
import { useState } from "react";

export default function NpmPackages() {
  return (
    <Box margin={"24px 0"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"24px"} display={{base:'none',sm:'block'}} fontWeight={"800"} margin="24px 0 12px 0">
          Npm Packages  (Open Source Projects)
        </Text>
        <Text fontSize={"24px"} display={{base:'block',sm:'none'}} fontWeight={"800"} margin="24px 0 12px 0">
          Npm Packages 
        </Text>
       
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            textDecoration={"underline"}
            cursor={"pointer"}
            onClick={() =>
              window.open("https://www.npmjs.com/~iashish.99", "_blank")
            }
          >
            view all
          </Text>

      </Flex>

      <Flex 
      gap="24px" 
      flexWrap={'wrap'}>
        {npmData.map((card) => {
          return <ProjectCard card={card} key={card.title} />;
        })}
      </Flex>
    </Box>
  );
}
