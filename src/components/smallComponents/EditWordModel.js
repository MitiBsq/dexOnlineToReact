import React,{useState} from 'react';

export default function EditWordModel(props) {
    const [newValue, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleClick() {
        props.editWord(props.selectedWord.toUpperCase(), newValue.toUpperCase());
        props.setCheck(null)
    }

  return (
    <div className='backdrop'>
        <div className='editPanel'>
            <div className='editBlock' style={{whiteSpace:'pre-line'}}>
                <h1>{props.selectedWord} </h1>
                <input type='text' value={newValue} onChange={handleChange} className='form-control' placeholder='New Definition'/>
                <button className='btn btn-primary' onClick={handleClick}>Submit new value</button>
            </div>
        </div>
    </div>
  )
}