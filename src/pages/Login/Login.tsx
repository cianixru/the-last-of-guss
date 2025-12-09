import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { setAuthToken } from "~/api/helpers";
import { useLogin } from "~/api/hooks";

import { Card, Root } from "./Login.styled";

// schema лучше перенести в отдельный файл, но для одной страницы можно и тут оставить
const schema = z.object({
  username: z.string().min(3, "Имя минимум 3 символа"),
  password: z.string().min(3, "Пароль минимум 3 символа"),
});

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const navigate = useNavigate();

  const { mutateAsync, isPending, error } = useLogin();
  const [formError, setFormError] = useState<string | null>(null);

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setFormError(null);
    try {
      const result = await mutateAsync(values);
      setAuthToken(result.token);
      navigate("/", { replace: true });
    } catch {
      setFormError("Неверный пароль или имя пользователя");
    }
  };

  return (
    <Root>
      <Card elevation={3}>
        <Typography variant="h5" textAlign="center" mb={4}>
          ВОЙТИ
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          display="grid"
          gap={2}
        >
          <TextField
            label="Имя пользователя"
            {...register("username")}
            error={!!formState.errors.username}
            helperText={formState.errors.username?.message}
            fullWidth
          />
          <TextField
            type="password"
            label="Пароль"
            {...register("password")}
            error={!!formState.errors.password}
            helperText={formState.errors.password?.message}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            disabled={isPending}
            size="large"
          >
            Войти
          </Button>

          {formError && (
            <Typography color="error" textAlign="center">
              {formError}
            </Typography>
          )}

          {error && !formError && (
            <Typography color="error" textAlign="center">
              Ошибка:{" "}
              {error instanceof Error ? error.message : "Неизвестная ошибка"}
            </Typography>
          )}
        </Box>
      </Card>
    </Root>
  );
}
