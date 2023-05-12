import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams()
    const { data, isPending, error } = useFetch('https://djangorctapi.pythonanywhere.com/api/blogs/' + id + '/')

    const navigate = useNavigate();

    const handleClick = () => {
        fetch('https://djangorctapi.pythonanywhere.com/api/blogs/' + id + '/', {
            method: 'DELETE',
        }).then(() => {
            navigate("/");
        })
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;