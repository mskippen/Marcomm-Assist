import React, { useEffect, useState } from "react";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import { Container } from "semantic-ui-react";
import ProjectContainer from "../components/projects/ProjectContainer";
import { GET_ALL_CAMPAIGN_PROPERTIES } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const Projects = () => {
  const { data } = useQuery(GET_ALL_CAMPAIGN_PROPERTIES);
  const [properties, setProperties] = useState([]);
  const tempData = data?.getProperties || [];
  const userDetails = JSON.parse(localStorage.getItem("user_details"));
  useEffect(() => {
    const filteredData = tempData.filter(
      (i) => i.users.map((x) => x._id) == userDetails._id
    ); //filter out user that mathche current user from property
    setProperties(filteredData);
    console.log(tempData, "temp");
  }, []);

  return (
    <div className="Projectpage">
      <Container>
        <ProjectsHeader />
        <ProjectContainer properties={properties} />
      </Container>
    </div>
  );
};

export default Projects;
