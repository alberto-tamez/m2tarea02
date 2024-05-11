"use client"
import React, { useEffect, useState } from 'react';
import { useProductList } from '@/hooks/client';
import { ProductCard } from '@/components/ProductCard';



const ProductCarrousel: React.FC = () => {
    const imageUrl = "https://placedog.net/500";
    const { productList } = useProductList();

    if (!productList || productList.length === 0) {
        return (
            <div className="flex justify-center items-center product-list-container">
                <p>
                    Agrega un nuevo Producto!
                </p>
            </div>
        )
    }
    
    return (
        <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
            {productList.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id!}
                    name={product.name}
                    description={product.description}
                    imageUrl={imageUrl}
                    precio={product.price}
                />
            ))}
        </div>
    );
};

export default ProductCarrousel;