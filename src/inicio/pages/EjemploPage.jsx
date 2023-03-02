import { Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/slices/auth";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

import { Link as RouterLink } from "react-router-dom";
export const EjemploPage = () => {
 

  

  return (
    <>
        <div> Inicio</div>
      
        <Typography sx={{ mr: 1 , color: 'red'}}>¿Ya tienes cuenta?</Typography>{" "}
          <Link component={RouterLink} color="inherit" to="/demoras">
            ingresarssssss
          </Link>
        
    </>
  );
};
