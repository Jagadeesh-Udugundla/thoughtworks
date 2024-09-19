import { useState } from "react";
import "./styles.css";

export default function App() {
  let [title, setTitle] = useState("");
  let [discrption, setDiscription] = useState("");
  let [duedate, setDuedate] = useState("");

  // onchange = (tit) => {
  //   setTitle(title);
  // };
  let ontitle = () => {
    setTitle(title);
  };
  let ondiscription = () => {
    setDiscription(title);
  };
  let onduedate = () => {
    setDuedate(title);
  };
  const submit = () => {
    console.log("Form Submitted Successfully");
    setTitle("");
  };
  return (
    <div className="App">
      <div>
        <form className="mainc" onClick={submit}>
          <input id="title" required onChange={ontitle} placeholder="title" />
          <br />
          <input
            id="discription"
            onChange={ondiscription}
            required
            placeholder="discription"
          />
          <br />
          <input
            id="duedate"
            onChange={onduedate}
            required
            placeholder="duedate"
          />
        </form>
        <button onClick={submit}>SUBMIT</button>
      </div>
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
