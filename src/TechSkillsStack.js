import React from "react";
import { Container} from "react-bootstrap";
import Techstack from "./TechSkills";


function TechStackSkills() {
  return (
    <Container id="skills" fluid className="about-skills">
      <Container>
        <Techstack/>
      </Container>
    </Container>
  );
}

export default TechStackSkills;