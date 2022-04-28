import React, { useEffect, useState } from 'react';

export default function WordList(props) {
    const [itemList, setList] = useState([]);

    //Sorting the arrived data in arrays is State
    useEffect(() => {
        let list = [];
        for (let i = 0; i < Object.keys(props.storageList).length; ++i) {
            let name = Object.keys(props.storageList)[i][0] + Object.keys(props.storageList)[i].substring(1).toLowerCase();
            let def = props.storageList[Object.keys(props.storageList)[i]][0] + props.storageList[Object.keys(props.storageList)[i]].substring(1).toLowerCase();
            list.push([name, def]);
        }
        setList(list);
    }, [props.storageList]);

    const style = { borderBottom: "1px black solid", display: 'flex', justifyContent: 'space-between', fontSize: "1.2em", fontWeight: "bold", alignItems: "center" };

    //Using the constantly updated state feature to create list element items with the sorted data 
    const list = itemList.map((item) => {
        return <li
            style={style}
            className="list-group-item"
            key={item[0]}
        >{item[0]} = {item[1]}
            <div style={{ alignSelf: 'flex-end', display: 'flex', gap: '1.2em', }}>
                <button className='btn btn-outline-dark' onClick={editWord} name={item[0]}>Edit</button>
                <button onClick={deleteWord} className='btn btn-outline-dark' name={item[0]}>Delete</button>
            </div>
        </li >
    });

    function deleteWord(event) {
        props.deleteWord(event.target.name.toUpperCase());
    };

    function editWord(event) {
        props.editWord(event.target.name);
    };

    return (
        <div >
            <ul className='list-group' style={{ border: '2px black solid', marginTop: '1.2em' }} >
                {list}
            </ul>
        </div>
    );
}