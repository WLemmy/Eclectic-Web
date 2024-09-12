import React from 'react';

const products = [
    {
        id: 1,
        name: 'E-commerce Site',
        description: 'A comprehensive platform for buying and selling goods online.',
        price: 'Starting at $999',
    },
    {
        id: 2,
        name: 'Online Pharmacy',
        description: 'A secure and user-friendly platform for purchasing medications and health products.',
        price: 'Starting at $1299',
    },
    {
        id: 3,
        name: 'Online BookStore',
        description: 'An intuitive platform for browsing, purchasing, and reading books online.',
        price: 'Starting at $1499',
    },
];

const Products = () => {
    return (
        <div className='bg-gray-100 py-8'>
            <div className='container mx-auto px-4'>
                <h1 className='text-3xl font-bold text-center mb-6'>Our Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {products.map(product => (
                        <div
                            key={product.id}
                            className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center'
                        >
                            <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
                            <p className='text-base font-light mb-4'>{product.description}</p>
                            <p className='text-lg font-semibold'>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
