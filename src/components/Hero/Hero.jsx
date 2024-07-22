import "./Hero.css";
import profile from "../../assets/profilenjay.jpeg";
import content from "../../assets/header.png";

const Hero = () => {
  const styleWelcome = {
    fontSize: "76px",
    fontWeight: 700,
  };

  const styleName = {
    fontSize: "28px",
    color: "#969696",
    fontWeight: 600,
    marginTop: "22px",
  };

  const styleTitle = {
    marginBottom: "5px",
    fontSize: "24px",
    fontWeight: 600
  }

  const styleDesc = {
    fontSize: "20px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="hero">
      <div className="nav">
        <p>Rens - Portfolio</p>
        <img src={profile} alt="" />
      </div>
      <div className="main_container">
        <div className="text_image_container">
          <div className="text_container">
            <div className="grid">
              <p>
                <span style={styleWelcome}>Rendy Agus S</span>
              </p>
              <p style={styleName}>I am a FrontEnd Developer.</p>
            </div>
          </div>
          <div className="image_container">
            <img src={content} alt="Header Content" />
          </div>
        </div>
        <div className="content">
            <p style={styleTitle}>About Me</p>
          <p style={styleDesc}>
            I learned autodidactically from sources on the internet, and to be
            honest I have no programming basics. Because I really like learning
            new things, I decided to study programming, because to be honest, my
            ability is designing... maybe because I was bored with design, I
            started to study programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
