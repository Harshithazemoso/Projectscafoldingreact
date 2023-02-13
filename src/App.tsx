import { MyButton } from "./button";
import { MuiButton } from "./Components/Atoms/Button";
import { styled } from "@mui/material/styles";
import { theme } from "./theme";
import {
  Button,
  Stack,
  Typography,
  TypographyProps,
  ButtonProps,
  ThemeProvider,
} from "@mui/material";
import { MuiTypography } from "./Components/Atoms/Typography";
import { Icon } from "./Components/Atoms/Icon";
import Profile from "../public/Assets/Profile.svg";
import Eye from "../public/Assets/Eye.svg";
import { MuiAvatar } from "./Components/Atoms/Avatar";
const MuiButton2 = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  width: "512px",
  height: "42px",
  backgroundColor: theme.palette.primary.error100,
  ".MuiButton": {
    "&hover": {
      boxShadow: `0px 0px 0px 8px ${theme.palette.primary.error100}`,
    },
    ".Mui-disabled": {
      backgroundColor: theme.palette.primary.grey100,
    },
  },
  color: "white",
  borderRadius: "4px",
  padding: " 0px, 16px, 0px, 16px",
}));
const Typo = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.primary.grey300,
}));

export const App = () => {
  console.log(theme.palette);
  const ButtonStyled = {
    backgroundColor: `${theme.palette.primary.light}`,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: `${theme.palette.primary.light}`,
    },
    borderRadius: "8px",
    height: "72px",
    width: "105px",
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <h1>React typescript webpack Starter Template</h1>
      <MyButton /> */}
        <MuiButton variant="contained" size="large" color="primary">
          MuiButton
        </MuiButton>
        <Stack>
          <MuiButton2 variant="contained"> the button</MuiButton2>
        </Stack>
        <MuiButton2 variant="contained">Mybutton2</MuiButton2>
      </div>
      <MuiButton variant="contained" sx={ButtonStyled}>
        Click me
      </MuiButton>
      <MuiTypography variant="heading4">My name is harshitha</MuiTypography>
      <MuiButton variant="contained">
        <MuiTypography>Button for the component</MuiTypography>
      </MuiButton>
      <Typo>Harshitha with styled typo</Typo>
      <Icon path={Eye} />
      <MuiAvatar src={Profile} variant="square" />.
      <MuiAvatar variant="rounded" sx={{ backgroundColor: "red" }}>
        HB
      </MuiAvatar>
      <Icon path="Assets/Grid.svg" />
      <Button variant="contained" color="primary">
        Harshitha
      </Button>
    </ThemeProvider>
  );
};
