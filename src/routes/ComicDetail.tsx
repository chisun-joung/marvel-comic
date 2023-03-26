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
import { useParams, Link } from "react-router-dom";
import { comicDetail } from "../api";
import { ComicDetailResponse } from "../types";

export default function ComicDetail() {
  const { comicId } = useParams();
  const { isLoading, data } = useQuery<ComicDetailResponse>(
    [`comics`, comicId],
    comicDetail
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
        <Heading>{data?.data.results[0].title}</Heading>
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
              <Link to={`/comics/${comicId}/characters`}>
                <Image
                  objectFit={"cover"}
                  src={
                    data?.data.results[0].thumbnail.path +
                    "." +
                    data?.data.results[0].thumbnail.extension
                  }
                />
              </Link>
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
              <Text>ISBN: {data?.data.results[0].isbn} </Text>
              <Text>UPC: {data?.data.results[0].upc} </Text>
              <Text>Format: {data?.data.results[0].format} </Text>
              <Text>Page Count: {data?.data.results[0].pageCount} </Text>
              <Text>
                {data?.data.results[0].dates[0].type}:{" "}
                {data?.data.results[0].dates[0].date}{" "}
              </Text>
              <Text>Price: {data?.data.results[0].prices[0].price}</Text>
              <br />
              <Text>Creators</Text>
              {data?.data.results[0].creators.items.map((item) => (
                <Text>
                  -- {item.role} : {item.name}
                </Text>
              ))}
              <br />
              {data?.data.results[0].stories.items.map((item) => (
                <Text>
                  {item.type} : {item.name}
                </Text>
              ))}
              <br />
              <Link to={`/comics/${comicId}/characters`}>
                <Text>Characters:</Text>
              </Link>
              {data?.data.results[0].characters.items.map((item) => (
                <Text> -- {item.name}</Text>
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
