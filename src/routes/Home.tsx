import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { listComics } from "../api";
import Comic from "../components/Comic";
import ComicSkeleton from "../components/ComicSkeleton";
import { ComicsResponse } from "../types";
export default function Home() {
  const { isLoading, data } = useQuery<ComicsResponse>(["comics"], listComics);
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
      {data?.data.results.map((comic) => (
        <Comic
          key={comic.id}
          id={comic.id}
          imageUrl={comic.thumbnail.path + "." + comic.thumbnail.extension}
          title={comic.title}
        />
      ))}
    </Grid>
  );
}
