import React, { useState } from 'react';

// material ui 
import TextField from '@material-ui/core/TextField';

const Search = () => {
    const [song, setSong] = useState('');

    const handleChange = (e) => {
        setSong(e.target.value);
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={song} onChange={handleChange}/>
            </form>
            <p>{song}</p>
        </>
    )
}

export default Search
