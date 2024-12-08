import { Link } from "react-router-dom";

const Cart = ({ item }) => {
    const { _id, name, image, availableSeats, price, totalEnrolled } = item;

    return (
        <div className="shadow-lg rounded-lg p-4  flex flex-col justify-between border overflow-hidden m-4">
            <img src="" alt="Not Found" />
            {/* <div className="w-[370px] h-[260px] border"></div> */}
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">{name}</h2>
                <p className="text-gray-600 mb-2">Available Seats{availableSeats}</p>
                <p className="text-gray-600 mb-2">Price : {price}</p>
                <p className="text-gray-600 mb-2">Total Student : {totalEnrolled}</p>
            </div>
            <Link to={`class/${_id}`}>
                <button className="px-2 w-full bg-secondary rounded-lg font-bold mt-2 py-3">Select</button>
            </Link>
        </div>
    );
};

export default Cart;