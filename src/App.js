import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/header';
import List from './components/list';
import Status from './components/status';
import Filter from './components/filter';
import { GetUSPopulationData } from './utils/request';

function App() {
  const [appInfo, setAppInfo] = useState([]);
  const [status, setStatus] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchData() {
      const populationData = await GetUSPopulationData();
      setAppInfo(populationData);
      setStatus(false);
    }
    fetchData();
  }, []);

  const filteredStates = appInfo.filter((state) =>
    state.State.toLowerCase().startsWith(filter.toLowerCase())
  );

  const sortedStates =
    filter === ''
      ? [...appInfo].sort((a, b) => b.Population - a.Population)
      : filteredStates.sort((a, b) => (a.State > b.State ? -1 : 1));

  return (
    <div className="App">
      <Header/>
      <Status loading={status} />
      <Filter value={filter} onChange={setFilter} />
      <List states={sortedStates} />
    </div>
  );
}

export default App;