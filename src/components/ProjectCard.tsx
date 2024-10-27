import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface IProps {
  card: {
    id: number;
    img: string;
    title: string;
    tags: string[];
    redirectionLink: string;
    description: string;
  };
}
function ProjectCard(props: IProps) {
  const { card } = props;
  return (
    <Box
      width={{base:"100%",sm:"354px"}}
      height={"300px"}
      borderRadius={"md"}
      boxShadow={"sm"}
      sx={{
        "&:hover": {
          boxShadow: "md",
        },
      }}
      cursor={"pointer"}
      onClick={() => window.open(card.redirectionLink, "_blank")}
      background={"white"}
      border={"1px solid #e5e7eb"}
    >
      <Box
        height="180px"
        padding={"12px"}
        width={"100%"}
        borderRadius={"md"}
        transition="all 0.3s ease-in-out"
        sx={{
          "&:hover": {
            padding: "8px",
            background: "white",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        <Image
          src={card.img}
          height={"100%"}
          objectFit={"contain"}
          margin={"auto"}
        />
      </Box>
      <Box padding={"12px"}>
        <Text fontSize={"16px"} fontWeight={"600"} noOfLines={1}>
          {" "}
          {card.title}{" "}
        </Text>
        <Text fontSize={"14px"} color={"secondary"} noOfLines={2}>
          {" "}
          {card.description}{" "}
        </Text>
        <Flex
          gap={"12px"}
          flexWrap={"nowrap"}
          overflow={"hidden"}
          margin={"8px 0"}
          fontSize={"10px"}
        >
          {card.tags.map((tag,i) => {
            const temp = Math.ceil(Math.random() * 21);
            return (
              <Text
                key={card.title + tag}
                as="span"
                padding={"0 8px"}
                borderRadius={"md"}
                width={"fit-content"}
                background={`keywords.shade${temp % 21}.light`}
                color={`keywords.shade${temp % 21}.dark`}
                fontSize={"10px"}
                wordBreak={"normal"}
                noOfLines={1}
              >
                {tag}{" "}
              </Text>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}

export default ProjectCard;
