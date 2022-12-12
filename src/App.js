import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
    const title ="React App";
    const likes = 50;
    const person = [{name: 'mario', age: 30}, {name: 'luigi', age: 25}, {name: 'yoshi', age: 40}];
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <h1>{title}</h1>
          <Home/>
          <p>Liked {likes} times</p>
          {person.map((person, index) => (
          <p>{person?.age}</p>))}
      </div>
    </div>
  );
}

export default App;
