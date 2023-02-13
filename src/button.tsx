import { Button, Stack } from "@mui/material";
// import styled from "@emotion/styled";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
const StyledTypo = styled(Typography)`
  width: 20%;
  background-color: red;
`;
const StyledButton = styled(Button)`
  background-color: yellow;
  margin: 100;
  color: blue;
  width: 20%;
`;
export const MyButton = () => {
  return (
    <>
      <button>Click</button>
      <Stack>
        <Button variant="outlined">Mui Button</Button>
        <StyledTypo>Harshitha</StyledTypo>
        <StyledButton variant="contained">My Button</StyledButton>
      </Stack>
    </>
  );
};
