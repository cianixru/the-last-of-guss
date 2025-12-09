import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RoundCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "grid",
  gap: theme.spacing(1.5),
  cursor: "pointer",
}));
