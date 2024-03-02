import React, { useState } from "react";

const Login = () => {
  // State to hold email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State to hold login status
  const [loginStatus, setLoginStatus] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You would typically send a request to your server for authentication here
    // For simplicity, we'll just check if email and password are not empty
    if (email && password) {
      // Simulating a successful login
      setLoginStatus("Login successful!");
    } else {
      // Simulating a failed login
      setLoginStatus("Invalid email or password");
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Login Page</h2>
      </div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="required-indicator">*</span>
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="required-indicator">*</span>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {loginStatus && <p className="status-message">{loginStatus}</p>}
      </div>
    </>
  );
};

export default Login;
