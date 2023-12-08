import React, { Component } from 'react';
import { useSearchParams } from "react-router-dom";

const SearchView = () =>{
    let [searchParams, setSearchParams] = useSearchParams()
    return(
        <>
            <h1>{searchParams.get('content')}</h1>

        </>
    )
}

export default SearchView;
