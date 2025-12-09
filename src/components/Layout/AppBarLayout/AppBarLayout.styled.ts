import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const RightSlot = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(2),
}));

export const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  paddingTop: 0,
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "50px auto",
  border: "1px solid",
  borderColor: theme.palette.primary.dark,
  borderRadius: "16px",
}));
