import {
  Box,
  Skeleton,
  Heading,
  Grid,
  Image,
  HStack,
  Text,
  SkeletonText
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { characterDetail } from "../api";
import { CharacterDetailResponse } from "../types";

export default function CharacterDetail() {
  const { characterId } = useParams();
  const { isLoading, data } = useQuery<CharacterDetailResponse>(
    [`characters`, characterId],
    characterDetail
  );

  return (
    <Box
      mt={10}
      px={{
        base: 10,
        lg: 40
      }}
    >
      <Skeleton height={"50px"} width="100%" isLoaded={!isLoading}>
        <Heading>{data?.data.results[0].name}</Heading>
      </Skeleton>
      <HStack>
        <Grid gap={2} templateColumns={"1fr 2fr"}>
          <Box
            mt={10}
            px={{
              base: 10,
              lg: 10
            }}
          >
            <Skeleton height={"450px"} width={"300px"} isLoaded={!isLoading}>
              <Image
                objectFit={"cover"}
                src={
                  data?.data.results[0].thumbnail.path +
                  "." +
                  data?.data.results[0].thumbnail.extension
                }
              />
            </Skeleton>
          </Box>
          <Box>
            <SkeletonText
              mt="4"
              noOfLines={4}
              spacing="4"
              skeletonHeight="2"
              isLoaded={!isLoading}
            >
              <Text fontSize={"2xl"}>Description</Text>
              <Text> -- {data?.data.results[0].description}</Text>
              <br />
              <Text>Comics</Text>
              {data?.data.results[0].comics.items.map((item) => (
                <Text>-- {item.name}</Text>
              ))}
              <br />

              <Text>Series</Text>
              {data?.data.results[0].series.items.map((item) => (
                <Text>-- {item.name}</Text>
              ))}
              <br />

              <Text>Stories</Text>
              {data?.data.results[0].stories.items.map((item) => (
                <Text>
                  -- {item.type} : {item.name}
                </Text>
              ))}
              <br />

              <Text>Events:</Text>
              {data?.data.results[0].events.items.map((item) => (
                <Text> -- {item.name}</Text>
              ))}
            </SkeletonText>
          </Box>
        </Grid>
      </HStack>
    </Box>
  );
}
