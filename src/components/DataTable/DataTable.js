import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import { Message } from 'primereact/message';

export const gridItem = (product) => { 
    return 
};

export default function DataTable({ data, gridItem, countOfRows, messageText }) {

    // State to hold product data
    const [products, setProducts] = useState([]);

    // ProductService object with a getProducts method that returns a promise that resolves with the data prop passed in via props
    const ProductService = {
        getProducts: function () {
            return new Promise((resolve, reject) => {
                resolve(data);
            });
        }
    };

    // Use effect hook to update products state when data prop changes
    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, [data]);

    // itemTemplate function that takes a product and returns the JSX for the grid item
    const itemTemplate = (product) => {
        if (!product) return;
        return gridItem(product);
    };

    return (
        // Render a DataView component from PrimeReact with the products array as the value prop, countOfRows as the number of rows per page, and itemTemplate as the function to render each item
        <div className="card">

            <DataView value={products} paginator rows={countOfRows || 10} emptyMessage={<Message severity="error" icon={false} text={messageText || "No Data Found"} />} itemTemplate={itemTemplate} layout={'grid'} />

        </div>
    )
}
