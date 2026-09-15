
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import Link from "next/link";

export default function ButtonView(){
    return(
         <div className="flex flex-grow">
          <div className=" m-auto mt-50 w-100 h-100 border-xl bg-slate-50 shadow-lg rounded-xl">
            <h1 className="text-center m-4 p-4 font-bold text-2xl text-slate-500">Product Catalog</h1>
            <div className="text-center font-bold text-black  py-15">
                <div className="p-4 m-4 mx-26 box-content  rounded-xl bg-blue-300 hover:bg-red-500 hover:text-white">
                    <Link href="/product">View Product</Link>
                </div>
            </div>
          </div>
        </div>
    );
}