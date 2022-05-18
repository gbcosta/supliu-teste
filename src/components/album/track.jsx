import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Api } from "../../api";

const Track = (props) => {
  const api = new Api();
  return (
    <Box sx={{ display: "flex", alignItems: "start", mb: 1 }}>
      <Typography>{props.track.number}</Typography>
      <Typography sx={{ flexGrow: 1, ml: 2 }}>{props.track.title}</Typography>
      <Typography sx={{ mr: 2 }}>{props.track.duration}</Typography>
      <IconButton
        sx={{ padding: 0, mr: 1 }}
        onClick={() => {
          console.log(props.track);
          api.deleteTrack(props.track.id).then(() => {
            props.render.setRerender(!props.render.rerender);
          });
        }}
      >
        <DeleteIcon
          sx={{ color: "white", backgroundColor: "red" }}
        ></DeleteIcon>
      </IconButton>
    </Box>
  );
};

export { Track };
