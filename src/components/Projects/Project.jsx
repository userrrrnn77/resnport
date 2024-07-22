import Slider from "react-slick";
import "./Project.css";
import renstube from "../../assets/renstube.png";
import netflix from "../../assets/netflix.png";
import rensbot from "../../assets/rensbotai.png";
import rensport from "../../assets/rensport.png";

const Project = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="project">
      <h1 className="title">My Projects</h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div
            className="card"
            onClick={() => handleClick("https://renstube.vercel.app")}
          >
            <figure>
              <img src={renstube} alt="Youtube" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">YT Clone</h2>
              <p>Learn fetching open source API from YouTube</p>
              <div className="card-actions">
                <button
                  onClick={() => handleClick("https://renstube.vercel.app")}
                  className="btn"
                >
                  Try Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="card"
            onClick={() => handleClick("https://rensbotai.vercel.app")}
          >
            <figure>
              <img src={rensbot} alt="Rensbot" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Gemini Clone</h2>
              <p>Learn open source API fetching from Gemini AI</p>
              <div className="card-actions">
                <button
                  onClick={() => handleClick("https://rensbotai.vercel.app")}
                  className="btn"
                >
                  Try Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="card"
            onClick={() => handleClick("https://netfilxbjir.vercel.app")}
          >
            <figure>
              <img src={netflix} alt="Netflix" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Netflix Clone</h2>
              <p>Learn to fetch the open source API from TMDB</p>
              <div className="card-actions">
                <button
                  onClick={() => handleClick("https://netfilxbjir.vercel.app")}
                  className="btn"
                >
                  Try Now
                </button>
              </div>
            </div>
          </div>
          <div className="card" onClick={() => handleClick("#")}>
            <figure>
              <img src={rensport} alt="Portfolio" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Portfolio</h2>
              <p>Create a simple Website Portfolio using React JS</p>
              <div className="card-actions">
                <button onClick={() => handleClick("#")} className="btn">
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Project;
