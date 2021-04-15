import List from './components/List/List';
import Details from './components/Details/Details';
import './App.css';
import { useState } from 'react';

function App() {

  const [activePerson, setActivePerson] = useState(null);

  const openDetails = (info) => {
    setActivePerson(info);
  }

  return (
    <div className="App">
      <List onDetails={openDetails}/>
      <Details info={activePerson} />
    </div>
  );
}

export default App;