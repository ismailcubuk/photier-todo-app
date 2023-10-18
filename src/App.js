import { Typography } from "@mui/material";
import StartChallenge from "./components/StartChallenge";
import TodoDelete from "./components/TodoDelete";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import { useSelector } from "react-redux";

function App() {
  const firstCode = useSelector((state) => state.firstCode);

  return (
    <div className="gradient h-screen flex flex-col items-center">
      <div className="border-2 border-green-500 w-full flex justify-center items-center h-1/6">
        <StartChallenge />
      </div>
      <div className="flex border-2 border-red-600 w-full items-center h-5/6">
        <div className="w-2/6 h-full border-2 border-red-700 flex justify-center items-center">
          <TodoList />
        </div>
        <div className="w-2/6 border-2 border-red-700 flex justify-center">
          <TodoSearch />
        </div>
        <div className="w-2/6 border-2 border-red-700 flex justify-center">
          <TodoDelete />
        </div>
      </div>
    </div>
  );
}

export default App;
