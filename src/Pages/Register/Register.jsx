import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";


const Register = () => {

    const [errorMassage , setErrorMassage] = useState('')
    const [successMassage, setSuccessMassage] = useState('')
    const {createUser , handleUpdateProfile} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.img.value
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMassage('')
        setSuccessMassage('')

        if(password.length < 6){
            setErrorMassage('Password must be at least 6 characters')
        }

        createUser(email , password)
        .then(res =>{
            handleUpdateProfile(name , image )
            .then(res =>{
                console.log(res.user)
            })
            .catch(error =>{
                console.log(error);
            })
            console.log(res.user)
            setSuccessMassage("register successful")
        })
        .catch(error =>{
            setErrorMassage(error.message)
        })
    }

    return (
        <div className="bg-[#bfecb1]" >
            <div className=" max-w-[1400px]  mx-auto lg:px-16 md:px-8 px-4">
                <div className="md:w-2/4 md:py-16 py-8 mx-auto flex flex-col justify-center items-center"  >
                    <h1 className="text-5xl text-center font-bold mb-4">Register now!</h1>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl mt-4">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="your name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl mt-4">Profile Image</span>
                                    </label>
                                    <input type="text" name="img" placeholder="image url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl mt-4">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl mt-4">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary text-xl">Register</button>
                                </div>
                            </form>
                            {
                                errorMassage &&
                                <p className="text-red-500 text-center">
                                    {errorMassage}
                                </p>
                            }
                            {
                                successMassage &&
                                <div>
                                    <p className="text-green-500 text-center">
                                    {successMassage}
                                    
                                </p>
                                <Navigate to="/"></Navigate>
                                </div>
                            }
                            <p>You have an account? <Link to="/login"><span className="font-bold">Login</span></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;