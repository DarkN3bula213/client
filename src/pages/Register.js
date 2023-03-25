import { useState, UseEffect } from "react";
import { Logo, FormRow, Alert } from "../Components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state and navigation
  const {isLoading, showAlert, displayAlert, registerUser} = useAppContext() 

  //toggle between login and register
    const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
    };

// handle change in form
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target);};


    // handle submit
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return;
    }
    const currentUser = { name, email, password};
    if(isMember){
      console.log('Already a member');
    }else{
      registerUser(currentUser);
    }
    console.log(values);};

  return <Wrapper className="full-page">
<form className="form" onSubmit={onSubmit}>
    <Logo />
    <h3>{values.isMember ? "Login" : "Register"}</h3>

    {showAlert && <Alert />}
    {!values.isMember && (
    <FormRow type="text" name="name" values={values.name} handleChange={handleChange} labelText="Name" />
        )}
    <FormRow type="email" name="email" values={values.email} handleChange={handleChange} labelText="Email" />
    <FormRow type="password" name="password" values={values.password} handleChange={handleChange} labelText="Password" />
    <button type="submit" className="btn btn-block" disabled={isLoading}>Submit</button>
    <p>
    {values.isMember ? "Not a member?" : "Already a member?"}
        <button type="button" onClick={toggleMember} className="member-btn">{values.isMember? 'Register':'Login'}</button>
    </p>
</form>
  </Wrapper>;
};
export default Register;
