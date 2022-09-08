import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/signupform.css";
import { Login } from "../component/api";

export const LoginForm = () => {
  const { store, actions } = useContext(Context);
  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");
  const [update, setUpdate] = useState("A");

  const handleClick = (e) => {
    e.preventDefault();
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emails,
        password: passwords,
      }),
    };
    fetch(`${process.env.BACKEND_URL}/api/token`, opts).then((resp) => {
      if(resp.status == 200) return resp.json();
      else alert("There has been an error");
    });
    // .then()
    // .catch(error =>{
    //   console.error("There was an error!!")
    // })
  };

  return (
    <>
      <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3">
            <div className="card-heading-login"></div>
            <div className="card-body">
              <h2 className="title">Login</h2>
              <form /*removed method="POST"*/>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={passwords}
                    onChange={(e) => setPasswords(e.target.value)}
                  />
                </div>

                <div className="p-t-10">
                  <button
                    className="button-01"
                    type="submit"
                    onClick={(e) => handleClick(e)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
