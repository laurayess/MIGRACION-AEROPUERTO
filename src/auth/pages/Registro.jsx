import { useState, useMemo } from "react";
import {
  Alert,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import Iconify from "../../components/iconify";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/slices/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio."],
};

export const Registro = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ displayName, email, password });
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
    console.log("Entrando onSubmit");
  };
  return (
    <>
      <AuthLayout title="Registrate">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type={"text"}
                placeholder="Nombre completo"
                fullWidth
                autoComplete="off"
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                autoComplete="off"
                onChange={onInputChange}
                value={email}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
                placeholder="correo@google.com"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                name="password"
                fullWidth
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                label="Password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
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
            <Grid container spacing={1} sx={{ mb: 1, mt: 1 }}>
              <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  disabled={isCheckingAuthentication}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Registrate
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent="space-between">
            <Typography variant="body2" sx={{ mr: 1 }}>
              ¿Tienes cuenta? {""}
            </Typography>
            <Link component={RouterLink} variant="subtitle2" to={"/auth/login"}>
              Inicia Sesión
            </Link>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
