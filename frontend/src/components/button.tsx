
import Link from "next/link";

export default function ButtonView(){
    return(
        <div className="border  bg-black mx-[40px] rounded-full p-2 text-center w-30">
            <button type="button"><Link href="/product">Product</Link>View Detail</button>
        </div>
    );
}