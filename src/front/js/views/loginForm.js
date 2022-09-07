import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signupform.css";

export const LoginForm = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const opts = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    }
    fetch(`https://3001-alvarochiri-levelupfina-0l661ixlb7q.ws-us63.gitpod.io/api/token`, opts)
      .then(resp => {
        if(resp.status === 200) return resp.json();
        else alert("There has been an error");
      })
      .then()
      .catch(error =>{
        console.error("There was an error!!")
      })
  }


  return (
    <>
      <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3">
            <div className="card-heading-login"></div>
            <div className="card-body">
              <h2 className="title">Login</h2>
              <form method="POST">
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="p-t-10">
                  <button className="button-01" type="submit" onClick={handleClick}>
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
