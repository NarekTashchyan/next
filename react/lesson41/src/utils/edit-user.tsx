import { IUser } from "../features/users/types"
import { useEditUserMutation } from "../features/users/users.api"
import { useState, useEffect } from "react"
import "./component.css"

interface IProps {
  mUser: IUser
}

export const EditUser = ({ mUser }: IProps) => {
  const [editUser] = useEditUserMutation()
  const [user, setUser] = useState<IUser>({ ...mUser })
  const [show, setShow] = useState(false)

  const handleAction = () => {
    setShow(!show)
  }

  useEffect(() => {
    if (show) {
      setUser(mUser)
    }
  }, [mUser, show])

  const handleSubmit = (event: any) => {
    event.preventDefault()
    editUser(user)
    handleAction()
  }

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      {show && (
        <div className="modal-overlay" onClick={handleAction}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={event => setUser({ ...user, name: event.target.value })}
            />
            <input
              type="number"
              placeholder="Salary"
              value={user.salary}
              onChange={event =>
                setUser({ ...user, salary: Number(event.target.value) })
              }
            />
            <button onClick={handleSubmit}>Submit</button>
            <button className="modal-close" onClick={handleAction}>
              &times;
            </button>
          </div>
        </div>
      )}
      <button onClick={() => handleAction()}>Edit</button>
    </div>
  )
}
