
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between h-10 bg-slate-900 text-white px-4">
            <div className="font-bold">
                <Link href="/">Home</Link>
            </div>
            <div className="flex gap-4 font-bold">
                <Link href="/product" className="hover:bg-slate-50 rounded-full p-2 hover:text-black">Product</Link>
                <Link href="/about" className="hover:bg-slate-50 rounded-full p-2 hover:text-black">About Us</Link>
                <Link href="/contact" className="hover:bg-slate-50 rounded-full p-2 hover:text-black">Contact Us</Link>
            </div>
        </div>
    );
}

