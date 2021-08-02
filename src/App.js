import "./App.css";
import { useSelector } from "react-redux";
import { increment, decrement } from "./actions";
import { useDispatch } from "react-redux";
import Card from "./components/buttonCard";
import axios from "axios";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Movies</h1>
      <p>Counter : {counter}</p>
      <button onClick={() => dispatch(increment())}>add one </button>
      <button onClick={() => dispatch(decrement())}>subtract one </button>
      {isLogged ? <h3>logged in! </h3> : <h3>not logged in </h3>}
      <div className="photos">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
