

const About = () => {
    return (
        <div className="bg-[#fdf6f6]">
            <div className="max-w-[1400px] mx-auto lg:px-16 md:px-8 px-4">
                <h2 className="text-center text-[#413e65] pt-32 md:text-5xl text-3xl font-bold">About Us</h2>
                <p className="md:text-2xl text-xl text-[#413e65] md:w-3/4 text-center mx-auto font-bold my-4">We are a Gift Shop started in 2010 lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                <img className="mx-auto w-full md:my-16 my-8" src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/about.jpg" alt="" />

                <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
                    <div>
                        <h2 className="text-3xl  font-bold mb-4">What we do <span className="w-[60px] mt-4 h-[5px] border-b-[5px] block border-orange-500"></span></h2>
                        <p className="md:text-xl font-medium ">Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div>
                        <div>
                            <h2 className="text-3xl  font-bold mb-4">Mission <span className="w-[45px] mt-4 h-[5px] border-b-[5px] block border-orange-500"></span></h2>
                            <p className="md:text-xl mt-6 font-medium ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl mt-8 font-bold mb-4">Vision <span className="w-[45px] mt-4 h-[5px] border-b-[5px] block border-orange-500"></span></h2>
                            
                            <p className="md:text-xl md:mb-32 mb-8 font-medium ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                        </div>
                    </div>
                </div>
                <hr />
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 md:py-32 py-8">
                    <div className="md:text-3xl text-2xl font-bold">What we stand for
                        <span className="w-[60px] mt-4 h-[5px] border-b-[5px] block border-orange-500"></span>
                    </div>
                    <div className="bg-white p-4 border border-[#8c83832f]">
                        <span className="w-[40px] mt-4 h-[5px] border-b-[5px] block border-orange-500"></span>
                        <h3 className="text-xl font-bold my-3">Customer Centricity</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                    </div>
                    <div className="bg-white p-4 border border-[#8c83832f]">
                        <span className="w-[40px] mt-4 h-[5px] border-b-[5px] block border-orange-500"></span>
                        <h3 className="text-xl font-bold my-3">Trust & Integrity</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                    </div>
                    <div className="bg-white p-4 border border-[#8c83832f]">
                        <span className="w-[40px] mt-4 h-[5px] border-b-[5px] block border-orange-500"></span>
                        <h3 className="text-xl font-bold my-3">Cost Conscious</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;