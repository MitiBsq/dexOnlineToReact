import React, { useState } from 'react';

export default function EditWordModel(props) {
    const [newValue, setValue] = useState('');

    //Same as adding a word(rules)
    function handleChange(e) {
        const { value } = e.target;
        if (value > 0 || value < 0 || value === '0') {
        } else {
            setValue(value);
        }
    }

    function handleClick() {
        if (newValue != 0) {
            props.editWord(props.selectedWord.toUpperCase(), newValue.trim().toUpperCase());
            props.setCheck(false);
        }
    }

    return (
        <div className='backdrop'>
            <div className='editPanel'>
                <div className='editBlock' style={{ whiteSpace: 'pre-line' }}>
                    <h1>{props.selectedWord} </h1>
                    <input type='text' value={newValue} onChange={handleChange} className='form-control' placeholder='New Definition' />
                    <button className='btn btn-primary' onClick={handleClick}>Submit new value</button>
                </div>
            </div>
        </div>
    );
}