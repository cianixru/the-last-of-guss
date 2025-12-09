import { useState } from "react";
import { Typography } from "@mui/material";
import { useLottie } from "lottie-react";

import animationData from "~/assets/animation/goose_thinks.json";
import { useInterval } from "~/hooks/useInterval";
import { getSecondsLeft } from "~/utils/date";
import type { RoundsService } from "~/api/generated/services/RoundsService";
import { AppBarLayout } from "~/components/Layout/AppBarLayout/AppBarLayout";

import { ContentGrid, GooseButton } from "./Round.styled";

export default function RoundCooldownPage({
  data,
}: {
  data: Awaited<ReturnType<typeof RoundsService.getApiV1Rounds1>>;
}) {
  const { round } = data;
  const [now, setNow] = useState<number>(() => Date.now());

  useInterval(() => setNow(Date.now()), 1000);

  const { View: Animation } = useLottie({
    animationData,
    loop: true,
    style: { width: "100%", height: "100%" },
  });

  return (
    <AppBarLayout title="Cooldown">
      <ContentGrid>
        <GooseButton variant="outlined" disabled>
          {Animation}
        </GooseButton>
        <Typography variant="h6">Cooldown</Typography>
        <Typography>
          до начала раунда: {getSecondsLeft(round.startTime, now)} сек
        </Typography>
      </ContentGrid>
    </AppBarLayout>
  );
}
