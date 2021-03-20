import React, { Fragment } from "react";
import Search from "../Search";
import Users from "../Users";

const Home = () => {
  return (
    <div>
      <Fragment>
        <Search />
        <Users />
      </Fragment>
    </div>
  );
};

export default Home;
