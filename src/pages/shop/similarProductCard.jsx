import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons

const SimilarProductCard = ({ product, handleClick }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

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
        <div className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div className="relative mx-2 mt-2 flex h-40 sm:h-48 md:h-56 overflow-hidden rounded-xl"> {/* Adjusted height for mobile, tablet, and large screens */}
                <img
                    className="object-cover w-full h-full"
                    src={product.image} // Assuming product.image contains the image URL
                    alt={product.name}
                />
            </div>
            <div className="mt-2 px-3 pb-3">
                <h5 className="text-lg font-semibold text-slate-900">{product.name}</h5>
                <p className="text-xs text-slate-600">{product.category}</p> {/* Category */}
                <div className="mt-1 mb-3 flex items-center justify-between">
                    {renderStars(product.rating)} {/* Rating */}
                </div>
                <button
                    className="w-full mt-2 px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={() => handleClick(product)} // Triggering the handleClick function on button click
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default SimilarProductCard;
