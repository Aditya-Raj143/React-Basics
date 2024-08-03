import './App.css';
import Axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [catfact,setcatfact] = useState("");
  const [name,setname] = useState("");
  const [age,setage] = useState("");

  const fetchcatfact = () => {
    Axios.get("https://catfact.ninja/fact")
    .then((res) => {
      setcatfact(res.data.fact);
    })
  }

  const handleName = (e) => {
    setname(e.target.value);
  }

  const getAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        setage(res.data.age);
      })
  }

  useEffect(() => {
     Axios.get("https://catfact.ninja/fact")
    .then((res) => {
      setcatfact(res.data.fact);
    })
  }, [])

  return (
    <div className="App">
      <button onClick={fetchcatfact}>Generate Cat Fact</button>
      <p>{catfact}</p>
      <br></br>
      <input onChange={handleName}/>
      <button onClick={getAge} >Guess the Age</button>
      <p>{age}</p>
    </div>
  );
}

export default App;
