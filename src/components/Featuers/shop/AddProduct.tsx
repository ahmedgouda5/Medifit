"use client"
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export function AddProductDialog() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleAdd = async () => {
        if (!image) return alert("Please select an image");

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price.toString());
        formData.append("description", description);
        formData.append("userId", "user_35BrfjaPCHpNsfVpakchvXCslkb");
        formData.append("image", image);

        const res = await fetch("/api/products", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            toast.success("Product added successfully!"); // toast أخضر للنجاح
        } else {
            toast.error("faild to add product"); // toast أخضر للنجاح
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Add Product</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Add New Product</AlertDialogTitle>
                    <AlertDialogDescription>Fill in the details below</AlertDialogDescription>
                </AlertDialogHeader>
                <div className="space-y-2 p-4">
                    <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full" />
                    <input type="number" placeholder="Price" value={price} onChange={e => setPrice(Number(e.target.value))} className="border p-2 w-full" />
                    <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 w-full" />
                    <input type="file" onChange={e => e.target.files && setImage(e.target.files[0])} />
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleAdd}>Add Product</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
