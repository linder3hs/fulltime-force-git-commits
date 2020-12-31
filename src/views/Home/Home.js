import React, { useState, useEffect } from "react";
import { githubService } from "../../services";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function Home() {
  const [commits, setCommits] = useState([]);

  const fetchListCommits = async () => {
    const response = await githubService.commits();
    setCommits(response);
  };

  useEffect(() => {
    fetchListCommits();
  }, []);

  return (
    <React.Fragment>
      <h1>List of commits</h1>
      {commits &&
        commits.map((commit) => (
          <React.Fragment>
            <Card
              avatar={commit.author.avatar_url}
              title={commit.commit.message}
              name={commit.commit.author.name}
              date={commit.commit.author.date}
              status={commit.commit.verification.verified}
            />
          </React.Fragment>
        ))}
    </React.Fragment>
  );
}

export default Home;
