import "./App.css"
import Customers from "./Components/Customers"
import Documentation from "./Components/Documentation"
import Login from "./Components/Login"
import PickupDetails from "./Components/PickupDetails"
import SuccessPage from "./Components/SuccessPage"
import TodoList from "./Components/TodoList"

function App() {
  return (
    <div className="">
      <Login />
      <TodoList />
      <Customers />
      <PickupDetails />
      <Documentation />
      <SuccessPage />
    </div>
  )
}

export default App
