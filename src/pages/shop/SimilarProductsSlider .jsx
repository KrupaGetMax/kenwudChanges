import { useRef } from "react";
import SimilarProductCard from "./similarProductCard";

const SimilarProductsSlider = ({ relatedProducts, product, handleClick }) => {
    const sliderRef = useRef();

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    };

    return (
        <>
            <section className="relative flex items-center overflow-hidden p-4">
                {/* Left scroll button */}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700 z-10"
                    onClick={scrollLeft}
                >
                    {"<"}
                </button>

                {/* Product Slider */}
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto gap-4 p-2 scrollbar-hidden overflow-y-hidden"
                >
                    {relatedProducts
                        .filter(
                            (p) =>
                                p.category === product.category &&
                                p.id !== product.id
                        )
                        .map((p) => (
                            <div
                                className="flex-shrink-0 w-60 h-80 sm:w-52 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-104"
                                key={p.id}
                            >
                                <SimilarProductCard handleClick={handleClick} product={p} />
                            </div>
                        ))}
                </div>

                {/* Right scroll button */}
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700 z-10"
                    onClick={scrollRight}
                >
                    {">"}
                </button>
            </section>

            {/* Tailwind CSS for scrollbar hidden */}
            <style>
                {`
                    .scrollbar-hidden::-webkit-scrollbar {
                        display: none;
                    }

                    .scrollbar-hidden {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;    /* Firefox */
                    }
                `}
            </style>
        </>
    );
};

export default SimilarProductsSlider;
