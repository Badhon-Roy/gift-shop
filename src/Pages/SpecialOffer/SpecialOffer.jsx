import { useLoaderData } from "react-router-dom";
import SpecialProduct from "./SpecialProduct";
import { useState } from "react";


const SpecialOffer = () => {
    const allProducts = useLoaderData()
    const [products, setProducts] = useState(allProducts);

    const handleSortByLowPrice = () => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => parseFloat(a.current_price) - parseFloat(b.current_price));
        setProducts(sortedProducts);
    };
    const handleSortByHighPrice = () => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => parseFloat(b.current_price) - parseFloat(a.current_price));
        setProducts(sortedProducts);
    };

    return (
        <div className="bg-[#fdf6f6]">
            <div className="max-w-[1400px] mx-auto lg:px-16 md:px-8 px-4 lg:py-32 md:py-32 py-8">
                <div className="bg-white lg:p-16 md:p-8 p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="md:text-3xl text-2xl font-bold md:text-left text-center mb-4">Special Offer</h1>
                        <div>
                        <button className="btn btn-sm btn-secondary focus:btn-success" onClick={handleSortByLowPrice} >sort by low price</button><br /><button className="btn btn-sm btn-primary focus:btn-warning  my-2" onClick={handleSortByHighPrice} >sort by High price</button>

                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
                        {products.map((product) => (
                            <SpecialProduct key={product.id} product={product}></SpecialProduct>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;