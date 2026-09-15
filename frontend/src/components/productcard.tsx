
"use client"
import { useState , useEffect } from 'react';
import ButtonView from "./button";

export  function ProductCardlist(){
    interface productdetails {
        pid : number,
        imgUrl:string,
        Name : string
    }

   const [productsList, setProductList] = useState<productdetails[]>([]);

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
        }
        fetchData();
    }, []);
    return(
        <div>
            <div className="container mx-auto p-6">
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {productsList.map((product) => (
                            <div key={product.pid} className="overflow-hidden rounded-lg border border-slate-50 bg-white shadow-md">
                                <img src={`http://localhost:4000/img/${product.imgUrl}`} alt={product.imgUrl} className='h-50 w-full p-4 object-contain' />
                                <h3 className='mb-2  px-3 font-semibold text-gray-800'>{product.Name}</h3>
                                
                                <div className='mx-auto mb-4 w-40 rounded-full bg-blue-500 px-4 py-2 text-white text-center items-center justify-center hover:bg-green-400 hover:text-black hover:font-bold'>
                                    <button type='button'>View Details</button>
                                </div>
                            </div>
                        ))}
                    </ul>
            </div>
        </div>
    );
}

export function Singleproductcard(){
    return(
        <div>

        </div>
    );
}