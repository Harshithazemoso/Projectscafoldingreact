import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
const MuiButton2 = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "512px",
  height: "42px",
  backgroundColor: theme.palette.primary.error100,
  ".MuiButton": {
    "&hover": {
      boxShadow: `0px 0px 0px 8px ${theme.palette.primary.error500}`,
    },
  },
  "&.Mui-disabled": {
    backgroundColor: "#CCE3FF",
  },
  color: "white",
  borderRadius: "4px",
  padding: " 0px, 16px, 0px, 16px",
}));
export const MuiButton = (props: ButtonProps) => {
  return <MuiButton2 {...props}></MuiButton2>;
};
