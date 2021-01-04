import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Comments(props) {
  const classes = useStyles();

  const { comments } = props;

  return (
    <List className={classes.root}>
      {comments &&
        comments?.map((comment, index) => (
          <React.Fragment>
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={comment.user.login}
                  src={comment.user.avatar_url}
                />
              </ListItemAvatar>
              <ListItemText
                primary={comment?.body}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      <Link
                        target={"_blank"}
                        to={{
                          pathname: `https://github.com/${comment.user.login}`,
                        }}
                      >
                        @{comment.user.login}
                      </Link>{" "}
                      <br />
                      {moment(comment?.created_at).format("LL")}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
    </List>
  );
}
