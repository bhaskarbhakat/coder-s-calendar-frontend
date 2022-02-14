import React, { useState } from "react";

const Notification = () => {

  const [email, setEmail] = useState({ email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://coderscalendar.herokuapp.com/api/users/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    const json = await response.json();
    if (json.success) {
      alert("Email address successfully added");
    } else {
      if (json.error === undefined) alert("Enter an email");
      else alert(json.error);
    }
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const response = await fetch("https://coderscalendar.herokuapp.com/api/users/deleteuser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    const json = await response.json();
    if (json.success) {
      alert("Email address successfully deleted!!!");
    } else {
      if (json.error === undefined) alert("Enter an email");
      else alert(json.error);
    }
  };

  const onChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-4">
        <center>
          <h6>
            Do you want to get notified about the upcoming contest through an
            email?
          </h6>
        </center>
      </div>
      <div className="container w-50">
        <form>
          <div className="form-group input-group-sm">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control "
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={onChange}
            ></input>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
         <center>
          <button
            type="submit"
            className="btn btn-sm mx-3"
            onClick={handleSubmit}
          >
            Subscribe
          </button>
          <button
            type="submit"
            className="btn btn-sm mx-3"
            onClick={handleSubmit1}
          >
            Unsubscribe
          </button>
          </center>
        </form>
      </div>


      <div className="container my-4">
        <center><h6>You will receive an email 24 hours before the contest starts.</h6></center>
      </div>
    </>
  );
};

export default Notification;
