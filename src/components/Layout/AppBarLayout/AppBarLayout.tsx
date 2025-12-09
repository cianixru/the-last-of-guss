import { AppBar, Toolbar, Typography } from "@mui/material";

import { useAuthMe } from "~/api/hooks";

import { Content, RightSlot, Title } from "./AppBarLayout.styled";

import type { ReactNode } from "react";

type AppBarLayoutProps = {
  title: string;
  children?: ReactNode;
};

export const AppBarLayout = ({ title, children }: AppBarLayoutProps) => {
  const { data } = useAuthMe();

  return (
    <Content>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Title variant="h5">{title}</Title>
          <RightSlot>
            <Typography variant="body2">{data?.username}</Typography>
          </RightSlot>
        </Toolbar>
      </AppBar>
      {children}
    </Content>
  );
};
