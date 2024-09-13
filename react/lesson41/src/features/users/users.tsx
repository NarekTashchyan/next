import { useGetUsersQuery, useDeleteUserMutation } from "./users.api";
import { IUser } from "./types";
import { EditUser } from "../../utils/edit-user";
import './users.css';

export const Users = () => {
  const { data, isLoading, error } = useGetUsersQuery(null);
  const [deleteUser] = useDeleteUserMutation();

  const handleSubmit = (user: IUser) => {
    deleteUser(user.id);
  };

  return (
    <div className="users-container">
      {isLoading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">Error loading users</p>}
      {data &&
        data.map(user => {
          return (
            <div key={user.id} className="user-entry">
              <p className="user-text">
                {user.name} with {user.salary} AMD salary
              </p>
              <button className="delete-btn" onClick={() => handleSubmit(user)}>
                Delete
              </button>
              <EditUser key={user.id} mUser={{ ...user }} />
            </div>
          );
        })}
    </div>
  );
};