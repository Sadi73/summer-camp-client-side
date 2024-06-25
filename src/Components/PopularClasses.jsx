import { useEffect, useState } from "react";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-server-kappa-nine.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                data = data.slice(0, 6);
                setClasses(data);
            });
    }, [])
    return (
        <div className="my-10">
            <h1 className="text-5xl text-center border-y-4 w-1/2 mx-auto p-5">Popular Classes</h1>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    classes.map(eachClass => <div key={eachClass._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={eachClass.image} alt="Shoes" className="rounded-xl w-32" />
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

        </div>
    );
};

export default PopularClasses;