import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/mongodb";
import product from "@/models/product";
import { NextResponse } from "next/server";
export const config = {
  api: {
    bodyParser: false, // علشان نستقبل ملفات
  },
};
export async function GET() {
  await connectDB();
  const products = await product.find();
  console.log("connect db");
  return NextResponse.json(products);
}


export async function POST(request: Request) {
  await connectDB();

  const data = await request.formData();
  const file = data.get("image") as File; // لازم الاسم "image"

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageResult: any = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "products" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  // إنشاء المنتج في MongoDB
  const newProduct = await product.create({
    name: data.get("name"),
    price: Number(data.get("price")),
    description: data.get("description"),
    userId: data.get("userId"),
    image: imageResult.secure_url, 
  });

  return NextResponse.json(newProduct);
}