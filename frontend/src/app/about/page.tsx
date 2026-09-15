import Image from "next/image";

import Navbar from "@/components/navbar";


export default function About() {
  return (
    
    <div>
      <Navbar/>
      <main>
        <div className="flex flex-grow">
          <div className=" m-auto mt-50 w-100 h-100 border-xl bg-slate-0 shadow-md rounded-xl">
            <h1 className="text-center m-4 p-4 font-bold text-2xl text-red-500">Full-Stack Development</h1>
            <div className="text-center text-lg font-bold py-15">
                <p>Produt Catalog [Task:1]</p>
                <p className="text-lg  text-green-500">Completed....</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
;