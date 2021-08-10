import React from "react";
import { Grid } from "semantic-ui-react";

const ProjectsHeader = () => {
  return (
    <div className="Project__header">
      <header>
        <Grid columns={4}>
          <Grid.Column>
            <h1>My Projects</h1>
          </Grid.Column>
        </Grid>
      </header>
    </div>
  );
};

export default ProjectsHeader;
