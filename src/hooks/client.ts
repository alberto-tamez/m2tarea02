"use client"
import { useEffect, useState } from 'react';
import { getProducts, Product } from '../utils/supabaseService';

export const useProductList = () => { // Custom hook
    const [productList, setProductList] = useState<Product[]>([]);

    const refreshProductList = async () => {
        try {
            const products = await getProducts();
            const parsedProducts = JSON.parse(products) as Product[];
            setProductList(parsedProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        refreshProductList();
    }, [productList]);

    return { productList, refreshProductList };
};