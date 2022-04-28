import React, { useState } from 'react';

export default function SearchBox(props) {
    const [searchBox, setSearchBox] = useState('');
    const [wordFound, setWordFound] = useState([]);

    //Preventing the user to type only numbers
    function handleChange(e) {
        const { value } = e.target;
        if (value > 0 || value < 0 || value === '0') {
        } else {
            setSearchBox(value);
        }
    }

    function searchValue(e) {
        //Eliminating the default form submit
        e.preventDefault();
        //If there is no word inserted in the input or just pressed 'space'
        if (searchBox == 0) {
            setSearchBox('');
            setWordFound(false);
        } else {
            let searchedWord = searchBox.trim().toUpperCase();
            //Verifying if the word is found in the "library"
            if (props.storageList[searchedWord]) {
                setWordFound([searchedWord[0] + searchedWord.substring(1).toLowerCase(), props.storageList[searchedWord][0] + props.storageList[searchedWord].substring(1).toLowerCase()]);
            } else {
                //If the searched word was not found 
                setWordFound([]);
                //The website will send you to the next Interface where you have the whole list of words
                if (props.theClass === 'searchPage') {
                    props.setPage('Page2');
                }
            }
        }
    }

    //Just some styling for the founded word
    const wordFoundStyle = wordFound.length > 0 ? { display: 'block' } : { display: 'none' }
    const wordFoundMsg = `${wordFound[0]} = ${wordFound[1]}`

    return (
        <form className={props.theClass}>
            {props.theClass === 'searchPage' && <label className='searchText'>Search for a word</label>}
            <input
                type='text'
                placeholder={wordFound === false ? 'Insert a Word Please!' : 'Search a word'}
                name='searchBox'
                value={searchBox}
                onChange={handleChange}
                className={props.theClass === 'searchPage' ? 'form-control-lg' : 'form-control formWidth'}
            />
            <button
                className={props.theClass === 'searchPage' ? 'btn btn-primary btn-lg' : 'btn btn-primary'}
                onClick={searchValue}
            >Search
            </button>
            <div style={wordFoundStyle}>{wordFoundMsg}</div>
        </form>
    );
}