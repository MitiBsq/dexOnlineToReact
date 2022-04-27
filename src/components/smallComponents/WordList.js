import React, { useEffect, useState } from 'react'

export default function WordList(props) {
    const [storage, setStorage]=useState({});
    const [itemList, setList] = useState([]);
    const [updateList, setUpdate] = useState(false);

    useEffect(()=>{
        setStorage(props.storageList);
    },[props.storageList]);

    const style = { borderBottom: "1px black solid", display: 'flex', justifyContent: 'space-between', fontSize: "1.2em", fontWeight: "bold", alignItems: "center" }

    useEffect(() => {
        let list = [];
        for (let i = 0; i < Object.keys(storage).length; ++i) {
            let name = Object.keys(storage)[i][0] + Object.keys(storage)[i].substring(1).toLowerCase();
            let def = storage[Object.keys(storage)[i]][0] + storage[Object.keys(storage)[i]].substring(1).toLowerCase();
            list.push([name, def]);
        }
        setList(list);
        setUpdate(false);
    }, [storage])

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
    })

    function deleteWord(event) {
        props.deleteWord(event.target.name.toUpperCase());
        setUpdate(true);
    }

    function editWord(event) {
        props.editWord(event.target.name);
    }

return (
    <div >
          <ul className='list-group' style={{ border: '2px black solid', marginTop: '1.2em' }} >
                {list}
            </ul> 
    </div>
)
}