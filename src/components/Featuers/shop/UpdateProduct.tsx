import Button from "@/components/shared/Button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ProductApi } from "@/lib/data";
import { BookCopy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface UpdateProductDialogProps {
  product: ProductApi;
  onUpdate: (updated: ProductApi) => void;
}

export function UpdateProductDialog({ product, onUpdate }: UpdateProductDialogProps) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.desc);

  const handleUpdate = async () => {
    const res = await fetch("/api/products", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product._id, name, price, description }),
    });

    if (res.ok) {
      const updatedProduct = await res.json();
      onUpdate(updatedProduct); // تحديث الـ UI مباشرة
    } else {
      toast.error("Failed to update product");
    }
  };

  return (
   <AlertDialog>
  <AlertDialogTrigger asChild>
   <Button text="Update" icon={<BookCopy size={16}/>}/>
  </AlertDialogTrigger>

  <AlertDialogContent className="border border-[#8F7D6A] rounded-xl p-6 bg-white shadow-lg max-w-md mx-auto">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-[#503217] text-lg font-semibold">
        Update Product
      </AlertDialogTitle>
      <AlertDialogDescription className="text-[#8F7D6A] text-sm mb-4">
        Modify the details below and click <span className="font-semibold text-[#503217]">Update</span> to save changes.
      </AlertDialogDescription>
    </AlertDialogHeader>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#503217] mb-1">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-[#8F7D6A] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#8F7D6A] transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#503217] mb-1">
          Price
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border border-[#8F7D6A] rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#8F7D6A] transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#503217] mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-[#8F7D6A] rounded-md p-2 w-full min-h-[80px] focus:outline-none focus:ring-2 focus:ring-[#8F7D6A] transition"
        />
      </div>
    </div>

    <AlertDialogFooter className="mt-6 flex justify-end gap-3">
      <AlertDialogCancel className="text-[#8F7D6A] border border-[#8F7D6A] hover:bg-[#8F7D6A] hover:text-white rounded-md px-4 py-2 transition">
        Cancel
      </AlertDialogCancel>
      <AlertDialogAction
        onClick={handleUpdate}
        className="bg-[#8F7D6A] text-white hover:bg-[#7B6A5B] rounded-md px-4 py-2 transition"
      >
        Update
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  );
}
