import { useLoaderData } from "react-router-dom";

const Classes = () => {
    const classes = useLoaderData();
    return (
        <div className="grid md:grid-cols-3">
            {
                classes.map(eachClass => <div key={eachClass._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={eachClass.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{eachClass.name}</h2>
                            <p>Instructor: {eachClass.instructor}</p>
                            <p>Seats Available: {eachClass.seatsAvailable}</p>
                            <p>Price: ${eachClass.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Classes;