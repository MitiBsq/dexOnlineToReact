import React from 'react'

export default function Header(props) {
  return (
    <div className='headerApp'>
        <h1 className="display-1">Dex Online (To-React)</h1>
        <h6 >totalWords: {props.totalLength}</h6>
    </div>
  )
}
