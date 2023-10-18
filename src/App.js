import StartChallenge from "./components/StartChallenge";
import TodoDelete from "./components/TodoDelete";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  return <div>
    <StartChallenge/>
    <TodoList/>
    <TodoSearch/>
    <TodoDelete/>
  </div>;
}

export default App;
