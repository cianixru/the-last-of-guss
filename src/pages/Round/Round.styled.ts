import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContentGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  alignItems: "center",
  justifyItems: "center",
}));

export const GooseButton = styled(Button)(({ theme }) => ({
  width: 280,
  height: 280,
  borderRadius: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

export const AnimationBox = styled(Box)({
  width: 280,
  height: 280,
});
