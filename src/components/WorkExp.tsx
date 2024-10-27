import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { workExpData } from "../helpers/staticData";

function WorkExp() {

  return (
    <Box margin={"24px 0"}>
      <Text fontSize={"24px"} fontWeight={"800"} margin="24px 0 12px 0">
        Work Experience
      </Text>
      <Grid>
        <Box
          background={"white"}
          boxShadow={"md"}
          borderRadius={"md"}
          border={"1px solid #e5e7eb"}
        >
          {workExpData.map((item) => {
            return (
              <Flex
                justifyContent={"space-between"}
                padding={"12px 24px"}
                borderBottom={"1px solid #e5e7eb"}
                sx={{
                  "&:hover": {
                    background: "#f3f4f6",
                  },
                }}
              >
                <Flex gap="24px" alignItems={"center"}>
                  <Image src={item.logo} width={"48px"} objectFit={"contain"} />
                  <Box>
                    <Text fontSize={"14px"} color={"primary"} fontWeight={'600'}>
                      {" "}
                      {item.position}{" "}
                    </Text>
                    <Text fontSize={"14px"} color={"secondary"}>
                      {" "}
                      {item.companyName}{" "}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap="12px" alignItems={"center"}>
                  <Text color={"secondary"}> {item.durationFrom} - </Text>
                  <Text
                    color={
                      item.durationTo === "Present" ? "black" : "secondary"
                    }
                  >
                    {item.durationTo}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
        </Box>
      </Grid>
    </Box>
  );
}

export default WorkExp;
