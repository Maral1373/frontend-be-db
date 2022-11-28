import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  const onChange = (e) => {
    const copy = { ...data };
    copy[e.target.name] = e.target.value;
    setData(copy);
  };

  const clearData = () => {
    setData({});
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://127.0.0.1:4005/register", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
      });
      clearData();
      alert("Success");
    } catch (e) {
      alert(e.message);
      console.error("error", e);
    }
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id=""
          onChange={onChange}
          value={data.username || ""}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id=""
          onChange={onChange}
          value={data.password || ""}
        />
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id=""
          onChange={onChange}
          value={data.firstName || ""}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id=""
          onChange={onChange}
          value={data.lastName || ""}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          onChange={onChange}
          value={data.email || ""}
        />
        <label htmlFor="telephone">Telephone</label>
        <input
          type="text"
          name="telephone"
          id=""
          onChange={onChange}
          value={data.telephone || ""}
        />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          id=""
          onChange={onChange}
          value={data.date}
        />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="" onChange={onChange} value={data.gender}>
          <option value="Male" selected>
            Male
          </option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="N/A">N/A</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
