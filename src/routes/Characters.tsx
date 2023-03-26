import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { listCharacters } from "../api";
import Character from "../components/Character";
import ComicSkeleton from "../components/ComicSkeleton";
import { CharactersResponse } from "../types";
export default function Characters() {
  const { isLoading, data } = useQuery<CharactersResponse>(
    ["characters"],
    listCharacters
  );
  return (
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
            characters.thumbnail.path + "." + characters.thumbnail.extension
          }
          name={characters.name}
        />
      ))}
    </Grid>
  );
}
