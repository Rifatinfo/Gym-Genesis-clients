import { useEffect, useState } from "react";
import UseAxiosFetch from "../../Hooks/UseAxiosFetch";

const PopularClasses = () => {
    const axiosFetch = UseAxiosFetch();
    const [classes, setClasses] = useState([]);

    useEffect( () => {
       const fetchClasses = async () => {
           const response = await axiosFetch.get('/classes');
           console.log(response);
       }
       fetchClasses();
    }, []);
    return (
        <div className="md:w-[80%] border mx-auto my-36">
            <div>
                <h1 className="text-5xl font-bold text-center">Our Popular Classes</h1>
                <div className="w-[40%] text-center mx-auto my-4">
                    <p className="text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore?Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;

