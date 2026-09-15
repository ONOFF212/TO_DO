
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between h-12 bg-slate-400 text-white px-4">
            <div className="font-bold">
                <Link href="/">Home</Link>
            </div>
            <div className="flex gap-4">
                <Link href="/product">Product</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
        </div>
    );
}