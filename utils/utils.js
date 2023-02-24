import {
  blackGoldTheme,
  blackPinkTheme,
  defaultTheme,
  blackCyanTheme,
  veryPeriTheme,
} from "@/styles/theme";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiAtari, SiNintendo, SiSega } from "react-icons/si";

dayjs.extend(relativeTime);

export function getParentPlatform(platform, size = 16) {
  switch (platform) {
    case "PC":
      return <FaWindows size={size} />;
    case "PlayStation":
      return <FaPlaystation size={size} />;
    case "Xbox":
      return <FaXbox size={size} />;
    case "iOS":
      return <IoIosPhonePortrait size={size} />;
    case "Android":
      return <FaAndroid size={size} />;
    case "Apple Macintosh":
      return <FaApple size={size} />;
    case "Linux":
      return <FaLinux size={size} />;
    case "Nintendo":
      return <SiNintendo size={size} />;
    case "Atari":
      return <SiAtari size={size} />;
    case "SEGA":
      return <SiSega size={size} />;
    case "Web":
      return <GoBrowser size={size} />;
    default:
      return <BsFillQuestionCircleFill size={size} />;
  }
}

function ThemeAvatar({ primary, background }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "1.2rem",
        width: "1.2rem",
        borderRadius: "50%",
        backgroundColor: background,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -1,
          left: -2,
          backgroundColor: primary,
          borderRadius: "10rem 0 0 10rem",
          width: "0.65rem",
          height: "1.2rem",
        }}
      ></Box>
    </Box>
  );
}

export function getTheme(themeName) {
  switch (themeName) {
    case "blackPinkTheme":
      return {
        theme: blackPinkTheme,
        avatar: (
          <ThemeAvatar
            primary={blackPinkTheme.palette.primary.main}
            background={blackPinkTheme.palette.background.default}
          />
        ),
      };
    case "blackGoldTheme":
      return {
        theme: blackGoldTheme,
        avatar: (
          <ThemeAvatar
            primary={blackGoldTheme.palette.primary.main}
            background={blackGoldTheme.palette.background.default}
          />
        ),
      };
    case "blackCyanTheme":
      return {
        theme: blackCyanTheme,
        avatar: (
          <ThemeAvatar
            primary={blackCyanTheme.palette.primary.main}
            background={blackCyanTheme.palette.background.default}
          />
        ),
      };
    case "veryPeriTheme":
      return {
        theme: veryPeriTheme,
        avatar: (
          <ThemeAvatar
            primary={veryPeriTheme.palette.primary.main}
            background={veryPeriTheme.palette.background.default}
          />
        ),
      };
    case "defaultTheme":
    default:
      return {
        theme: defaultTheme,
        avatar: (
          <ThemeAvatar
            primary={defaultTheme.palette.primary.main}
            background={defaultTheme.palette.background.default}
          />
        ),
      };
  }
}

export function dateFormat(dateStr, format = "YYYY-MM-DD") {
  const dt = dayjs(dateStr);
  return dt.format(format);
}

export function timeFromNow(dateStr) {
  return dayjs(dateStr).fromNow();
}
