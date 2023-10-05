
import PropTypes from 'prop-types'



const SpecialProduct = ({ product}) => {
    const { title, name, image, price, current_price } = product;
    return (
        <div>
            <div>
                <div className="relative">
                    <img className="w-full" src={image} alt="" />
                    <span className="absolute md:top-6 top-4 left-4 md:left-6 bg-white px-2 shadow-lg text-[14px] py-1 rounded-2xl">sale!</span>
                </div>
                <p className="text-[#a7a6b3] text-[12px] mt-3">{name}</p>
                <h3 className="font-bold my-2">{title}</h3>
                <p className="text-[14px]"><del className="text-[#a7a6b3] mr-3">${price}</del> <span className="font-semibold">${current_price}</span></p>
            </div>
        </div>
    );
};
SpecialProduct.propTypes = {
    product: PropTypes.object
}

export default SpecialProduct;