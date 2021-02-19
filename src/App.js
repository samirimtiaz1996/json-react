import './App.css';
import information from './data.json';
import {useState,useEffect} from 'react';



function App() {

  const [nameBtn,setNameBtn]=useState("show");
  const [state,setState]=useState(0);
  const [datas, setDatas]=useState([]);
  useEffect(()=>{
    if(state==1){
      setDatas(information);
      setNameBtn("hide");
    }
    else {
      setDatas([])
      setNameBtn("show");
    }
  },[state])

  return (
    <div>
      <button onClick={()=>{setState(!state)}}>{nameBtn}</button>
      <div style={datas[0]}>
        {datas.map(data =>(
            <span>
            <img style={data} src={data.src}/>
            <div style={data}>
              {data.content}
            </div>
          </span>
        ))}
      </div>

    </div>

  );
}

export default App;
