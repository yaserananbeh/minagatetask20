import React, { useState, useEffect } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap'


function UserDetail({ currentUserId, test }) {
  const [oneUserDetails, setOneUserDetails] = useState(null);

  const [dataToChange, setDataToChange] = useState({
    name: oneUserDetails ? oneUserDetails.name : "",
    email: oneUserDetails ? oneUserDetails.email : "",
    phone: oneUserDetails ? oneUserDetails.phone : "",
    city: oneUserDetails ? oneUserDetails.address.city : ""
  })
  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}`)
      .then((res) => res.json())
      .then((json) => {
        setOneUserDetails(json);
      }).then((data) => console.log(oneUserDetails));

  }, [test])
  const handleChange = (e, targetInput) => {
    setDataToChange({ ...dataToChange, [targetInput]: e.target.value })
  }


  const handleEditUserData = (e) => {
    if (dataToChange.name === "") {
      setDataToChange({ ...dataToChange, name: oneUserDetails.name })
    }
    if (dataToChange.email === "") {
      setDataToChange({ ...dataToChange, email: oneUserDetails.email })
    }
    if (dataToChange.phone === "") {
      setDataToChange({ ...dataToChange, phone: oneUserDetails.phone })
    }
    if (dataToChange.address === "") {
      setDataToChange({ ...dataToChange, city: oneUserDetails.address.city })
    }
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}`, {
      method: 'PUT',
      body: JSON.stringify({
        "name": `${dataToChange.name}`,
        "email": `${dataToChange.email}`,
        "address": {
          "city": `${dataToChange.city}`,
        },
        "phone": `${dataToChange.phone}`,

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  }
  return <div>
    {oneUserDetails ? <Form>

      <Form.Group className="mb-3" controlId="name-controller">
        <Form.Label>Name</Form.Label>
        <input type="text" value={oneUserDetails.name} onChange={(e) => handleChange(e, "name")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email-controller">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" defaultValue={oneUserDetails.email} onChange={(e) => handleChange(e, "email")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Phone-controller">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" defaultValue={oneUserDetails.phone} onChange={(e) => handleChange(e, "phone")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="AddressCity-controller">
        <Form.Label>Address City</Form.Label>
        <Form.Control type="text" defaultValue={oneUserDetails.address.city} onChange={(e) => handleChange(e, "city")} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => handleEditUserData(e)}>
        Submit
      </Button>
    </Form> : <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
  </div>;
}

export default UserDetail;
