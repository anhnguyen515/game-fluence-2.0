import LoginIcon from "@mui/icons-material/Login";
import { Button, Divider, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchModal = dynamic(() => import("./SearchModal"), { ssr: false });

function ActiveLink({ href, item, router }) {
  return (
    <>
      <Link href={href}>
        <Typography
          sx={{
            color: router.pathname.includes(href) ? "primary.main" : "text",
            borderBottom: router.pathname.includes(href) && 1,
            "&:hover": {
              borderBottom: 1,
              transition: "all 0.1s",
            },
          }}
        >
          {item}
        </Typography>
      </Link>
    </>
  );
}

export default function NavDesktop() {
  const router = useRouter();
  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
      sx={{ width: "100%" }}
    >
      <Link href={"/"} className="mr-10">
        <Image
          alt="logo"
          src="/img/GameFluence-black-250px.png"
          width={150}
          height={75}
        />
      </Link>
      <Stack
        alignItems={"center"}
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        gap={3}
      >
        <ActiveLink href={"/games"} item={"All Games"} router={router} />
        <ActiveLink href={"/genres"} item={"Genres"} router={router} />
        <ActiveLink href={"/platforms"} item={"Platforms"} router={router} />
        <ActiveLink href={"/publishers"} item={"Publishers"} router={router} />
      </Stack>
      <Stack
        alignItems={"center"}
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        gap={1}
        sx={{ ml: "auto" }}
      >
        <SearchModal />
        <Button
          size="small"
          startIcon={<LoginIcon />}
          sx={{ textTransform: "none" }}
          // variant="outlined"
        >
          Login
        </Button>
      </Stack>
    </Stack>
  );
}
