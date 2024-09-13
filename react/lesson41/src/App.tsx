import "./App.css"
import { Users } from "./features/users/users"
import { AddUser } from "./utils/add-user"
const App = () => {
  return (
    <>
      <div className="App">
        <AddUser />
        <Users />
      </div>
    </>
  )
}

export default App
