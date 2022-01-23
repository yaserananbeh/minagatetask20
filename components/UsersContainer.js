import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { Spinner } from "react-bootstrap";

function UsersContainer({ setCurruntUserId, currentUserId, setTest }) {
  const [usersApiData, setUsersApiData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsersApiData(json);
      });
  }, []);
  return (
    <>
      {usersApiData ? (
        <div>
          <h3>Search</h3>
          <input type="text" onChange={(e) => setSearchText(e.target.value)} />
          {usersApiData
            .filter((item) => {
              return item.username
                .toLowerCase()
                .includes(searchText.toLowerCase());
            })
            .map((data, index) => {
              return (
                <UserCard
                  key={index}
                  userData={data}
                  currentUserId={currentUserId}
                  setCurruntUserId={setCurruntUserId}
                  setTest={setTest}
                />
              );
            })}
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
}

export default UsersContainer;
