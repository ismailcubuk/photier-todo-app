import StartChallenge from "./components/StartChallenge";
import TodoDelete from "./components/TodoDelete";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center gradient bg-cover bg-fixed h-full ">
      <div className="w-full flex justify-center items-center h-60 flex-grow">
        <StartChallenge />
      </div>
      <div className="flex flex-wrap w-full items-center h-full">
        <div className="w-full h-full xl:w-2/6 p-6 flex justify-center items-center">
          <TodoList />
        </div>
        <div className="w-full h-full xl:w-2/6 p-6 flex justify-center items-center">
          <TodoSearch />
        </div>
        <div className="w-full h-full xl:w-2/6 p-6 flex justify-center">
          <TodoDelete />
        </div>
      </div>
    </div>
  );
}

export default App;
