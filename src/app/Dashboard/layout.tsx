import { AddProductDialog } from "@/components/Featuers/shop/AddProduct"


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <nav >
                <ul className="flex justify-end gap-5 pb-3">
                    <li><AddProductDialog />  </li>
                </ul>
            </nav>
            <main className="mt-10">
                {children}
            </main>
        </div>
    )
}

export default layout