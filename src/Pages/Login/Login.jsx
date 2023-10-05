import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";


const Login = () => {
    const { createGoogleUser, createGithubUser, signIn } = useContext(AuthContext)
    const [success , setSuccess] = useState(false)
    const location = useLocation()
    console.log(location.state);
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                e.target.reset();
            })
            .catch(error => {
                console.log(error);
            })



    }
    const handleGoogleLogin = () => {
        createGoogleUser()
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/')
                
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubLogin = () => {
        createGithubUser()
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/')
                
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="bg-[#c8eeef]" >
            <div className=" max-w-[1400px]  mx-auto lg:px-16 md:px-8 px-4">
                <div className="md:w-2/4 mx-auto h-[80vh] flex flex-col justify-center items-center"  >
                    <h1 className="text-5xl text-center font-bold mb-4">Login now!</h1>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl mt-4">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl mt-4">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text  link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="flex justify-around my-2">
                                <button onClick={handleGoogleLogin} className="border border-black flex items-center w-1/3 shadow rounded-xl p-1 gap-2" ><img className="w-[30px]" src="https://tinyurl.com/4d5vrs96" alt="" />sign in google</button>
                                <button onClick={handleGithubLogin} className="border border-black flex items-center w-1/3 shadow rounded-xl p-1 gap-2" ><img className="w-[30px]" src="https://tinyurl.com/ychbrzry" alt="" />sign in github</button>
                            </div>
                            <p> Don't have an account? <Link to="/register"><span className="font-bold">Register</span></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;