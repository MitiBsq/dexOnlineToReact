import React, { useEffect, useState } from 'react';
import './components/styles.css';
import { extractData } from './components/data';

import SearchPage from './components/SearchPage';
import ListPage from './components/ListPage';
import Header from './components/Header';

/* localStorage.clear()  */
 localStorage.setItem('CUVANT','REZULTAT');
localStorage.setItem('CUVANT1','REZULTAT1');
localStorage.setItem('CUVANT2','REZULTAT2');
localStorage.setItem('CUVANT3','REZULTAT3');    

function App() {
  const [regMsg, setRegMsg] = useState({});
  const [regLength, setLength] = useState(0);
  const [update,setUpdate]=useState(false)
  const [whatPage, setWhatPage] = useState('Page1');

  useEffect(() => {
    setRegMsg(() => {
      let items=extractData();
      setUpdate(false);
      setLength(Object.keys(items).length);
      return items;
    })
  }, [update])

  function handlePage(whatPage) {
    setWhatPage(whatPage);
  }

  function deleteWord(keyPassed) {
    localStorage.removeItem(keyPassed);
    setUpdate(true);
  }

  function editWord(keyPassed, newValue) {
    localStorage.setItem(keyPassed, newValue);
    setUpdate(true);
  }

  return (
    <div >
      <Header totalLength={regLength} />
      {whatPage === 'Page1' ? <SearchPage storageList={regMsg} setPage={handlePage} /> : <ListPage storageList={regMsg} deleteWord={deleteWord} editWord={editWord} />}
    </div>
  );
}

export default App;