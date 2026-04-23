// import React from 'react';

const items = [
    { id: 1, name: 'Article 1' },
    { id: 2, name: 'Article 2' },
    { id: 3, name: 'Article 3' },
];



const List = () => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

// function List({ items }) {
//   return (

//   );


export default List;