import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player';

function App() {
  const [data,setData] = React.useState<Player[]>([]);
  React.useEffect(()=> {
    fetch('https://u6dt8amky7.execute-api.us-east-2.amazonaws.com/test/players')
    .then(response => response.json())
    .then(data => setData(data.Items));

  },[]);
  const items = data.map( (item, index) => <div key={index}>{item.FirstName} {item.LastName}</div>);
  return (
    <div>
      {items}
    </div>
  );
}

export default App;
