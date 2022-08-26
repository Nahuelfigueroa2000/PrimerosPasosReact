import './App.css';
import React ,{useState}from 'react';
import json from "./data.json"
import Cards from './components/cards';

function App() {
  const [jsonData, setJsonData] = useState(json);

  return (
    <div className="App">
      <header className="App-header">
        {
          jsonData.map(function(value){ 
            return (<Cards title={value.title} id={value.id}/>);
          })
        }
       
      </header>
    </div>
  );
}

 

export default App;
