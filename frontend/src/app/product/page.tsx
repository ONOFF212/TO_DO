import Image from "next/image";

import Navbar from "@/components/navbar";
import {ProductCardlist} from "@/hooks/productgrid";

export default function Product() {
  return (
    
    <div>
      <Navbar/>
      <main>
        <div>
          <ProductCardlist />
        </div>
      </main>
    </div>
  );
};