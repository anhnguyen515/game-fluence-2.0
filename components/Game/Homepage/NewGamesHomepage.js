import CategoryTitle from "@/components/common/CategoryTitle";
import { Grid, Stack } from "@mui/material";
import React from "react";
import GameCard from "../GameCard";

export default function NewGamesHomepage({ games }) {
  return (
    <Stack alignItems={"flex-start"} gap={2}>
      <CategoryTitle title={"New & Upcoming Games"} href={"/games"} />
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {games.results.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <GameCard game={item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
