import React, { useState } from 'react';

export default function AddWordBox(props) {
  const [newWord, setWord] = useState('');
  const [newWordDeff, setDeff] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    //Blocking us from adding just numbers
    if (value > 0 || value < 0 || value === '0') {
    } else {
      name === 'newWord' ? setWord(value) : setDeff(value);
    }
  }
  //Same as the searchBox(If we cant search for empty words, we cant add)
  function addWord() {
    if (newWord != 0 && newWordDeff != 0) {
      props.addWord(newWord.toUpperCase(), newWordDeff.toUpperCase());
    }
  }

  return (
    <div className='input-group mb-3'>
      <button className='btn btn-outline-dark ' onClick={addWord}>Add</button>
      <input type="text" className='form-control' placeholder='Add a new Word' value={newWord} name='newWord' onChange={handleChange} />
      <input type="text" className='form-control' placeholder='What it means?' value={newWordDeff} name='newWordDeff' onChange={handleChange} />
    </div>
  );
}
