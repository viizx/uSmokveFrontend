import { useHistory, useParams } from "react-router-dom";
import useFetch from "./utils/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(
    "https://port-3000-js-practice-vice889681.codeanyapp.com/api/blogs/" + id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch(
      "https://port-3000-js-practice-vice889681.codeanyapp.com/api/blogs/" +
        blog.id,
      {
        method: "DELETE",
      }
    ).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
