import React from "react";
import * as userFunctions from "../data/user";
function Home() {
  return (
    <div id="home">
      <h1>
        {userFunctions.username} is a Web Developer from {userFunctions.city}
      </h1>
    </div>
  );
}

export default Home;
