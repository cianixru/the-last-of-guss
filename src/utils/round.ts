export type RoundStatus = "active" | "cooldown" | "finished";

export const getRoundStatus = (
  startTime: string,
  endTime: string,
  now: number = Date.now()
): RoundStatus => {
  const start = new Date(startTime).getTime();
  const end = new Date(endTime).getTime();

  if (now < start) {
    return "cooldown";
  }
  if (now > end) {
    return "finished";
  }
  return "active";
};
