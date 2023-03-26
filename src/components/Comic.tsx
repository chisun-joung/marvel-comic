import { Box, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IComicProps {
  id: number;
  imageUrl: string;
  title: string;
}

export default function Comic({ id, imageUrl, title }: IComicProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <Link to={`/comics/${id}`}>
      <VStack alignItems={"flex-start"}>
        <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
          <Image minH="450" maxH="450" src={imageUrl} />
        </Box>
        <Box color={gray}>
          <Text display={"block"} as="b" noOfLines={3} fontSize="md">
            {title}
          </Text>
        </Box>
      </VStack>
    </Link>
  );
}
