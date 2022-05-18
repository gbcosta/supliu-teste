import { Box, Typography, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { TrackModal } from "../modals/trackModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { Api } from "../../api";

const Album = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const api = new Api();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 2, mb: 4 }}>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ fontWeight: 600 }}>{props.album.name}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          sx={{ padding: 0, mr: 1 }}
          onClick={() => {
            console.log(props.album);
            api.deleteAlbum(props.album.id);
            props.render.setRerender(!props.render.rerender);
          }}
        >
          <DeleteIcon
            sx={{ color: "white", backgroundColor: "red" }}
          ></DeleteIcon>
        </IconButton>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Typography>N</Typography>
        <Typography sx={{ flexGrow: 1, ml: 2 }}>Faixa</Typography>
        <Typography mr={4}>Duração</Typography>
      </Box>
      {props.children}
      <Box display="flex" mr={0}>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={handleOpen}>
          <AddIcon sx={{ color: "white", backgroundColor: "green" }}></AddIcon>
        </IconButton>
      </Box>
      <TrackModal
        open={open}
        handleClose={handleClose}
        album={props.album}
        render={props.render}
      />
    </Box>
  );
};

export { Album };
