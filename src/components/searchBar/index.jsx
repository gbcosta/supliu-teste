import React from "react";
import { Box, Typography, InputBase, Button } from "@mui/material";
import { Api } from "../../api";
const SearchBar = () => {
  const api = new Api();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mr: 2,
        ml: 2,
        mt: 2,
      }}
    >
      <Typography>Digite uma palavra chave</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "25px",
            justifyContent: "center",
          }}
        >
          <InputBase variant="outlined" sx={{ width: "98%" }}></InputBase>
        </Box>
        <Button
          onClick={api.getAlbuns}
          sx={{
            backgroundColor: "#2887e0",
            color: "white",
            borderRadius: "25px",
            pl: 6,
            pr: 6,
            pt: 1,
            pb: 1,
            fontSize: 14,
            "&:hover": {
              backgroundColor: "#1973c7",
              color: "white",
              boxShadow: "none",
            },
          }}
        >
          Procurar
        </Button>
      </Box>
    </Box>
  );
};

export { SearchBar };
