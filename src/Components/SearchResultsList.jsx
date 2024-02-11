import React from 'react'
import './SearchResultsList.css'
import { SearchResult } from './SearchResult'
export const SearchResults = ({ results }) => {
    return (
        <div className='results-list'>
            {
                results.map((e, id) => {
                    return <SearchResult key={id} result={e} />
                })
            }

        </div>
    )
}
