import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRock, setPop, setHiphop, setSearchResults } from "./store/store";
import { Link } from "react-router-dom";

export default function Home(){
    const rockAlbums = useSelector((state) => state.rock);
    const popAlbums = useSelector((state) => state.pop);
    const hiphopAlbums = useSelector((state) => state.hiphop);
    const searchResults = useSelector((state) => state.searchResults);
    const dispatcher = useDispatch();

    return <div className="col-12 col-md-9 offset-md-3 mainPage">
    <div className="row">
      <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <a to="#">TRENDING</a>
        <a to="#">PODCAST</a>
        <a to="#">MOODS AND GENRES</a>
        <a to="#">NEW RELEASES</a>
        <a to="#">DISCOVER</a>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div
          id="searchResults"
          style={{ display: searchResults.length > 0 ? "block" : "none" }}
        >
          <h2>Search Results</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {searchResults.map((songInfo) => (
              <div key={songInfo.id} className="col text-center">
                <Link to={`/album?id=${songInfo.album.id}`}>
                  <img
                    className="img-fluid"
                    src={songInfo.album.cover_big}
                    alt="1"
                  />
                </Link>
                <p>
                  <Link to={`/album?id=${songInfo.album.id}`}>
                    Album: "{songInfo.album.title.substring(0, 16)}"
                  </Link>
                </p>
                <p>
                  <Link to={`/album?id=${songInfo.album.id}`}>
                    Artist: {songInfo.artist.name}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div id="rock">
          <h2>Rock classics</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="rockSection"
          >
            {rockAlbums.map((songInfo) => (
              <div key={songInfo.id} className="col text-center">
                <Link to={`/album?id=${songInfo.album.id}`}>
                  <img
                    className="img-fluid"
                    src={songInfo.album.cover_big}
                    alt="1"
                  />
                </Link>
                <p>
                  <Link to={`/album?id=${songInfo.album.id}`}>
                    Album: "{songInfo.album.title.substring(0, 16)}"
                  </Link>
                </p>
                <p>
                  <Link to={`/album?id=${songInfo.album.id}`}>
                    Artist: {songInfo.artist.name}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div id="pop">
          <h2>Pop Culture</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="popSection"
          >
            {popAlbums.map((songInfo) => (
              <div key={songInfo.id} className="col text-center">
                <Link to={`/album?id=${songInfo.album.id}`}>
                  <img
                    className="img-fluid"
                    src={songInfo.album.cover_big}
                    alt="1"
                  />
                </Link>
                <p>
                  <Link to={`/album?id=${songInfo.album.id}`}>
                    Album: "{songInfo.album.title.substring(0, 16)}"
                  </Link>
                </p>
                <p>
                  <Link to={`/album?id=${songInfo.album.id}`}>
                    Artist: {songInfo.artist.name}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-10">
        <div id="hiphop">
          <h2>#HipHop</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="hipHopSection"
          >
            {hiphopAlbums.map((songInfo) => (
              <div key={songInfo.id} className="col text-center">
                <a to={`/album?id=${songInfo.album.id}`}>
                  <img
                    className="img-fluid"
                    src={songInfo.album.cover_big}
                    alt="1"
                  />
                </a>
                <p>
                  <a to={`/album?id=${songInfo.album.id}`}>
                    Album: "{songInfo.album.title.substring(0, 16)}"
                  </a>
                </p>
                <p>
                  <a to={`/album?id=${songInfo.album.id}`}>
                    Artist: {songInfo.artist.name}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
}