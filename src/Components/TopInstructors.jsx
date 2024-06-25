import { useEffect, useState } from "react";

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-server-kappa-nine.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                data = data.slice(0, 6);
                setInstructors(data);
            })
    }, [])
    return (
        <div>
            <h1 className="text-5xl text-center border-y-4 w-1/2 mx-auto p-5">Top Instructors</h1>
            <div className="grid md:grid-cols-3 gap-5">
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
        </div>
    );
};

export default TopInstructors;