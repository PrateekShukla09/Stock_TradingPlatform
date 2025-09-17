import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toggleMode = () => {
    setIsLoginMode((prev) => !prev);
    setForm({ username: "", email: "", password: "" });
    setMessage("");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = "http://localhost:3002/auth";

    const url = isLoginMode ? `${API_URL}/login` : `${API_URL}/signup`;

    try {
      const res = await axios.post(url, form);
      const { user, token } = res.data;

    // Save token and user
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

      const encodedUser = encodeURIComponent(JSON.stringify(user));
      window.location.href = `http://localhost:3001?user=${encodedUser}`;

    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Something went wrong.";
      setMessage("Error: " + errorMessage);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center p-5">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">
          {isLoginMode ? "Login to Your Account" : "Create an Account"}
        </h3>

        {message && (
          <div
            className={`alert ${
              message.startsWith("Error") ? "alert-danger" : "alert-success"
            }`}
            role="alert"
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {isLoginMode ? "Login" : "Signup"}
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={toggleMode}
              className="btn btn-link p-0"
              style={{ textDecoration: "none" }}
            >
              {isLoginMode ? "Signup here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;