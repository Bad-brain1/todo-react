import React from 'react';

function List({list, ...props}) {

    return (
        <div>
            <p>{list.text}; <button onClick={props.deleteList}>X</button></p>
        </div>
    );
}

export default List;