import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
          <Home/>
      </div>
    </div>
  );
}

export default App;
