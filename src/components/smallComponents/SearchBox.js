import React, { useState } from 'react'

export default function SearchBox(props) {
    const [searchBox, setSearchBox] = useState('');
    const [wordFound, setWordFound] = useState([]);
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
            setWordFound(false)
        } else {
            if (props.storageList[searchBox.toUpperCase()]) {
                setWordFound([searchBox[0].toUpperCase() + searchBox.substring(1).toLowerCase(), props.storageList[searchBox.toUpperCase()][0] + props.storageList[searchBox.toUpperCase()].substring(1).toLowerCase()])
            } else {
                //If the searched word was not found 
                setWordFound([]);
                props.setPage('Page2');
            }
        }
    }

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
            {props.theClass === 'searchPage' && <div style={wordFound.length > 0 ? { display: 'block' } : { display: 'none' }}>{wordFound[0]} = {wordFound[1]}</div>}
        </form>
    )
}


//Sa fac sa pot da search din urm pagina si sa imi dea highlight la cuvant in lista
//Sa fac sa adaug cuvant nou in lista
//Sa mai curat la functii
