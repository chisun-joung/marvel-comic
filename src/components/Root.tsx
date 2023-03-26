import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Root() {
  return (
    <Box bg="gray.100">
      <Header />
      <Outlet />
    </Box>
  );
}
