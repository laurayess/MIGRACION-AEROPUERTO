import React from "react";
import { Helmet } from "react-helmet-async";
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "../../components/logo";
import Iconify from "../../components/iconify";
import useResponsive from '../../hooks/useResponsive';
const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledSection = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));
export const AuthLayout = ({ children, title = "" }) => {
  const mdUp = useResponsive("up", "md");
  return (
    <>
      <Helmet>
        <title> {title} </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: "fixed",
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hola, Bienvenido de nuevo
            </Typography>
            <img
              src={"/src/assets/illustrations/illustration_login.png"}
              alt="login"
            />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              {title} en Bitacoras-APP
            </Typography>

            {children}
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
};
