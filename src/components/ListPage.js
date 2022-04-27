import React,{useEffect, useState} from 'react';
import SearchBox from './smallComponents/SearchBox';
import AddWordBox from './smallComponents/AddWordBox';
import WordList from './smallComponents/WordList';
import EditWordModel from './smallComponents/EditWordModel';

export default function ListPage(props) {
    const [storage,setStorage]=useState(null);
    const [checkEdit,setCheck]=useState(null);
    const [selectedWord, setSelect] = useState(null);

    useEffect(() => {
        setStorage(props.storageList);
    },[checkEdit])

    function showEditPlace(theWord) {
        setCheck(true);
        setSelect(theWord);
        
    }

    return (
        <div style={{ margin: '0 1.2em' }}>
            <div style={{borderBottom:'2px black solid'}}>
                <SearchBox storageList={props.storageList} theClass='listPage' />
                <AddWordBox />
            </div>
            <WordList storageList={storage} deleteWord={props.deleteWord} editWord={showEditPlace}/>
            {checkEdit && <EditWordModel selectedWord={selectedWord} editWord={props.editWord} setCheck={setCheck}/> }
        </div>
    )
}
