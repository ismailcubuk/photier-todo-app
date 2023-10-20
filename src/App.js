import CompleteTodo from "./components/CompleteTodo";
import TodoDelete from "./components/TodoDelete";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import photier from "./photier.png";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center gradient bg-cover bg-fixed h-full ">
      <div className="w-full flex justify-center h-32 border-2 items-end">
        <img src={photier} className="w-96" alt="photier" />
      </div>
      <div className="flex flex-wrap w-full items-center">
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
      <div className="h-full justify-center items-center flex w-full">
        <div className="w-full h-full xl:w-2/6 flex justify-center">
          <CompleteTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
