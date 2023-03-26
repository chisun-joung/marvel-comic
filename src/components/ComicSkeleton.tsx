import { Box, Skeleton } from "@chakra-ui/react";

export default function ComicSkeleton() {
  return (
    <Box>
      <Skeleton rounded="2xl" height={"450px"} mb={7} />
      <Skeleton rounded="lg" width="100%" height={5} mb={1} />
      <Skeleton rounded="lg" width="100%" height={5} mb={3} />
      <Skeleton rounded="lg" width="100%" height={5} />
    </Box>
  );
}
