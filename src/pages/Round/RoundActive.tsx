import { useState } from "react";
import { Typography } from "@mui/material";
import { useLottie } from "lottie-react";

import { AppBarLayout } from "~/components";
import { useInterval } from "~/hooks";
import { getSecondsLeft } from "~/utils";

import { useTapMutation } from "~/api/hooks";

import gooseThinks from "~/assets/animation/goose_thinks.json";
import gooseWing from "~/assets/animation/goose_wing.json";
import gooseWonders from "~/assets/animation/goose_wonders.json";

import { ContentGrid, GooseButton } from "./Round.styled";

import type { RoundsService } from "~/api/generated/services/RoundsService";

export default function RoundActivePage({
  data,
}: {
  data: Awaited<ReturnType<typeof RoundsService.getApiV1Rounds1>>;
}) {
  const { round, myStats } = data;
  const [tapCount, setTapCount] = useState<number>(myStats?.taps ?? 0);
  const [lastTapAt, setLastTapAt] = useState<number>(() => Date.now());
  const { mutate: tap } = useTapMutation();

  const [now, setNow] = useState<number>(() => Date.now());
  useInterval(() => setNow(Date.now()), 1000);
  const secondsLeft = getSecondsLeft(round.endTime, now);
  const timeSinceTap = now - lastTapAt;
  const isIdle = timeSinceTap > 500;

  const animationData = isIdle
    ? gooseWing
    : tapCount % 2 === 0
    ? gooseThinks
    : gooseWonders;

  const { View } = useLottie({
    animationData,
    loop: true,
    style: { width: "100%", height: "100%" },
  });

  return (
    <AppBarLayout title="Раунды">
      <ContentGrid>
        <GooseButton
          variant="outlined"
          onClick={() => {
            if (isIdle) {
              setLastTapAt(Date.now());
              return;
            }
            setLastTapAt(Date.now());
            setTapCount((c) => c + 1);
            tap(round.id);
          }}
        >
          {View}
        </GooseButton>
        <Typography variant="h6">Раунд активен!</Typography>
        <Typography>До конца осталось: {secondsLeft} сек</Typography>
        <Typography>Мои очки: {tapCount}</Typography>
      </ContentGrid>
    </AppBarLayout>
  );
}
