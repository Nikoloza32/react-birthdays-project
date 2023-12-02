import { useState } from "react";
import { people } from "./data";
import { UserList } from "./UserList";

const App = () => {
  const [users, setUsers] = useState(people);

  const handleRemove = (id) => {
    const newPeople = users.filter((person) => person.id !== id);
    setUsers(newPeople);
  };

  const clearAllItem = () => {
    if (users.length === 0) {
      return setUsers(people);
    }
    setUsers([]);
  };

  return (
    <div className="main-container">
      <h2 className="bd-lenght">{users.length} Birthdays Today</h2>
      <div className="bd-wrapper">
        {users.map((user) => {
          return (
            <UserList key={user.id} user={user} handleRemove={handleRemove} />
          );
        })}
        <button className="clear-all" onClick={clearAllItem}>
          {users.length === 0 ? "Recovery List" : "Clear All"}
        </button>
      </div>
    </div>
  );
};
export default App;
