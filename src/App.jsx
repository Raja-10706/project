import { useState } from "react";
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Signup
  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("username", formData.username);
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userPassword", formData.password);
    alert("Signup successful! Please sign in.");
    setIsSignup(false);
  };

  // Signin
  const handleSignin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (
      formData.email === storedEmail &&
      formData.password === storedPassword
    ) {
      alert("Signin successful! Welcome " + localStorage.getItem("username"));
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container">
      {isSignup ? (
        <form className="form-box" onSubmit={handleSignup}>
          <h2>Signup</h2>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Signup</button>
          <p>
            Already have an account?{" "}
            <span
              className="toggle-link"
              onClick={() => setIsSignup(false)}
            >
              Sign in
            </span>
          </p>
        </form>
      ) : (
        <form className="form-box" onSubmit={handleSignin}>
          <h2>Signin</h2>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Signin</button>
          <p>
            Don’t have an account?{" "}
            <span
              className="toggle-link"
              onClick={() => setIsSignup(true)}
            >
              Signup
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

export default App;
