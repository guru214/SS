import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        dateOfBirth: '',
        address: {
            street: '',
            city: '',
            state: '',
            postalCode: '',
            country: ''
        }
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1];
            setFormData((prevState) => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [addressField]: value
                }
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:3200/users/register', formData);
        //     setSuccess(response.data.message);
        //     setError(null);
        // } catch (err) {
        //     setError(err.response.data.message || 'An error occurred');
        //     setSuccess(null);
        // }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                </div>
                <div>
                    <label>Street:</label>
                    <input type="text" name="address.street" value={formData.address.street} onChange={handleChange} required />
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" name="address.city" value={formData.address.city} onChange={handleChange} required />
                </div>
                <div>
                    <label>State:</label>
                    <input type="text" name="address.state" value={formData.address.state} onChange={handleChange} required />
                </div>
                <div>
                    <label>Postal Code:</label>
                    <input type="text" name="address.postalCode" value={formData.address.postalCode} onChange={handleChange} required />
                </div>
                <div>
                    <label>Country:</label>
                    <input type="text" name="address.country" value={formData.address.country} onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
