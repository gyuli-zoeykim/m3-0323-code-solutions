import { useState } from 'react';
import './ValidatedInput.css';

export default function ValidatedInput() {
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [icon, setIcon] = useState("");

  function handlePassword(e) {
    e.preventDefault();

    let checkPw = e.target.value;
    setPassword(checkPw)

    if (checkPw === "") {
      setErrMessage("Your password is required.")
      setIcon("fa-solid fa-xmark")
    } else if (checkPw.length < 8) {
      setErrMessage("Your password is too short.")
      setIcon("fa-solid fa-xmark")
    } else if (!checkPw.match(/[A-Z]/g)) {
      setErrMessage("Your password should contain uppercaseletters.")
      setIcon("fa-solid fa-xmark")
    } else if (!checkPw.match(/\d/g)) {
      setErrMessage("Your password should contain numbers.")
      setIcon("fa-solid fa-xmark")
    } else if (!checkPw.match(/[!@#$%^&*()]/d)) {
      setErrMessage("Your password should contain special characters like (!, @, #, $, %, ^, &, *, (, or ))")
      setIcon("fa-solid fa-xmark")
    }else {
      setErrMessage("")
      setIcon("fa-solid fa-check")
    }
    console.log(`password: ${password}`);
  }

  return (
    <form>
      <label htmlFor="pw">Password</label>
      <div className ="pwBox">
        <input id="pw" type="password" value= {password} onChange= {handlePassword} />
        <i className={icon} style={icon === "fa-solid fa-xmark" ? {color: "red"}: {color:"green"}}></i>
      </div>
      {errMessage === "" ? errMessage : <p>{errMessage}</p>}
    </form>
  );
}
