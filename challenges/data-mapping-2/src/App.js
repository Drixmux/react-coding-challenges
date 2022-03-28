import "./App.css";

import { TODOS_OLD, TODOS_NEW } from "./shared/data";

function App() {
  const records = JSON.parse(JSON.stringify(TODOS_OLD));

  return (
    <div className="App">
      <header className="App-header">
        <h2> ToDo list </h2>
        <table className="App-table">
          <thead>
            <th>Description</th>
            <th>Status</th>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.description}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
