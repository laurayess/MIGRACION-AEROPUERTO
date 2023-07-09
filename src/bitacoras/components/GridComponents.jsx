import { Box } from "@mui/material";
import React from "react";

export const GridComponents = ({ children }) => {
  return (
    <>
      <Box
        display={"flex"}
        flexWrap="wrap"
        justifyContent={"center"}
        gap={"30px"}
        width={"90%"}
        height={{ xl: "600px", lg: "350px", md: "320px", xs: "auto" }}
        sx={{
          mt: 2,
          background: "#E7E6E6",
          overflowY: "scroll",
          p: 3,
          // borderStyle: "solid",
          // borderWidth: "1px",
          borderRadius: "10px",
          boxShadow: 5,
        }}
      >
        {children}
      </Box>
    </>
  );
};
