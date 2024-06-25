import { useLoaderData } from "react-router-dom";

const Instructors = () => {
    const instructors = useLoaderData();
    console.log(instructors)
    return (
        <div className="grid md:grid-cols-3 ">
            {
                instructors.map(instructor => <div key={instructor._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor.image} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p>Instructor: {instructor.email}</p>
                            {/* <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default Instructors;