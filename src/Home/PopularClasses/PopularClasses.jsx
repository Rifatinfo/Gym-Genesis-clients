import { useEffect, useState } from "react";
import UseAxiosFetch from "../../Hooks/UseAxiosFetch";
import Cart from "./Cart";

const PopularClasses = () => {
    const axiosFetch = UseAxiosFetch();
    const [classes, setClasses] = useState([]);

    useEffect( () => {
       const fetchClasses = async () => {
           const response = await axiosFetch.get('/classes');
           console.log(response.data);
           setClasses(response.data);
       }
       fetchClasses();
    }, []);

    console.log(classes);
    return (
        <div className="md:w-[80%] border mx-auto my-36">
            <div>
                <h1 className="text-5xl font-bold text-center">Our Popular Classes</h1>
                <div className="w-[50%] text-center mx-auto my-4">
                    <p className="text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore?Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
                    {
                        classes.slice(0,6).map((item, index) => <Cart key={index} item={item}></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;

