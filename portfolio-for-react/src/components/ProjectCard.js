import React from "react";

const styles = {
  backgroundColor: "#D5758F",
  display: "flex",
  border: "2px solid black",
  flexDirection: "row",
};
const lineStyle = {
  listStyleType: "none",
};

function ProjectCard({ props }) {
  return (
    <div>
      <div style={styles} className="card">
        <div className="img-container">
          <img
            style={{
              width: "300px",
              borderRadius: "20px",
              height: "200px",
              border: "2px solid black",
            }}
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className="content">
          <ul>
            <li style={lineStyle}>
              <strong>Name: {props.name}</strong>
            </li>
            <li style={lineStyle}>
              <strong>Description: {props.description}</strong>
            </li>
            <li style={lineStyle}>
              <strong>
                <a href={props.github} target="blank">
                 Github Application Repo
                </a>
              </strong>
            </li>
            <li style={lineStyle}>
              <strong>
                <a href={props.deployed} target="blank">
                  Application Deployment
                </a>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;