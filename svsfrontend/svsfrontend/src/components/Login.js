import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CLoginService from "../service/CLoginService";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPass] = useState("");
   const navigate = useNavigate();

   const LoginValidation = (e) => {
      e.preventDefault();
      const LoginCust = { c_email: email, c_pass: password };
      console.log(LoginCust);
      CLoginService.cLoginValidation(LoginCust)
         .then((res) => {
            console.log(res.data);
            navigate("/Vehiclereg");
         })
         .catch((error) => console.log(error));
   };
   return (
      <div className="container my-4"><br></br><br></br>
         <div class="shadow-lg p-3 mb-5 bg-white rounded"><br></br>
            <div className="text-center">
               <h2>Login</h2>
            </div>
            <div className="row justify-content-center my-4">
               <div className="col-lg-5">
                  <form onSubmit={(e) => LoginValidation(e)}>
                     <label for="email" className="form-label">
                        Email address:
                     </label>
                     <input type="text" id="email" className="form-control" placeholder="e.g. mario@example.com"
                        required value={email} onChange={(e) => setEmail(e.target.value)}/>
                       <div>
                        <label for="pass" className="form-label">Password</label>
                        <input type="password" id="pass" name="password" className="form-control" minLength="8"
                           required value={password} onChange={(e) => setPass(e.target.value)}/>
                     </div><br></br>
                     <div className="mb-4 text-center my-2">
                        <button type="submit" className="btn btn-outline-dark">
                           Submit
                        </button><br></br><br></br>
                        <span>Way to Registation
                           <Link to={"/Registation"}>Register here</Link>
                        </span>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;