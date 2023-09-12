import React from "react";
import Allblog from "./Allblog";

function Latestblog() {
  return (
    <>
      <div className="latestblog">
        <div className="blogcontent">
          <h2>Latest Blogs</h2>
          <p>
            Our latest blogs cover a diverse range of topics, from health and
            wellness tips to technology trends and travel destinations.{" "}
          </p>
          <Allblog/>
        </div>
      </div>
    </>
  );
}

export default Latestblog;
