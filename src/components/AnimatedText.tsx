import { Box, Flex, SystemStyleObject, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface IProps {
  icon?: ReactNode;
  label: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  defaultTrue?: boolean;
  bgHeight?: string;
  cssproperties?: SystemStyleObject | undefined;
  cta?: () => void;
  csspropertiesLabel?: SystemStyleObject | undefined;
}

export default function AnimatedText(props: IProps) {
  const {
    icon,
    label,
    backgroundColor,
    defaultTrue,
    fontSize,
    fontWeight,
    bgHeight,
    cssproperties,
    cta,
    csspropertiesLabel
  } = props;
  const [isHovered, setIsHovered] = useState(defaultTrue ? true : false);

  return (
    <Flex
      gap="4px"
      display="flex"
      alignItems="center"
      position="relative"
      onMouseEnter={() =>
        defaultTrue ? setIsHovered(true) : setIsHovered(true)
      }
      onMouseLeave={() =>
        defaultTrue ? setIsHovered(true) : setIsHovered(false)
      }
      background={"transparent"}
      fontSize={fontSize ?? ""}
      fontWeight={fontWeight ?? ""}
      sx={cssproperties}
      onClick={cta}
      cursor={cta ? "pointer" : "auto"}
    >
      {icon ? (
        <Text zIndex="1" as="span">
          {icon}
        </Text>
      ) : null}
      <Text zIndex="1" sx={csspropertiesLabel}> {label}</Text>
      <Box
        height={bgHeight ?? "2px"}
        width={isHovered ? "100%" : "0%"}
        position="absolute"
        bottom="0"
        left="0"
        background={backgroundColor ?? "lightblue"}
        transition="width 0.3s ease-in-out"
        zIndex="0"
        margin={"auto"}
      ></Box>
    </Flex>
  );
}
