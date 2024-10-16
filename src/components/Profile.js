import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Sohail',
    email: 'sohail@example.com',
    phone: '+91 9505466569',
    dateOfBirth: '2004-06-14', // Changed to ISO format for compatibility with input type="date"
    address: {
      street: 'Madannapet street',
      city: 'Hyd',
      state: 'TS',
      postalCode: '500059',
      country: 'India',
    },
  });

  // State to toggle between edit and view modes
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  // Handle editing form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save edited profile
  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <Container className="profile-container mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="profile-header d-flex justify-content-between align-items-center">
            <h2>Profile</h2>
            <Button
              variant={isEditing ? 'secondary' : 'primary'}
              onClick={() => setIsEditing((prev) => !prev)}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>

          <Form className="profile-details mt-4">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Name:
              </Form.Label>
              <Col sm={9}>
                {isEditing ? (
                  <Form.Control
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleChange}
                  />
                ) : (
                  <Form.Control plaintext readOnly defaultValue={user.name} />
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Email:
              </Form.Label>
              <Col sm={9}>
                {isEditing ? (
                  <Form.Control
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                  />
                ) : (
                  <Form.Control plaintext readOnly defaultValue={user.email} />
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Phone:
              </Form.Label>
              <Col sm={9}>
                {isEditing ? (
                  <Form.Control
                    type="text"
                    name="phone"
                    value={editedUser.phone}
                    onChange={handleChange}
                  />
                ) : (
                  <Form.Control plaintext readOnly defaultValue={user.phone} />
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Date of Birth:
              </Form.Label>
              <Col sm={9}>
                {isEditing ? (
                  <Form.Control
                    type="date"
                    name="dateOfBirth"
                    value={editedUser.dateOfBirth}
                    onChange={handleChange}
                  />
                ) : (
                  <Form.Control plaintext readOnly defaultValue={user.dateOfBirth} />
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Address:
              </Form.Label>
              <Col sm={9}>
                {isEditing ? (
                  <div>
                    <Form.Control
                      type="text"
                      name="street"
                      value={editedUser.address.street}
                      onChange={(e) =>
                        setEditedUser((prev) => ({
                          ...prev,
                          address: { ...prev.address, street: e.target.value },
                        }))
                      }
                      className="mb-2"
                      placeholder="Street"
                    />
                    <Form.Control
                      type="text"
                      name="city"
                      value={editedUser.address.city}
                      onChange={(e) =>
                        setEditedUser((prev) => ({
                          ...prev,
                          address: { ...prev.address, city: e.target.value },
                        }))
                      }
                      className="mb-2"
                      placeholder="City"
                    />
                    <Form.Control
                      type="text"
                      name="state"
                      value={editedUser.address.state}
                      onChange={(e) =>
                        setEditedUser((prev) => ({
                          ...prev,
                          address: { ...prev.address, state: e.target.value },
                        }))
                      }
                      className="mb-2"
                      placeholder="State"
                    />
                    <Form.Control
                      type="text"
                      name="postalCode"
                      value={editedUser.address.postalCode}
                      onChange={(e) =>
                        setEditedUser((prev) => ({
                          ...prev,
                          address: { ...prev.address, postalCode: e.target.value },
                        }))
                      }
                      className="mb-2"
                      placeholder="Postal Code"
                    />
                    <Form.Control
                      type="text"
                      name="country"
                      value={editedUser.address.country}
                      onChange={(e) =>
                        setEditedUser((prev) => ({
                          ...prev,
                          address: { ...prev.address, country: e.target.value },
                        }))
                      }
                      className="mb-2"
                      placeholder="Country"
                    />
                  </div>
                ) : (
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={`${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}, ${user.address.country}`}
                  />
                )}
              </Col>
            </Form.Group>

            {isEditing && (
              <div className="d-flex justify-content-end">
                <Button variant="success" onClick={handleSave}>
                  Save Changes
                </Button>
              </div>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
