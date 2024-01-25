import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong } from "./store/store";

export default function Album() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [album, setAlbum] = useState(null);
  const dispatcher = useDispatch();

  useEffect(() => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" +
        searchParams.get("id"),
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      }
    )
      .then((resp) => resp.json())
      .then((result) => {
        setAlbum(result);
      })
      .catch(console.log);
  }, []);

  const playSong = (song) => {
    dispatcher(setCurrentSong(song));
  };

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 pt-5 text-center" id="img-container">
          <img
            src={album?.cover_big}
            className="card-img img-fluid"
            alt="Album"
          />
          <div className="mt-4 text-center">
            <p className="album-title">{album?.title}</p>
          </div>
          <div className="text-center">
            <p className="artist-name">{album?.artist.name}</p>
          </div>
          <div className="mt-4 text-center">
            <button id="btnPlay" className="btn btn-success" type="button">
              Play
            </button>
          </div>
        </div>
        <div className="col-md-8 p-5">
          <div className="row">
            <div className="col-md-10 mb-5" id="trackList">
              {album?.tracks.data.map((track) => (
                <div className="py-3 trackHover">
                  <a
                    href="#"
                    className="card-title trackHover px-3"
                    style={{ color: "white" }}
                    onClick={() => {
                      playSong(track);
                    }}
                  >
                    {track.title}
                  </a>
                  <small className="duration" style={{ color: "white" }}>
                    {Math.floor(
                      parseInt(track.duration) / 60 // setting the duration minutes
                    )}
                    :
                    {parseInt(track.duration) % 60 < 10
                      ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                      : parseInt(track.duration) % 60}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
