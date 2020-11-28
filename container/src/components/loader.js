import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) =>
  createStyles({
    bar: {
      width: "100%",
      height: "70vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& > * + *": {
        marginTop: theme.spacing(5),
      },
    },
  })
);

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <CircularProgress size={100} />
    </div>
  );
}
