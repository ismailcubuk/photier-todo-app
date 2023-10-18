import { Typography } from "@mui/material";
import StartChallenge from "./components/StartChallenge";
import TodoDelete from "./components/TodoDelete";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import { useSelector } from "react-redux";

function App() {
  const firstCode = useSelector((state) => state.firstCode);

  return (
<div className="flex flex-col min-h-screen items-center gradient bg-cover bg-fixed h-full ">
        <div className="border-2 border-green-500 w-full flex justify-center items-center h-60 flex-grow">
          <StartChallenge />
        </div>
        <div className="flex border-2 flex-wrap border-red-600 w-full items-center h-full">
          <div className="w-full h-full xl:w-2/6  p-6 flex justify-center items-center">
            <TodoList />
          </div>
          <div className="w-full h-full xl:w-2/6  border-2 border-red-700 p-6 flex justify-center items-center">
            <TodoSearch />
          </div>
          <div className="w-full h-full xl:w-2/6  border-2 border-red-700  p-6 flex justify-center">
            <TodoDelete />
          </div>
        </div>
    </div>
  );
}

export default App;
