
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
   const [singleproductsList, setSingleProductList] = useState<productdetails>();

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


    if(singleproductsList) {
        return(
        <div>
            <div className='grid grid-cols-1 p-4' >
                
                <div className="m-auto">
                    <button 
                    type="button" 
                    className="mb-4 rounded-xl bg-gray-500 text-white p-2"
                    onClick={() => setSingleProductList(null)}
                >close</button>
                     <div key={singleproductsList.pid} className="overflow-hidden rounded-lg border border-slate-50 bg-white shadow-md transition-all duration-300 hover:scale-105">
                            <img src={`http://localhost:4000/img/${singleproductsList.imgUrl}`} alt={singleproductsList.imgUrl} className='h-50 w-full p-4 object-contain' />
                            <h3 className='mb-2  px-3 font-semibold text-gray-800'>{singleproductsList.Name}</h3>
                             <div className='text-sm font-bold m-4'>
                                <p> {singleproductsList.description}</p>
                                <p className='text-green-500'>Price: {singleproductsList.price}</p>
                                <p className='text-red-600'>Stock: {singleproductsList.stock}</p>
                            </div>
                    </div>
                </div>
            </div>

        </div>
        );
    }

    return(
        <div>
            <div className="container mx-auto p-6 ">
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
                        {productsList.map((product) => (
                            <div key={product.pid} className="overflow-hidden rounded-lg border border-slate-50 bg-white shadow-md transition-all duration-300 hover:scale-105">
                                <img src={`http://localhost:4000/img/${product.imgUrl}`} alt={product.imgUrl} className='h-50 w-full p-4 object-contain' />
                                <h3 className='mb-2  px-3 font-semibold text-gray-800'>{product.Name}</h3>
                                <div className='text-sm font-bold m-4'>
                                    <p className='text-red-600'>Stock: {product.stock}</p>
                                    <button  type='button'
                                    className='box-content border-1 rounded-xl border-slate-40 
                                                text-white bg-black  mx-auto  p-1 w-full'
                                                onClick= {() => setSingleProductList(product)}
                                    >
                                        view Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </ul>
            </div>
        </div>
    );
}

//<p> {product.description}</p>
//<p className='text-green-500'>Price: {product.price}</p>