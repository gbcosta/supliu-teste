import { Modal, Box, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { Api } from "../../api";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const TrackModal = (props) => {
  const [faixa, setFaixa] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [duracao, setDuracao] = React.useState("");

  const api = new Api();

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box sx={style}>
        <TextField
          id="outlined-basic"
          type="number"
          label="Número"
          variant="outlined"
          onChange={(e) => {
            setNumero(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Faixa"
          variant="outlined"
          onChange={(e) => {
            setFaixa(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          type="number"
          label="Duração em Segundos"
          variant="outlined"
          onChange={(e) => {
            setDuracao(e.target.value);
          }}
        />
        <Box display="flex" mr={1}>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            onClick={() => {
              api
                .addTrack({
                  album_id: props.album.id,
                  number: numero,
                  title: faixa,
                  duration: duracao,
                })
                .then(() => {
                  props.render.setRerender(!props.render.rerender);
                });

              props.handleClose();
            }}
          >
            <AddIcon
              sx={{ color: "white", backgroundColor: "green" }}
            ></AddIcon>
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export { TrackModal };
