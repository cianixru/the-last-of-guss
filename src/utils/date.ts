export const formatDateTime = (iso: string | number | Date) => {
  const date =
    typeof iso === "string" || typeof iso === "number" ? new Date(iso) : iso;

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
};

export const getSecondsLeft = (
  to: string | number | Date,
  now: number = Date.now()
) => {
  const end = new Date(to).getTime();

  return Math.max(0, Math.ceil((end - now) / 1000));
};
