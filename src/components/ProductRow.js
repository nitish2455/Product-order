import React from 'react';

const ProductRow = ({ product, quantity, index, handleProductChange, handleQuantityChange, handleDeleteRow }) => {
    return (
        <tr>
            <td>
                <select
                    className="form-select mt-1 block w-full"
                    value={product}
                    onChange={(e) => handleProductChange(index, e.target.value)}
                >
                    <option value="">Choose Product</option>
                    <option value="Product 1">Product 1</option>
                    <option value="Product 2">Product 2</option>
                    <option value="Product 3">Product 3</option>
                </select>
            </td>
            <td>
                <select
                    className="form-select mt-1 block w-full"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                >
                    <option value="">Choose Quantity</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </td>
            <td>
                <button
                    className="bg-red-500 text-white py-1 px-3 rounded"
                    onClick={() => handleDeleteRow(index)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ProductRow;
