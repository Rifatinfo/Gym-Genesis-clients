import { useEffect, useState } from "react";
import UseAxiosFetch from "../../Hooks/UseAxiosFetch";
import img from '../../assets/home/girl.jpg'
const PopularTeacher = () => {
    const [instructor, setInstructor] = useState([]);
    const axiosFetch = UseAxiosFetch();
    useEffect(() => {
        axiosFetch.get('popular-instructor')
            .then((response) => {
                setInstructor(response.data);
            })
            .catch((error) => {
                console.error("Error fetching instructors:", error);
            });
    }, []); // Add empty dependency array to run once on mount

    // console.log(instructor);
    return (
        <div >
            {
                instructor.length > 0 ? (
                    <div>
                        <div className="grid mb-28 md:grid-cols-2 lg:grid lg:grid-cols-3 w-[90%] gap-6 mx-auto" >
                            {
                                instructor.slice(0).map((instructor, index) => (
                                    <div key={index}>
                                        <div className="flex dark:text-white hover:-translate-y-2 duration-200 cursor-pointer flex-col shadow-md py-8 md:px-8 rounded-md">
                                            <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={instructor?.instructor?.photoUrl || `${img}`} alt="Instructor" />
                                            <p>{instructor?.instructor?.name}</p>
                                        </div>
                                       
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <p>No instructors available.</p>
                )
            }
        </div>
    );
};

export default PopularTeacher;

