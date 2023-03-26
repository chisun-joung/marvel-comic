import { Grid, Heading, Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { listComicCharacters } from "../api";
import Character from "../components/Character";
import ComicSkeleton from "../components/ComicSkeleton";
import { CharactersResponse } from "../types";
export default function ComicCharacters() {
  const { comicId } = useParams();
  const { isLoading, data } = useQuery<CharactersResponse>(
    ["characters", comicId],
    listComicCharacters
  );
  console.log(data);
  return (
    <>
      {data?.data.count === 0 ? (
        <Box
          mt={300}
          px={{
            base: 10,
            lg: 300
          }}
          height={400}
        >
          <Heading> There are no characters!! </Heading>
        </Box>
      ) : (
        <>
          <Grid
            mt={10}
            px={{
              base: 10,
              lg: 40
            }}
            columnGap={4}
            rowGap={20}
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
              "2xl": "repeat(5, 1fr)"
            }}
          >
            {isLoading ? (
              <>
                <ComicSkeleton />
                <ComicSkeleton />
                <ComicSkeleton />
                <ComicSkeleton />
                <ComicSkeleton />
                <ComicSkeleton />
                <ComicSkeleton />
                <ComicSkeleton />
                <ComicSkeleton />
                <ComicSkeleton />
              </>
            ) : null}
            {data?.data.results.map((characters) => (
              <Character
                key={characters.id}
                id={characters.id}
                imageUrl={
                  characters.thumbnail.path +
                  "." +
                  characters.thumbnail.extension
                }
                name={characters.name}
              />
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
