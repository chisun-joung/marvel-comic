import { Box, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ICharacterProps {
  id: number;
  imageUrl: string;
  name: string;
}

export default function Character({ id, imageUrl, name }: ICharacterProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <Link to={`/characters/${id}`}>
      <VStack alignItems={"flex-start"}>
        <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
          <Image minH="300" maxH="300" src={imageUrl} />
        </Box>
        <Box color={gray}>
          <Text display={"block"} as="b" noOfLines={3} fontSize="md">
            {name}
          </Text>
        </Box>
      </VStack>
    </Link>
  );
}
