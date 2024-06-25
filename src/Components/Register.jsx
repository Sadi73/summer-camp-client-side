import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, confirmPassword, photoURL);
        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const loggedInUser = result.user;
                    console.log(loggedInUser);
                    alert('successfully created acount');
                    form.reset();

                })
                .catch(error => console.log(error));

        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleRegister}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name="confirmPassword" placeholder="Re-type Your Password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered" />
                        </div>
                        <div>
                            <p> <small>Already Have an Account?  <Link to='/login' className="text-blue-500">Login</Link> </small> </p>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-info" />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Register;