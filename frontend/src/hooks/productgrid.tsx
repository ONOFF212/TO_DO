
"use client"
import { useState , useEffect } from 'react';
import ButtonView from "../components/button";
import { EmptystateImage } from '@/components/emptyState';

export  function ProductCardlist(){
    interface productdetails {
        pid : number,
        imgUrl:string,
        Name : string,
        stock: string,
        price:string,
        description:string
    }

   const [productsList, setProductList] = useState<productdetails[]>([]);
   const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('http://localhost:4000/products');
            if(!response.ok) {
                console.log("Http Error! Status: ", response.status);
            }
            console.log("Data Fetch Successfull");
            const result = await response.json();
            console.log(result);
            setProductList(result);
            setisLoading(false);
        }
        fetchData();
    }, []);

    if(isLoading){
        return <EmptystateImage />
    }
    return(
        <div>
            <div className="container mx-auto p-6">
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {productsList.map((product) => (
                            <div key={product.pid} className="overflow-hidden rounded-lg border border-slate-50 bg-white shadow-md">
                                <img src={`http://localhost:4000/img/${product.imgUrl}`} alt={product.imgUrl} className='h-50 w-full p-4 object-contain' />
                                <h3 className='mb-2  px-3 font-semibold text-gray-800'>{product.Name}</h3>
                                <div className='text-sm font-bold m-4'>
                                    <p> {product.description}</p>
                                    <p className='text-green-500'>Price: {product.price}</p>
                                    <p className='text-red-600'>Stock: {product.stock}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
            </div>
        </div>
    );
}