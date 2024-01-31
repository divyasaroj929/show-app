import { Routes, Route } from "react-router-dom";
import "./App.css";
import ShowList from "./component/ShowList";
import ShowDetail from "./component/ShowDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ShowList />} />{" "}
        <Route path="/show/:id" element={<ShowDetail />} />
      </Routes>
    </div>
  );
}

export default App;
