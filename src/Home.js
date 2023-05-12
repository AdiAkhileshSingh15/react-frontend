import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
    // let name = 'mario';
    // const [name, setName] = useState('mario'); //reactive values
    // const [age, setAge] = useState(25);
    // const handleClick = () => {
    //     setName('luigi');
    //     setAge('30');
    // }
    // const handleClickAgain = (name, e) => {
    //     console.log('hello, ' + name, e);
    //  }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => {
    //         return (
    //             blog.id !== id
    //         )
    //     })
    //     setBlogs(newBlogs)
    // }

    const { data, isPending, error } = useFetch('https://djangorctapi.pythonanywhere.com/api/blogs/')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <Bloglist blogs={data} title="All Blogs!"
            // handleDelete={handleDelete} 
            />}
            {/* <Bloglist blogs={blogs.filter((blog) => {
                return (
                    blog.author === 'mario'
                )
            })} title="Mario's blogs" /> */}
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}> Click Me</button> */}
            {/* <button onClick={(e) => {
                handleClickAgain('mario', e.target);
            }}>Click me again</button> */}
            {/* <button onClick={() => setName('luigi')}>Click me</button>
            <p>{name}</p> */}
        </div>
    );
}

export default Home;