import React from "react";
import { useStyles } from "./Home.style";

const Home = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.first} />
      <div className={classes.second} />
      <div className={classes.third} />
      <div className={classes.fourth} />
    </section>
  );
};

export default Home;
