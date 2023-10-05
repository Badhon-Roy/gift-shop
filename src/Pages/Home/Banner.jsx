

const imageUrl = "https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/box-01.jpg";


const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '85vh',
        width: "100%",
    }
    return (
        <div style={bannerStyle}>
            <div className="max-w-[1400px] mx-auto lg:px-16 md:px-8 px-4">
                <div className="md:w-2/4 flex items-center h-[80vh] ">
                    <div className="md:text-left text-center">
                        <h1 className="md:text-6xl text-3xl font-bold md:tracking-wider md:leading-[70px] text-[#413e65]">The Best Way to Make Someone Happy...</h1>
                        <p className="my-6">We envy other gift services and we are always trying to be one step ahead. We understand your requirements and Upoharbd.com is making the difference by assisting new customers to learn how to place an order.</p>
                        <button className="bg-[#413e65] hover:bg-green-500 px-6 py-3 text-white">choice your box</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;