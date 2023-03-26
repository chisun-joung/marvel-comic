import { FaMedium, FaMoon, FaSun } from "react-icons/fa";
import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  Text,
  LightMode,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen
  } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const textColor = useColorModeValue("black", "gray");
  const Icon = useColorModeValue(FaMoon, FaSun);
  return (
    <HStack
      justifyContent={"space-between"}
      px={40}
      py={5}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <Link to={"/"}>
          <FaMedium size={"48"} />
        </Link>
      </Box>
      <Link to={"/"}>
        <Text color={textColor} fontSize={"3xl"}>
          Comics
        </Text>
      </Link>
      <Link to={"/characters"}>
        <Text color={textColor} fontSize={"3xl"}>
          Characters
        </Text>
      </Link>
      <HStack spacing={2}>
        <IconButton
          color={textColor}
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<Icon />}
        />
        <Button onClick={onLoginOpen} colorScheme={"twitter"}>
          Log in
        </Button>
        <LightMode>
          <Button onClick={onSignUpOpen} colorScheme={"red"}>
            Sign up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
