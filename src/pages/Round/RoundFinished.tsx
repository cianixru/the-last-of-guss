import { Divider, Typography } from "@mui/material";

import { useLottie } from "lottie-react";

import animationData from "../../assets/animation/goose_heart.json";
import { AppBarLayout } from "../../components/Layout/AppBarLayout/AppBarLayout";

import { AnimationBox, ContentGrid } from "./Round.styled";

import type { RoundsService } from "../../api/generated/services/RoundsService";

export default function RoundFinishedPage({
  data,
}: {
  data: Awaited<ReturnType<typeof RoundsService.getApiV1Rounds1>>;
}) {
  const { View } = useLottie({
    animationData,
    loop: true,
  });
  const { round, topStats, myStats } = data;

  const winner = topStats?.[0];
  const winnerText = winner
    ? `Победитель - ${winner.user.username}: ${winner.score}`
    : "Победитель не определен";

  return (
    <AppBarLayout title="Раунд завершен">
      <ContentGrid>
        <AnimationBox>{View}</AnimationBox>
        <Divider sx={{ width: "100%" }} />
        <Typography>Всего: {round.totalScore}</Typography>
        <Typography>{winnerText}</Typography>
        <Typography>Мои очки: {myStats?.score ?? 0}</Typography>
      </ContentGrid>
    </AppBarLayout>
  );
}
