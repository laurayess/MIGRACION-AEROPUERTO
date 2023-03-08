import { BorderColorTwoTone } from "@mui/icons-material";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BreadCrumbsCustom } from "../../components/BreadCrumbsCustom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const buttonStyle = {
  backgroundColor: "common.white",
  color: "common.black",
  boxShadow: "none",
  border: "solid 1px",
  "&:hover": {
    backgroundColor: "common.black",
    color: "common.white",
    border: "solid 1px",
    borderColor: "black",
  },
};

export const Demoras = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"100%"}
        flexDirection="column"
        display="flex"
        alignItems={"center"}
        justifyContent={"space-center"}
      >
        <BreadCrumbsCustom
          routes={[
            {
              name: "Demoras",
              url: "/demoras/inicio",
            },
          ]}
          currentRoute={"Ver Demoras"}
        ></BreadCrumbsCustom>
        <Box>
          <Typography variant="subtitle1">DEMORAS</Typography>
        </Box>
        <Box
          width={"100%"}
          height={"400px"}
          sx={{ backgroundColor: "#505050" }}
        ></Box>
      </Box>
    </>
  );
};
