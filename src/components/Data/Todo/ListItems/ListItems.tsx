import React from 'react';

export const ListItems = () => {

    const items = ['do', 'le', 'mi', 'fa', 'so', 'le']

    return (
        <div>
            {items.map((li) => (
                <li>{li}</li>
            ))}
        </div>
    )
}