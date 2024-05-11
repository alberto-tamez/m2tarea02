"use client"
// file: app/components/NewProductForm.tsx
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { addProduct, Product } from "../utils/supabaseService"; // Import the client directly
import { useProductList } from '@/hooks/client';
import React, { useRef } from 'react';




export default function NewProductForm() {
    const { refreshProductList } = useProductList();
    const formRef = useRef(null); // Create a ref to the form

    return (
        <form ref={formRef}
            action={async (formData) => {
                const priceValue = formData.get("Precio");
                const price = typeof priceValue === 'string' ? parseFloat(priceValue) : 0;

                const productData: Product = {
                    name: formData.get("name") as string,
                    description: formData.get("description") as string,
                    price: price,
                };
                const json = JSON.stringify(productData);


                try {
                    // Call the addProduct function directly
                    await addProduct(json);
                    refreshProductList();
                    // Handle success is pending

                } catch (error) {
                    console.error("Error adding product:", error);
                    // Handle error, e.g., return an error response
                    return { error: "Failed to add product" };

                }
                refreshProductList();

                if (formRef.current) {
                    formRef.current.reset();
                }

            }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto p-4 sm:p-6"
        >
            <div className="flex flex-col space-y-4 w-full">
                <Input placeholder="Nombre del Producto" name="name" />
                <Input placeholder="Descripción del Producto" name="description" />
                <Input placeholder="Precio del Producto" name="Precio" />
            </div>
            <Button type="submit" className="h-10 self-end sm:self-center">
                Agregar Producto
            </Button>
        </form>
    );
}
