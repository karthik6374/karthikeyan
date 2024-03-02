import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // Simulate a successful registration
    console.log('Registration submitted:', formData);

    // Update state to indicate successful registration
    setIsRegistered(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the registration data here, like sending it to a server or processing it in some way
    console.log("Registration submitted:", formData);
    // Reset the form fields after submission if needed
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div style={{ textAlign: "center", width: "300px", margin: "auto", marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <div>
          {!isRegistered ? (
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          ) : (
            <div>
              <h2>Registration Successful!</h2>
              <p>
                Thank you for registering. You can now log in using your
                credentials.
              </p>
              {/* You can add additional content or links here */}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
