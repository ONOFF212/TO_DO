import Image from "next/image";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ButtonView from "@/components/button";


export default function Home() {
  return (
    
    <div>
      <Header />
      <Navbar />
      <main>
        <div className="flex flex-col md:flex-row gap-4 p-4">
            <ButtonView />
        </div>
      </main>
      <div className="mt-32">
        <Footer/>
      </div>
    </div>
  );
}
