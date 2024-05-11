'use client';

import { Button } from "./ui/button";
import { deleteProduct } from "../utils/supabaseService";

interface DeleteButtonProps {
    id: string;
}

export function DeleteButton({ id }: DeleteButtonProps) {
    return (
        <Button variant="destructive" onClick={() => deleteProduct(id)}>
            Borrar
        </Button>
    );
}
