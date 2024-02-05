import React, { useEffect, useState } from "react";
import { JSONCard } from "../Components/JSONCard.tsx";
import NavBar from "../Components/NavBar.tsx";
import { Col, Row } from "react-bootstrap";
import { Heading } from "../Components/Heading.tsx";

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network request failed");
        }
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        setError("error.message");
      }
    };

    fetchData();
  }, []);
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="fade-in">
        <NavBar />
        <div>
          <div className="user-list-heading">
            <Heading heading="User List" />
          </div>
          <Row xs="1" md="2" lg="3" className="justify-content-md-center">
            {users.map((user) => (
              <Col>
                <JSONCard user={user} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default UserListPage;
