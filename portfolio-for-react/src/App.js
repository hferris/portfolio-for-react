import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import NavBar from "./components/NavBar";
import projects from "./homeWork.json";
import Footer from "./Footer";

class App extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Router>
          <NavBar />
          <Route exact path="/">
            {this.state.projects.map((project) => (
              <ProjectCard props={project} />
            ))}
          </Route>
          <Route exact path="/about" component={About} />
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
