import React, { useState } from 'react';

export default function FormValidation() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState({
        username: '',
        email: '',
        password: '',
    });

    function handleFormChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validateInput(name, value);
    }

    function validateInput(getName = '', getValue) {
        switch (getName) {
            case 'username':
                setError((prevErr) => ({
                    ...prevErr,
                    username: getValue.length < 3 ? 'Username must be at least 3 characters' : '',
                }));
                break;
            case 'email':
                setError((prevErr) => ({
                    ...prevErr,
                    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue)
                        ? ''
                        : 'Invalid email address',
                }));
                break;
            case 'password':
                setError((prevErr) => ({
                    ...prevErr,
                    password: getValue.length < 6 ? 'Password must be at least 6 characters' : '',
                }));
                break;
            default:
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='wrapper'>
            <h2>Simple Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        value={formData.username}
                        onChange={handleFormChange}
                        type='text'
                        name='username'
                        placeholder='Enter Your Name'
                        autoComplete='off'
                    />
                    <span>{error?.username}</span>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        value={formData.email}
                        onChange={handleFormChange}
                        type='email'
                        name='email'
                        placeholder='Enter Your Email'
                        autoComplete='off'
                    />
                    <span>{error?.email}</span>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        value={formData.password}
                        onChange={handleFormChange}
                        type='password'
                        name='password'
                        placeholder='Enter Your Password'
                        autoComplete='off'
                    />
                    <span>{error?.password}</span>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}
