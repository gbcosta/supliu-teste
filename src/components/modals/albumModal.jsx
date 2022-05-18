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

const AlbumModal = (props) => {
  const [nome, setNome] = React.useState("");
  const [ano, setAno] = React.useState("");

  const api = new Api();

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box sx={style}>
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Ano"
          variant="outlined"
          onChange={(e) => {
            setAno(e.target.value);
          }}
        />
        <Box display="flex" mr={1}>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            onClick={() => {
              api
                .addAlbum({
                  name: nome,
                  year: ano,
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

export { AlbumModal };
