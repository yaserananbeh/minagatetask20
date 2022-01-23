import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "../style/UserCard.css";

function UserCard({ userData, setCurruntUserId, currentUserId, setTest }) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    fetch("https://picsum.photos/100/100?rand=2").then((res) => {
      setImageSrc(res);
    });
  }, []);
  const handleClickOnUserCard = () => {
    setCurruntUserId(userData.id);
    setTest(userData.id);
  };
  return (
    <div className="userCardMainContainer" onClick={handleClickOnUserCard}>
      <Container>
        <Row>
          <Col sm={4}>
            {imageSrc ? (
              <img src={`https://picsum.photos/100/100?rand=${userData.id}`} alt="user" />
            ) : (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Col>
          <Col sm={8}>{userData.username}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserCard;
