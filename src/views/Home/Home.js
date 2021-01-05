import React, { useState, useEffect } from "react";
import { githubService } from "../../services";
import Card from "../../components/Card";
import Comments from "../../components/Comments";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FolderIcon from "@material-ui/icons/Folder";

function Home() {
  const [commitsInitial, setCommitsInitial] = useState([]);
  const [commits, setCommits] = useState([]);
  const [files, setFiles] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchListCommits = async () => {
    const response = await githubService.commits();
    setCommitsInitial(response);
    setCommits(response);
  };

  const fetchListFile = async (sha) => {
    const response = await githubService.files(sha);
    setFiles(response.files);
  };

  const fetchComments = async (sha) => {
    const response = await githubService.comments(sha);
    setComments(response);
  };

  const handleSearch = (e) => {
    setFiles([]);
    setComments([]);
    setCommits(
      commitsInitial.filter((item) =>
        item.commit.message.toLowerCase().includes(e.target.value)
      )
    );
  };

  useEffect(() => {
    fetchListCommits();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="input-with-icon-textfield"
            label="Search commits..."
            variant="outlined"
            fullWidth
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>Commits {`(${commits?.length})`} </h4>
          {commits &&
            commits.map((commit, index) => (
              <Grid key={index} item>
                <Card
                  avatar={commit.author.avatar_url}
                  title={commit.commit.message}
                  name={commit.commit.author.name}
                  date={commit.commit.author.date}
                  status={commit.commit.verification.verified}
                  sha={commit.sha}
                  fetchListFile={fetchListFile}
                  fetchComments={fetchComments}
                />
              </Grid>
            ))}
        </Grid>
        <Grid item xs={12} sm={3}>
          <h4>Files {`(${files?.length})`}</h4>
          <List dense={true}>
            {files &&
              files.map((file, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <FolderIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={file?.filename}
                    secondary={`changes: ${file?.changes}`}
                  />
                </ListItem>
              ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h4>Comments {`(${comments?.length})`}</h4>
          <Comments comments={comments} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
