import React, { memo } from "react";
import { Avatar, Button } from "@material-ui/core";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoCaption } from "@mui-treasury/components/info";
import { useChatzInfoStyles } from "@mui-treasury/styles/info/chatz";
import { useGradientAvatarStyles } from "@mui-treasury/styles/avatar/gradient";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import GitHubIcon from "@material-ui/icons/GitHub";
import moment from "moment";

const ChatzListItem = memo(function ChatzListItem(props) {
  const {
    avatar,
    title,
    name,
    date,
    status,
    sha,
    fetchListFile,
    fetchComments,
  } = props;

  const avatarStyles = useGradientAvatarStyles({
    size: 72,
    thickness: 3,
    color: "linear-gradient(to right, #8a2387, #e94057, #f27121);",
    gapColor: "#f4f7fa",
  });

  return (
    <>
      <Column gap={2} className="card">
        <Row alignItems={"center"}>
          <Item position={"middle"}>
            <div className={avatarStyles.root}>
              <Avatar src={avatar} />
            </div>
          </Item>
          <Info useStyles={useChatzInfoStyles}>
            <h3>{title}</h3>
            <span>{name}</span>
            <InfoCaption>{moment(date).format("MMM D, YY")}</InfoCaption>
            <Button
              style={{ marginTop: 10 }}
              color="primary"
              variant="outlined"
              size="small"
              onClick={() => fetchListFile(sha)}
            >
              Files
            </Button>
            &nbsp;
            <Button
              style={{ marginTop: 10 }}
              color="primary"
              variant="outlined"
              size="small"
              onClick={() => fetchComments(sha)}
            >
              Comments
            </Button>
          </Info>
          <Item minWidth={48} textAlign={"right"}>
            {status ? <CheckCircleIcon /> : <GitHubIcon />}
          </Item>
        </Row>
      </Column>
    </>
  );
});

export default ChatzListItem;
