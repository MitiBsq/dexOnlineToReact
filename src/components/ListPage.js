import React, { useState } from 'react';
import SearchBox from './smallComponents/SearchBox';
import AddWordBox from './smallComponents/AddWordBox';
import WordList from './smallComponents/WordList';
import EditWordModel from './smallComponents/EditWordModel';

export default function ListPage(props) {
    const [checkEdit, setCheck] = useState(false);
    const [selectedWord, setSelect] = useState(null);

    //For showing the edit box model
    function showEditPlace(theWord) {
        setCheck(true);
        setSelect(theWord);
    }

    return (
        <div style={{ margin: '0 1.2em' }}>
            <div style={{ borderBottom: '2px black solid' }}>
                <SearchBox storageList={props.storageList} theClass='listPage' />
                <AddWordBox addWord={props.addWord} />
            </div>
            {/*Loading the list just after the storage items were passed*/}
            {props.storageList && <WordList storageList={props.storageList} deleteWord={props.deleteWord} editWord={showEditPlace} />}
            {checkEdit && <EditWordModel selectedWord={selectedWord} editWord={props.editWord} setCheck={setCheck} />}
        </div>
    )
}