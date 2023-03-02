import { Stack } from "@mui/material";
import React from "react";
import GamesNavigator from "../Game/GamesNavigator";
import GenresNavigator from "../Genre/GenresNavigator";
import PlatformsNavigator from "../Platform/PlatformsNavigator";
import PublishersNavigator from "../Publisher/PublishersNavigator";

export default function SideNavigator() {
  return (
    <Stack
      alignItems={"flex-start"}
      gap={1}
      sx={{
        position: "sticky",
        top: 16,
        maxHeight: "100vh",
        overflow: "auto",
        "::-webkit-scrollbar": {
          width: 0,
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "text.main",
          borderRadius: 1,
        },
      }}
    >
      <GamesNavigator />
      <GenresNavigator />
      <PlatformsNavigator />
      <PublishersNavigator />
    </Stack>
  );
}
