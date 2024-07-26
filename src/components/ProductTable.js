import React, { useState } from 'react';
import ProductRow from './ProductRow';

const ProductTable = () => {
    const [rows, setRows] = useState([{ product: '', quantity: '' }]);
    const [order, setOrder] = useState([]);
    const [error, setError] = useState('');

    const handleProductChange = (index, product) => {
        const newRows = [...rows];
        newRows[index].product = product;
        setRows(newRows);
        setError('');
    };

    const handleQuantityChange = (index, quantity) => {
        const newRows = [...rows];
        newRows[index].quantity = quantity;
        setRows(newRows);
        setError('');
    };

    const handleDeleteRow = (index) => {
        const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
        if (newRows.length === 0) {
            setRows([{ product: '', quantity: '' }]);
        } else {
            setRows(newRows);
        }
    };

    const handleAddRow = () => {
        const lastRow = rows[rows.length - 1];
        if (lastRow.product && lastRow.quantity) {
            if (rows.length < 8) {
                setRows([...rows, { product: '', quantity: '' }]);
                setError('');
            }
        } else {
            setError('Please select both product and quantity before adding a new row.');
        }
    };

    const handleShowOrder = () => {
        const filteredRows = rows.filter(row => row.product !== '' && row.quantity !== '');
        if (filteredRows.length === rows.length || filteredRows.length === 0) {
            setOrder(filteredRows);
            setError('');
        } else {
            setError('Please fill out all rows or delete incomplete rows before showing the order.');
        }
    };

    const handleReadOrder = () => {
        const orderText = order.map(row => `${row.product}: ${row.quantity}`).join(', ');
        fetch(`https://api.voicerss.org/?key=b043da7623c143d68a26ba5fb8e54cb8&hl=en-us&src=${orderText}`)
            .then(response => response.blob())
            .then(blob => {
                const audio = new Audio(URL.createObjectURL(blob));
                audio.play();
            });
    };

    return (
        <div className="container mx-auto p-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {rows.map((row, index) => (
                        <ProductRow
                            key={index}
                            index={index}
                            product={row.product}
                            quantity={row.quantity}
                            handleProductChange={handleProductChange}
                            handleQuantityChange={handleQuantityChange}
                            handleDeleteRow={handleDeleteRow}
                        />
                    ))}
                </tbody>
            </table>
            <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleAddRow}
            >
                Add Product
            </button>
            <button
                className="mt-4 ml-2 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleShowOrder}
            >
                Show Order
            </button>
            <button
                className="mt-4 ml-2 bg-green-500 text-white py-2 px-4 rounded"
                onClick={handleReadOrder}
            >
                What is my Order?
            </button>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {order.length > 0 && (
                <table className="min-w-full divide-y divide-gray-200 mt-4">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {order.map((row, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{row.product}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ProductTable;
