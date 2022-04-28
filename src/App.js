import React, { useEffect, useState } from 'react';
import './components/styles.css';
import SearchPage from './components/SearchPage';
import ListPage from './components/ListPage';
import Header from './components/Header';

function App() {
  //Using useState to save the values that needs to re render after modifying data
  const [regWords, setRegWords] = useState({});
  const [regLength, setLength] = useState(0);
  const [update, setUpdate] = useState(false);
  const [whatPage, setWhatPage] = useState('Page1');

  //Using useEffect hook for updating the data after every deleted/edited/added word
  useEffect(() => {
    setRegWords(() => {
      let items = extractData();
      setUpdate(false);
      setLength(Object.keys(items).length);
      return items;
    })
  }, [update])

  //Some "Global" functions that are used for the events inside the page
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

  function addWord(word, deff) {
    localStorage.setItem(word, deff);
    setUpdate(true);
  }

  return (
    <div >
      <Header totalLength={regLength} />
      {whatPage === 'Page1' ? <SearchPage storageList={regWords} setPage={handlePage} /> : <ListPage storageList={regWords} deleteWord={deleteWord} editWord={editWord} addWord={addWord} />}
    </div>
  );
}

//The function that extract the data from local storage
function extractData() {
  let item = {};
  for (let i = 0; i < localStorage.length; ++i) {
    item[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
  }
  return item;
}

export default App;