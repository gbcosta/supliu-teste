import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        width: "100%",
        pt: 2,
        pb: 2,
      }}
    >
      <img style={{ marginLeft: "16px" }} src={Logo}></img>
      <Box sx={{ flexGrow: 1 }} />
      <Typography sx={{ mr: 2 }} fontSize={48}>
        Discografia
      </Typography>
    </Box>
  );
};

export { Header };
