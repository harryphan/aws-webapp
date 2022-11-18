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
  const items = data.map( (item, index) =>
  <tr key={index}>
    <td>{item.Name}</td>
    <td>{item.Number}</td>
    <td>{item.PassingCompletions}</td>
    <td>{item.PassingAttempts}</td>
    <td>{item.PassingCompletionPercentage}</td>
    <td>{item.PassingInterceptions}</td>
    </tr>);
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Passing Completions</th>
          <th>Passing Attempts</th>
          <th>Passing Completion %</th>
          <th>Passing Interceptions</th>
        </tr>
      {items}
      </table>
    </div>
  );
}

export default App;
