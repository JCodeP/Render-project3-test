import React, { useEffect, useState } from 'react';

import './ManagerHome.css';
import './CreateOrderStyle.css'



const sampleData = [
    { id: 1, name: 'Alice', age: 25, occupation: 'Engineer' },
    { id: 2, name: 'Bob', age: 30, occupation: 'Designer' },
    { id: 3, name: 'Charlie', age: 35, occupation: 'Teacher' },
    { id: 4, name: 'David', age: 40, occupation: 'Manager' },
    { id: 5, name: 'Eve', age: 22, occupation: 'Intern' },
    { id: 6, name: 'Frank', age: 28, occupation: 'Developer' },
    { id: 7, name: 'Grace', age: 32, occupation: 'Analyst' },
    { id: 8, name: 'Hannah', age: 29, occupation: 'Marketing' },
    { id: 9, name: 'Ivy', age: 31, occupation: 'Sales' },
    { id: 10, name: 'Jack', age: 26, occupation: 'Support' },
];

const [data, setData] = useState([]);

useEffect(() => {
    // Set to sampleData to see the table with data
    setData(sampleData); // You can set it to [] to test with no data
}, []);



function CreateOrderPage() {
    return (
        <div className="CreateOrderContainer">
            <h1 className="manager-page-header">Current Inventory Order</h1>
            <div className="body-container">
                <div className="tableContainer">
                    <div className="table-header">
                        <div className="table-cell">Item</div>
                        <div className="table-cell">Quantity</div>
                        <div className="table-cell">Cost</div>
                    </div>
                    <div className="table-body">
                        {data.length === 0 ? (
                            <div className="table-row">
                            <div className="table-cell" colSpan="3">No data available</div>
                            </div>
                        ) : (
                            data.map((row) => (
                                <div className="table-row" key={row.id}>
                                <div className="table-cell">{row.id}</div>
                                <div className="table-cell">{row.name}</div>
                                <div className="table-cell">{row.email}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <p> Click on row to delete or adjust quantity</p>
            </div>
            <button className="submit">Submit</button>

        </div>

    );
}


export default CreateOrderPage;