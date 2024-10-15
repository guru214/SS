import React, { useState } from 'react';
import './Profile.css';

const ProfilePage = () => {

  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 (123) 456-7890',
    dateOfBirth: '1990-01-01',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA',
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
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
        <button onClick={() => setIsEditing((prev) => !prev)} className="edit-btn">
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="profile-details">
        <div className="profile-field">
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Phone:</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={editedUser.phone}
              onChange={handleChange}
            />
          ) : (
            <p>{user.phone}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Date of Birth:</label>
          {isEditing ? (
            <input
              type="date"
              name="dateOfBirth"
              value={editedUser.dateOfBirth}
              onChange={handleChange}
            />
          ) : (
            <p>{user.dateOfBirth}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Address:</label>
          {isEditing ? (
            <div>
              <input
                type="text"
                name="street"
                value={editedUser.address.street}
                onChange={(e) =>
                  setEditedUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, street: e.target.value },
                  }))
                }
              />
              <input
                type="text"
                name="city"
                value={editedUser.address.city}
                onChange={(e) =>
                  setEditedUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, city: e.target.value },
                  }))
                }
              />
              <input
                type="text"
                name="state"
                value={editedUser.address.state}
                onChange={(e) =>
                  setEditedUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, state: e.target.value },
                  }))
                }
              />
              <input
                type="text"
                name="postalCode"
                value={editedUser.address.postalCode}
                onChange={(e) =>
                  setEditedUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, postalCode: e.target.value },
                  }))
                }
              />
              <input
                type="text"
                name="country"
                value={editedUser.address.country}
                onChange={(e) =>
                  setEditedUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, country: e.target.value },
                  }))
                }
              />
            </div>
          ) : (
            <p>{user.address.street}, {user.address.city}, {user.address.state}, {user.address.postalCode}, {user.address.country}</p>
          )}
        </div>

        {isEditing && (
          <button onClick={handleSave} className="save-btn">
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
