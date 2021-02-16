import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import CustomBreadCrumbs from "./CustomBreadCrumbs";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomSeparator() {
  const [styleActive, setStyleActive] = useState(false);

  const classes = useStyles();

  function showBreadCrumbsList() {
    setStyleActive(!styleActive);
    console.log(styleActive);
  }

  function showList() {
    console.log("***");
    return (
      styleActive && (
        <div
          style={{
            border: "5px solid purple",
            background: "blue",
            width: "150px"
          }}
        >
          <List subheader={<li />}>
            <li key={`section-1`}>
              <ul>
                {[0, 1, 2].map((item) => (
                  <ListItem
                    key={`item-1-${item}`}
                    style={{
                      border: "2px solid green",
                      background: "yellow"
                    }}
                  >
                    <ListItemText primary={`Item ${item}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          </List>
        </div>
      )
    );
  }

  return (
    <div className={classes.root}>
      <CustomBreadCrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        maxItems={2}
        customClickHandler={showBreadCrumbsList}
      >
        <Link color="inherit" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" onClick={handleClick}>
          Material-UI
        </Link>
      </CustomBreadCrumbs>
      {showList()}
    </div>
  );
}
