import React from 'react';


const TableHeader = () => { 
    return (
        <thead >
            <tr >
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Delete</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td><button onClick={()=>props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <div className='container'>
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
            </div>
        );
}

export default Table;