
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[1300px] mx-auto lg:px-16 md:px-8 px-4 my-8">
                <h2 className="text-center text-4xl mt-32 mb-16 text-[#413e65] ">New Arrivals</h2>
                <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">

                    <div>
                        <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/08/wallet-05.jpg" alt="" />
                        <p className="text-[#a6a2af] text-sm my-2" >Wallets</p>
                        <h3 className="font-semibold">Black Real Leather Wallet</h3>
                        <p>$120.00</p>
                    </div>
                    <div>
                        <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/08/wallet-04.jpg" alt="" />
                        <p className="text-[#a6a2af] text-sm my-2">Wallets</p>
                        <h3 className="font-semibold">Tyler Brown Leather Wallet</h3>
                        <p>$105.00</p>
                    </div>
                    <div>
                        <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/08/wallet-03.jpg" alt="" />
                        <p className="text-[#a6a2af] text-sm my-2">Wallets</p>
                        <h3 className="font-semibold">Light Brown Real Leather Credit Card Case</h3>
                        <p>$40.00</p>
                    </div>
                    <div>
                        <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/08/toy-05.jpg" alt="" />
                        <p className="text-[#a6a2af] text-sm my-2">Toys</p>
                        <h3 className="font-semibold">Adventure Power Dinosaur Toy</h3>
                        <p>$21.75</p>
                    </div>
                </div>
                <div className="md:flex justify-between bg-gradient-to-r my-32 py-8 from-[#ebc4d7] to-[#fc7883]">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold">Today’s Deal</h2>
                        <div className="my-16">
                            <h3 className="text-3xl font-bold mb-3" >Promotional Contour Standard Ballpen - Colors</h3>
                            <p className="flex gap-8 text-xl"><del>$78.00</del> <span className="text-red-600">$49.00</span></p>
                        </div>
                        <button className="bg-[#8e43f0] hover:bg-[#5f20b2] px-6 py-3 text-white">shop now</button>
                    </div>
                    <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/toys-02.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;