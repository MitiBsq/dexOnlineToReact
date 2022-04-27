import React from 'react'
import SearchBox from './smallComponents/SearchBox';

export default function SearchPage(props) {
    return (
        <div>
            <SearchBox storageList={props.storageList} setPage={props.setPage} theClass='searchPage'/>
        </div>
    )
}
