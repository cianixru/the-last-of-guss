import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

import { useRoundDetailsQuery } from "../../api/hooks/rounds/useRoundDetailsQuery";
import { useInterval } from "../../hooks/useInterval";
import { getRoundStatus } from "../../utils/round";

import RoundActivePage from "./RoundActive";
import RoundCooldownPage from "./RoundCooldown";
import RoundFinishedPage from "./RoundFinished";

export default function RoundRouterPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useRoundDetailsQuery(id);
  const [now, setNow] = useState<number>(() => Date.now());

  useInterval(() => setNow(Date.now()), 1000);

  if (isLoading || !data) {
    return (
      <Box
        display="flex"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  const status = getRoundStatus(data.round.startTime, data.round.endTime, now);

  if (status === "active") {
    return <RoundActivePage data={data} />;
  }

  if (status === "cooldown") {
    return <RoundCooldownPage data={data} />;
  }

  return <RoundFinishedPage data={data} />;
}
