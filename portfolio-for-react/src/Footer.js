import React from "react";

const styles = {
  backgroundColor: "#F36252",
  width: "100%",
};
const acrossStyle = {
  display: "inline-block",
  margin: "50px",
};

function Footer() {
  return (
    <div style={styles}>
      <nav>
        <ul>
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