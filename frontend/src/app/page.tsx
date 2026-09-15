import Image from "next/image";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {ProductCardlist} from "@/components/productcard";

export default function Home() {
  return (
    
    <div className="flex flex-min-h flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow p-4">
        <div>
          <ProductCardlist/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
