import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, Typography } from "@mui/material";

import { useRoundsQuery, useCreateRound, useAuthMe } from "~/api/hooks";
import { AppBarLayout } from "~/components";
import { formatDateTime, getRoundStatus } from "~/utils";

import { RoundCard } from "./RoundsList.styled";

export default function RoundsListPage() {
  const navigate = useNavigate();

  const { data: me } = useAuthMe();
  const { data } = useRoundsQuery();
  const { mutateAsync: createRound, isPending } = useCreateRound();

  const isAdmin = me?.role === "ADMIN";

  return (
    <AppBarLayout title="Список РАУНДОВ">
      {isAdmin && (
        <Box sx={{ gap: 5, display: "flex", flexDirection: "column" }}>
          <Button
            variant="contained"
            onClick={async () => {
              const r = await createRound();
              navigate(`/rounds/${r.id}`);
            }}
            disabled={isPending}
          >
            Создать раунд
          </Button>
        </Box>
      )}

      <Box display="grid" gap={2}>
        {data?.data.map((r) => (
          <RoundCard
            key={r.id}
            onClick={() => navigate(`/rounds/${r.id}`)}
            sx={{ cursor: "pointer" }}
          >
            <Typography>Round ID: {r.id}</Typography>
            <Typography>Start: {formatDateTime(r.startTime)}</Typography>
            <Typography>End: {formatDateTime(r.endTime)}</Typography>
            <Divider />
            <Typography>
              Статус: {getRoundStatus(r.startTime, r.endTime)}
            </Typography>
          </RoundCard>
        ))}
      </Box>
    </AppBarLayout>
  );
}
