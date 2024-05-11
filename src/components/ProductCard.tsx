import * as React from "react"

import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"

import { Label } from "./ui/label"

import Image from "next/image"
import { DeleteButton } from "./DeleteButton"

interface ProductCardProps {
    name: string;
    description: string;
    imageUrl?: string;
    precio: number;
    id: string;
}



export function ProductCard({ name, description, imageUrl, precio , id}: ProductCardProps) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle> {name} </CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <Image
                        src= {imageUrl || "https://placedog.net/500"}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                <div className="grid w-full items-center gap-4 mt-5">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="description">Description</Label>
                        <h3>{description}</h3>
                    </div>
                    <div>
                    <Label htmlFor="Precio">Precio</Label>
                        <h3>${precio}</h3>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <DeleteButton id={id}/>
                {/* <Button variant="destructive" onClick={() => deleteProduct(id)}>Borrar</Button> */}
            </CardFooter>
        </Card>
    )
}
