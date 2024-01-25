import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRock, setPop, setHiphop, setSearchResults } from "./store/store";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from "./Album";

import BottomBar from "./BottomBar";
import Home from "./Home";

const rockArtists = [
  "queen",
  "u2",
  "thepolice",
  "eagles",
  "thedoors",
  "oasis",
  "thewho",
  "bonjovi",
];

const popArtists = [
  "maroon5",
  "coldplay",
  "onerepublic",
  "jamesblunt",
  "katyperry",
  "arianagrande",
];

const hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

function App() {
  const rockAlbums = useSelector((state) => state.rock);
  const popAlbums = useSelector((state) => state.pop);
  const hiphopAlbums = useSelector((state) => state.hiphop);
  const searchResults = useSelector((state) => state.searchResults);
  const dispatcher = useDispatch();

  const getRandom4 = (artits) => {
    return artits
      .sort((a, b) => Math.random() - Math.random())
      .filter((v, i) => artits.indexOf(v) === i)
      .splice(0, 4);
  };

  useEffect(() => {
    (async () => {
      let tmp = [];
      let tmp2 = [];
      let tmp3 = [];
      try {
        const rArtists = getRandom4(rockArtists);
        for (let i = 0; i < rArtists.length; i++) {
          const song = (await handleQuery(rArtists[i]))[0];
          tmp.push(song);
          dispatcher(setRock(tmp));
        }
        const pArtists = getRandom4(popArtists);
        for (let i = 0; i < pArtists.length; i++) {
          const song = (await handleQuery(pArtists[i]))[0];
          tmp2.push(song);
          dispatcher(setPop(tmp2));
        }
        const hArtists = getRandom4(hipHopArtists);
        for (let i = 0; i < hArtists.length; i++) {
          const song = (await handleQuery(hArtists[i]))[0];
          tmp3.push(song);
          dispatcher(setHiphop(tmp3));
        }
      } catch (error) {}
    })();
  }, []);

  const handleQuery = async (query) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      ); // gets the information
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songInfo = result.data;
        return result.data;
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async (text) => {
    const songs = await handleQuery(text);
    dispatcher(setSearchResults(songs));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <BrowserRouter>
        <Nav handleSearch={handleSearch} />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="album" element={<Album />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
