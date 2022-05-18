import { Box, IconButton } from "@mui/material";
import React from "react";
import { Header } from "../header/index";
import { SearchBar } from "../searchBar";
import { Api } from "../../api";
import { Album } from "../album";
import { Track } from "../album/track";
import AddIcon from "@mui/icons-material/Add";
import { AlbumModal } from "../modals/albumModal";

const Searcher = () => {
  const [albuns, setAlbuns] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rerender, setRerender] = React.useState(false);

  const render = {
    rerender: rerender,
    setRerender: setRerender,
  };

  const api = new Api();

  React.useEffect(() => {
    api.getAlbuns().then((data) => {
      console.log(data);
      setAlbuns(data);
    });
  }, [rerender]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <AlbumModal
        open={open}
        handleClose={handleClose}
        render={render}
      ></AlbumModal>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: [200, 800],
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.5)",
            position: "relative",
            overflowY: "auto",
          }}
        >
          <SearchBar />
          <Box mr={1}>
            <IconButton onClick={handleOpen}>
              <AddIcon
                sx={{ color: "white", backgroundColor: "green" }}
              ></AddIcon>
            </IconButton>
          </Box>
          {albuns?.data?.map((album, key) => {
            return (
              <Album album={album} key={key} render={render}>
                {album.tracks.map((track, key) => {
                  return <Track key={key} track={track} render={render} />;
                })}
              </Album>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export { Searcher };
