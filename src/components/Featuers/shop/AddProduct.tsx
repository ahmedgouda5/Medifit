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
    <Button
      variant="outline"
      className="border-[#8F7D6A] text-[#8F7D6A] hover:bg-[#8F7D6A] hover:text-white transition"
    >
      Add Product
    </Button>
  </AlertDialogTrigger>

  <AlertDialogContent className="border border-[#8F7D6A] rounded-md shadow-lg">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-[#8F7D6A] text-lg font-semibold">
        Add New Product
      </AlertDialogTitle>
      <AlertDialogDescription className="text-[#8F7D6A] text-sm">
        Fill in the details below
      </AlertDialogDescription>
    </AlertDialogHeader>

    <div className="space-y-3 p-4">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-[#8F7D6A] p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#8F7D6A]"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="border border-[#8F7D6A] p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#8F7D6A]"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-[#8F7D6A] p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#8F7D6A]"
      />
      <input
        type="file"
        onChange={(e) => e.target.files && setImage(e.target.files[0])}
        className="border border-[#8F7D6A] p-2 w-full rounded cursor-pointer"
      />
    </div>

    <AlertDialogFooter>
      <AlertDialogCancel className="text-[#8F7D6A] hover:text-white hover:bg-[#8F7D6A] transition rounded px-4 py-2">
        Cancel
      </AlertDialogCancel>
      <AlertDialogAction
        onClick={handleAdd}
        className="bg-[#8F7D6A] text-white hover:bg-[#7B6A5B] transition rounded px-4 py-2"
      >
        Add Product
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    );
}
