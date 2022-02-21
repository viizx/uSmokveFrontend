import React from "react";
import Blogs from "./Blogs";
import useFetch from "./utils/useFetch";

function Land() {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch(
    "https://port-3000-js-practice-vice889681.codeanyapp.com/api/blogs"
  );
  return (
    <div className="container">
      <div className="landing">
        <div className="naslovi">
          <div>
            <p>Domaće</p>
          </div>
          <div>
            <p>Friško</p>
          </div>
          <div>
            <p>Zdravo</p>
          </div>
        </div>
        {/* <img src="public/images/background.png" alt=""></img> */}
      </div>
      {blogs && (
        <div>
          <Blogs blogs={blogs} />
        </div>
      )}
    </div>
  );
}

export default Land;
