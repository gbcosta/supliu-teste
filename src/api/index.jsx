import axios from "axios";

const baseUrl = "https://tiao.supliu.com.br/api/";
const headers = {
  "Content-type": "application/json",
  Authorization: "gbcostasant@gmail.com",
  credentials: "include",
};

const _axios = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

class Api {
  async getAlbuns() {
    let _data;
    await _axios.get("album").then(({ data }) => {
      _data = data;
    });
    return _data;
  }

  async addTrack(track) {
    console.log(track);
    _axios.post("track", track).catch((e) => {
      console.log(e.response.data);
    });
  }

  async deleteAlbum(id) {
    console.log(id);
    _axios.delete(`album/${id}`).catch((e) => {
      console.log(e.response.data);
    });
  }

  async deleteTrack(id) {
    console.log(id);
    _axios.delete(`track/${id}`).catch((e) => {
      console.log(e.response.data);
    });
  }

  async addAlbum(album) {
    console.log(album);
    _axios.post("album", album).catch((e) => {
      console.log(e.response.data);
    });
  }
}

export { Api };
