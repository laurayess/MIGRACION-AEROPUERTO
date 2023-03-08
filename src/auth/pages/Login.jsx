import {
  Alert,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Iconify from "../../components/iconify";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/slices/auth";

export const Login = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
    const lastPath = localStorage.getItem("lastPath") || "/bitacoras/inicio";
    navigate(lastPath, { replace: true });
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
    const lastPath = localStorage.getItem("lastPath") || "/bitacoras/inicio";
    navigate(lastPath, { replace: true });
  };

  return (
    <>
      <AuthLayout title="Iniciar Sesión">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              {" "}
              <TextField
                fullWidth
                name="email"
                label="Email"
                type={"email"}
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                name="password"
                label="Password"
                fullWidth
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={onInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        <Iconify
                          icon={
                            showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid
              container
              display={!!errorMessage ? "" : "none"}
              sx={{ mt: 1 }}
            >
              <Grid item xs={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mb: 1, mt: 1 }}>
              <Grid item xs={12} sm={12}>
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={isAuthenticating}
                >
                  Iniciar Sesión
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Divider sx={{ my: 3 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    O
                  </Typography>
                </Divider>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Button
                  fullWidth
                  size="large"
                  color="inherit"
                  variant="outlined"
                  disabled={isAuthenticating}
                  onClick={onGoogleSignIn}
                >
                  <Iconify
                    icon="eva:google-fill"
                    color="#DF3E30"
                    width={22}
                    height={22}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent="space-between">
            <Typography variant="body2" sx={{ mr: 1 }}>
              ¿No tienes cuenta? {""}
            </Typography>
            <Link
              component={RouterLink}
              variant="subtitle2"
              to={"/auth/registro"}
            >
              Registrate
            </Link>
          </Grid>
        </form>

        {/* <h1>Login</h1>
        {logged ? <h3>Estas logeado</h3> : <h3>No estas logeado</h3>}
        <Button onClick={() => dispatch(change())}>Ingresar</Button> */}
      </AuthLayout>
    </>
  );
};
