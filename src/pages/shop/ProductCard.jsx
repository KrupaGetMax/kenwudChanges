// import React, { useState } from 'react';

// const ProductCard = ({ product }) => {
//     const [hovered, setHovered] = useState(false);
//     const [expanded, setExpanded] = useState(false);

//     const handleReadMore = () => {
//         setExpanded(true);
//     };

//     return (
//         <div
//             key={product.id}
//             className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//         >
//             {/* Image Section */}
//             <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800">
//                 <img
//                     src={product.image}
//                     alt={product.name}
//                     className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
//                 />
//             </div>

//             {/* Content Section */}
//             <div className="p-4">
//                 <h4 className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
//                     {product.category}
//                 </h4>
//                 <h3 className="font-semibold text-base text-gray-800 dark:text-white truncate">
//                     {product.name}
//                 </h3>

//                 {/* Description Section */}
//                 <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                     {/* Only show description and button after hover */}
//                     {hovered && (
//                         <>
//                             <p className="line-clamp-1">{product.description}</p>
//                             {/* Show full description when expanded */}
//                             {expanded && (
//                                 <p className="mt-2">{product.description}</p>
//                             )}
//                             {/* Read More Button */}
//                             <button
//                                 className="mt-2 text-blue-500 hover:text-blue-700"
//                                 onClick={handleReadMore}
//                             >
//                                 {expanded ? "Show Less" : "Read More"}
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons


// const ProductCard = ({ product }) => {
//     const [hovered, setHovered] = useState(false);
//     const [expanded, setExpanded] = useState(false);
//     const navigate = useNavigate();

//     const handleReadMore = () => {
//         // Pass product data to the detail page via navigate
//         navigate(`/product-detail/${product.id}`, {
//             state: { product }, // Passing the product data as state
//         });
//     };
//     const renderStars = (rating) => {
//         const fullStars = Math.floor(rating);
//         const halfStar = rating % 1 >= 0.5;
//         const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//         return (
//             <div className="flex items-center mt-1">
//                 {Array(fullStars)
//                     .fill()
//                     .map((_, index) => (
//                         <FaStar key={`full-${index}`} className="text-yellow-500" />
//                     ))}
//                 {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
//                 {Array(emptyStars)
//                     .fill()
//                     .map((_, index) => (
//                         <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
//                     ))}
//             </div>
//         );
//     };
//     return (
//         <div
//             key={product.id}
//             className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//         >
//             {/* Image Section */}
//             <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800">
//                 <img
//                     src={product.image}
//                     alt={product.name}
//                     className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110 w-70 h-48"
//                 />
//             </div>

//             {/* Content Section */}
//             <div className="p-4">
//                 <h4 className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
//                     {product.category}
//                 </h4>
//                 <h3 className="font-semibold text-base text-gray-800 dark:text-white truncate">
//                     {product.name}
//                 </h3>
//                 {renderStars(product.rating)}
//                 {/* Description Section */}
//                 <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//                     {hovered && (
//                         <>
//                             <p className="line-clamp-1">{product.description}</p>
//                             {expanded && (
//                                 <p className="mt-2">{product.description}</p>
//                             )}
//                             <button
//                                 className="mt-2 text-blue-500 hover:text-blue-700"
//                                 onClick={handleReadMore}
//                             >
//                                 {expanded ? "Show Less" : "Read More"}
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };




const ProductCard = ({ product, products }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    // Handle navigation on product card click
    const handleViewDetails = () => {
        navigate(`/product-detail/${product.id}`, {
            state: { 
                product, // Passing the selected product
                products // Passing the entire products array
            },
        });
    };

    // Render stars for product rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="flex items-center mt-1">
                {Array(fullStars)
                    .fill()
                    .map((_, index) => (
                        <FaStar key={`full-${index}`} className="text-yellow-500" />
                    ))}
                {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
                {Array(emptyStars)
                    .fill()
                    .map((_, index) => (
                        <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
                    ))}
            </div>
        );
    };

    return (
        <div
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
            onClick={handleViewDetails} // Trigger navigation on click of the card itself
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image Section */}
            <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain w-70 h-48"
                />
                {/* "View Details" Button only visible on larger screens */}
                {hovered && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering onClick on card
                            handleViewDetails();
                        }}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded shadow hover:bg-opacity-90 hidden sm:block"
                    >
                        View Details
                    </button>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h4 className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                    {product.category}
                </h4>
                <h3 className="font-semibold text-base text-gray-800 dark:text-white truncate">
                    {product.name}
                </h3>
                {renderStars(product.rating)}
            </div>
        </div>
    );
};

export default ProductCard;






