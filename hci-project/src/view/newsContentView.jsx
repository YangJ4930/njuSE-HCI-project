import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';

let content = ["a", "b", "c", "d"]

function NewsContentView() {
    let [searchParams, setSearchParams] = useSearchParams();
    let documentId = searchParams.get('document')
    return (
        <React.Fragment>
            <h1>{content[documentId] }</h1>
        </React.Fragment>
    );
}

export default NewsContentView;