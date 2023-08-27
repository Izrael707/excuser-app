import axios from "axios";
import { useState } from "react";

const Excuser = () => {
  const [excuse, setExcuse] = useState([]);
  const fetchExcuse = (cat) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${cat}`)
      .then((res) => setExcuse(res.data));
  };
  return (
    <div>
      <div className="header">
        <h1>Excuse Generator</h1>
      </div>
      <h2>Generate a random excuse by selecting any of the categories.</h2>
      <div className="container">
        <div>{excuse.length !== 0 && <p>{excuse[0]?.excuse}</p>}</div>
        <ul className="options">
          <li onClick={() => fetchExcuse("family")}>Family</li>
          <li onClick={() => fetchExcuse("college")}>College</li>
          <li onClick={() => fetchExcuse("party")}>Party</li>
          <li onClick={() => fetchExcuse("gaming")}>Gaming</li>
        </ul>
      </div>
      <div style={{ textAlign: "end" }}>
        <small className="footer_text">
          credit to <a href="https://github.com/Izrael707">dkingisreal</a>
        </small>
      </div>
    </div>
  );
};

export default Excuser;
