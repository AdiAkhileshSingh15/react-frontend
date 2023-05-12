import { Link } from "react-router-dom";
const BlogList = ({ blogs, title,
    // handleDelete 
}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                        </Link>
                        <p>Written by {blog.author}</p>
                        {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
                    </div>
                )
            })}
        </div>
    );
}

export default BlogList;