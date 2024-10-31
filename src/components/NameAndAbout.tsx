import { Box, Flex, Text } from "@chakra-ui/react";
import AnimatedText from "./AnimatedText";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiNpm } from "react-icons/si";
import { RiDownloadCloudFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import cv from "../assets/Ashish_SDE_3+YOE.pdf"
export default function NameAndAbout() {
  return (
    <Box textAlign={"center"} margin={"24px 0 48px 0"}>
      <AnimatedText
        label="Ashish"
        backgroundColor="#ffde69"
        fontSize="56px"
        fontWeight="600"
        bgHeight="24px"
        cssproperties={{
          textAlign: "center",
          width: "fit-content",
          margin: "auto",
          padding: 0,
          lineHeight:'1'
        }}
        defaultTrue={true}
      />
      <Text
        fontSize={"18px"}
        fontWeight={"400"}
        color="primary"
        margin="24px 0"
      >
        Code, coffee, and more code ☕💻. That's basically me. I’m a frontend
        engineer with 3 years of experience, a passion for React, and a habit of
        diving headfirst into Javascript projects. Backend with Node.js? Sure, I
        can sprinkle some of that in too. When I’m not building with Javascript
        or hacking away in Node.js, I’m probably writing about it or creating
        npm packages just for fun. <br/> let's connect—who knows, we might just
        refactor some bugs together!"
      </Text>
      <Flex
        alignItems={"center"}
        gap="16px"
        fontWeight={"500"}
        cursor={"pointer"}
        fontSize={"18px"}
        color="primary"
        justifyContent={"center"}
        flexWrap={'wrap'}
      >
        <AnimatedText icon={<SiNpm />} label="NPM" backgroundColor="#8ae6fb"        csspropertiesLabel={{
            fontSize:'16px',
            fontWeight:'500'
          }} cta={()=> window.open("https://www.npmjs.com/~iashish.99","_blank")}/>
        <AnimatedText
          icon={<MdEmail />}
          label="Email"
          backgroundColor="#f79605"
          cta={()=> window.open("mailto:kumarashish87998@gmail.com","_blank")}
          csspropertiesLabel={{
            fontSize:'16px',
            fontWeight:'500'
          }}
        />
        <AnimatedText
          icon={<FaGithub />}
          label="Github"
          backgroundColor="#ffde69"
          cta={() => window.open("https://github.com/ashishcumar","_blank")}
          csspropertiesLabel={{
            fontSize:'16px',
            fontWeight:'500'
          }}
        />
        <AnimatedText
          icon={<FaLinkedin />}
          label="Linkedin"
          backgroundColor={"#f79605"}
          cta={()=> window.open("https://www.linkedin.com/in/ashish-cumar/","_blank")}
          csspropertiesLabel={{
            fontSize:'16px',
            fontWeight:'500'
          }}
        />

        <AnimatedText
          icon={<IoLogoWhatsapp />}
          label="Whatsapp"
          backgroundColor="#f79605"
          cta={() => window.open("https://wa.me/919540303720","_blank")}
          csspropertiesLabel={{
            fontSize:'16px',
            fontWeight:'500'
          }}
        />
        <AnimatedText
          icon={<RiDownloadCloudFill />}
          label="Download CV"
          backgroundColor="#ffde69"
          cta={() => window.open(cv,"_blank")}
          csspropertiesLabel={{
            fontSize:'16px',
            fontWeight:'500'
          }}
        />
      </Flex>
    </Box>
  );
}
