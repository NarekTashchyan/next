import { useState } from "react";
import type { InputUser } from "../features/users/types";
import { useAddUserMutation } from "../features/users/users.api";
import './component.css';

export const AddUser = () => {
  const [user, setUser] = useState<InputUser>({ name: "", salary: 0 });
  const [addUser] = useAddUserMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser(user)
      .then(res => {
        setUser({ name: "", salary: 0 });
      });
  };

  return (
    <div className="add-user-container">
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <input
          type="number"
          placeholder="Salary"
          step={20000}
          value={user.salary > 0 ? user.salary : ""}
          onChange={(event) =>
            setUser({ ...user, salary: Number(event.target.value) })
          }
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
