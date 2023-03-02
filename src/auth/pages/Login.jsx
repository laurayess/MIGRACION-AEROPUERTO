import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../store/slices/auth/authSlice";

export const Login = () => {
  const { logged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Login</h1>
      {logged ? <h3>Estas logeado</h3> : <h3>No estas logeado</h3>}
      <Button onClick={() => dispatch(change())}>Ingresar</Button>
    </>
  );
};
