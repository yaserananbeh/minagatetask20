import React, { useState, createContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import UsersContainer from './UsersContainer'
import '../style/Dashboard.css'
import UserDetail from './UserDetail';

function DashboardContainer() {
  const [currentUserId, setCurruntUserId] = useState(1);
  const [test, setTest] = useState(0);

  return <div className='dashboardMainContainer'>
    <Container>
      <Row className='new-row'>
        <Col sm={4}>
          <UsersContainer currentUserId={currentUserId} setCurruntUserId={setCurruntUserId} setTest={setTest} />
        </Col>
        <Col sm={8}><UserDetail currentUserId={currentUserId} test={test} /></Col>
      </Row>

    </Container>
  </div>;
}

export default DashboardContainer;
