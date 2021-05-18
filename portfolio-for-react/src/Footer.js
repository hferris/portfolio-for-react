import React from "react";

const styles = {
  backgroundColor: "#C4C1C6",
  width: "100%",
};
const acrossStyle = {
  margin: "50px",
  fontFamily: "Roboto, Times New Roman, Times, serif",
  marginTop: "3%",
  marginBottom: "2%",
  display: "inline-block",
  fontWeight: "600",
  fontSize: "1rem",
  marginLeft: "8%",
  marginRight: "16%"
  
};

function Footer() {
  return (
    <div style={styles}>
      <nav>
        <ul>
        <li style={acrossStyle}>
            <a href="Resume">Resume Under Construction</a>
          </li>
          <li style={acrossStyle}>
            <a href="hferris@dbq.edu">Email: hferris@dbq.edu</a>
          </li>
          <li style={acrossStyle}>
            <a href="tel:847-445-8507">Phone: 847-445-8507</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Footer;