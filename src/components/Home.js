import {useState, useEffect} from 'react';

import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
    const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
    const [name, setName] = useState('mario');

    const handleDelete =(id)=>{
        const newBlog = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlog)
    }

    useEffect(()=>{
        console.log("run fast as you can")
        console.log(name)
    }, [name])
    // empty array makes sure the hook is run only once after the first render

    return (
        <div className="home">
            <BlogList blogs={blogs} title="this is the title" handleDelete={handleDelete}/>
            <button onClick={()=> setName('luigi')}>change name</button>
            <p>{name}</p>
        </div>);
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading......</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;