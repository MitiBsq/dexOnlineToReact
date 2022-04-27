import React from 'react'

export default function AddWordBox() {
  return (
    <div className='input-group mb-3'>
        <button className='btn btn-outline-dark '>Add</button>
        <input type="text" className='form-control' placeholder='Add a new Word'/>
        <input type="text" className='form-control' placeholder='What it means?'/>
    </div>
  )
}
