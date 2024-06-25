import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')

            })
            .catch(error => console.log(error));
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => console.log(error))
        }

        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleLogin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Enter Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="Choose Password" className="input input-bordered" />
                            </div>

                            <div>
                                <p> <small>Do not have an Account? Please Register  <Link to='/register' className="text-blue-500">Here</Link> </small> </p>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-info" />
                            </div>
                            <div className="form-control">
                                <button className="btn btn-outline btn-info" onClick={handleGoogleSignIn}>Continue with Google</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    };

    export default Login;