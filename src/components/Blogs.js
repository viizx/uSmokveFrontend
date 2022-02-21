import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
