import React from "react";
import professionalPic from "./imgs/professional-picture.png";
import background from "./imgs/background.jpeg";

const styles = {
  background: `url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  fontFamily: "Roboto, Times New Roman, Times, serif",
};
const lineStyle = {
  marginTop: "3%",
  marginBottom: "2%",
  listStyleType: "none",
  display: "inline-block",
  fontWeight: "600",
  fontSize: "1rem",
  marginLeft: "8%",
  marginRight: "20%",
};

const name = {
  marginRight: "40%",
  fontWeight: 'bold',
};

const pro = {
  width: "300px",
  borderRadius: "5px",
  height: "400px",
};

function Header() {
  return (
    <body style={styles}>
      <div>
        <nav>
          <ul>
            <strong>
              <a
                href="https://docs.google.com/document/d/1bF1CjusiJ1VYQ8mYxv3STll6Wiq69sYt--197Uahdkk/edit"
                target="blank"
              >
                <li style={lineStyle}>Resume</li>
              </a>
            </strong>
            <strong>
              <a href="https://github.com/hferris" target="blank">
                <li style={lineStyle}>Github</li>
              </a>
            </strong>
            <strong>
              <a
                href="https://www.linkedin.com/in/hanna-ferris/"
                target="blank"
              >
                <li style={lineStyle}>LinkedIn</li>
              </a>
            </strong>
          </ul>
        </nav>
      </div>
      <div style={name} class="Name">
        <strong>
          <h1>Hanna Ferris</h1>
        </strong>
      </div>
      <img src={professionalPic} style={pro} alt="Hanna Ferris"/>
      <div style={{ textAlign: "center" }}></div>
    </body>
  );
}

export default Header;
