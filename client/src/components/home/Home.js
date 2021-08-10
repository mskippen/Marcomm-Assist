import React from "react";
import { Container } from "semantic-ui-react";
import logo from "../../images/CPG_Horizontal_Reversed.png";

const Home = () => {
  return (
    <div className="Homepage">
      <div className="wrapper">
        <Container>
          <div className="logo-container">
            <img src={logo} alt="img logo" width="100%" />
          </div>
          <h1>
            Improving Efficencies <br /> Creating Value
          </h1>
        </Container>
      </div>
    </div>
  );
};

export default Home;
