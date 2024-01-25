import "./BottomBar.css";
import { useSelector, useDispatch } from "react-redux";

export default function BottomBar() {
  const dispatcher = useDispatch();
  const currentSong = useSelector((state) => state.currentSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row p-2">
        <div className="col-2"></div>
        <div className="col-1">
          {currentSong && (
            <div className="row">
              <img src={currentSong.album.cover} className="card-img img-fluid col-1 h-50 w-50" />
              <p className="col-1">{currentSong.title}</p>
            </div>
          )}
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-lg-10 offset-lg-2">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                  <div className="row gap-3">
                    <a href="#" className="col-1">
                      <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                    </a>
                    <a href="#" className="col-1">
                      <img src="/playerbuttons/Previous.png" alt="shuffle" />
                    </a>
                    <a href="#" className="col-1">
                      <img src="/playerbuttons/Play.png" alt="shuffle" />
                    </a>
                    <a href="#" className="col-1">
                      <img src="/playerbuttons/Next.png" alt="shuffle" />
                    </a>
                    <a href="#" className="col-1">
                      <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center playBar py-3">
                <div className="col-8 col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
