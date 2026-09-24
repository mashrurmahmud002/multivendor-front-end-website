import { useContext, useRef, useState } from "react";
import { ProvideContext } from "./ProductContextProvider";

const VariantsSection = () => {

    const { varient, seVarient, Values, setValues, price, setPrice, size, setSize, stock, setStock, image, setImage } = useContext(ProvideContext);
    const [hasVariants, setHasVariants] = useState(false);


    const fileInputRef = useRef(null);


    const [variantOptions, setVariantOptions] = useState([
        {
            optionName: "Size",
            values: "S, M, L, XL",
            price: "0.00",
            stock: "0",
            color: "",
            image: image,

        },
    ]);

    const handleTriggerImage = () => {
        fileInputRef.current.click();
    }
    // Add new variant option
    const handleAddVariant = () => {
        seVarient((prev) => [
            ...prev,
            {
                optionName: "",
                values: "",
                price: "0.00",
                stock: "0",
            },
        ]);
    };

    // Update variant field
    const handleChange = (index, e) => {
        const { name, value } = e.target;

        setVariantOptions((prev) =>
            prev.map((item, i) =>
                i === index
                    ? {
                        ...item,
                        [name]: value,
                    }
                    : item
            )
        );
    };

    // Remove variant option
    const handleRemove = (index) => {
        setVariantOptions((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="w-full border border-gray-300 bg-white">

            {/* ================= HEADER ================= */}

            <div className="flex h-[69px] items-center gap-4 bg-black px-6 text-white">

                {/* Icon */}
                <div className="flex h-6 w-6 items-center justify-center border border-white text-[11px] font-bold">
                    F
                </div>

                <div>
                    <h2 className="text-[12px] font-bold tracking-wide">
                        VARIANTS
                    </h2>

                    <p className="mt-1 text-[9px] text-gray-400">
                        Size, Color, Material etc.
                    </p>
                </div>

            </div>

            {/* ================= BODY ================= */}

            <div className="px-5 py-6">

                {/* Checkbox */}

                <label className="flex cursor-pointer items-center gap-3">

                    <input
                        type="checkbox"
                        checked={hasVariants}
                        onChange={(e) => setHasVariants(e.target.checked)}
                        className="peer sr-only"
                    />

                    {/* Custom checkbox */}
                    <span
                        className={`relative flex h-[18px] w-[36px] items-center border border-black transition ${hasVariants ? "bg-black" : "bg-white"
                            }`}
                    >
                        <span
                            className={`absolute h-[14px] w-[14px] bg-white transition-all ${hasVariants ? "left-[19px]" : "left-[1px]"
                                }`}
                        />
                    </span>

                    <span className="text-[13px] text-gray-600">
                        This product has multiple variants
                    </span>

                </label>

                {/* ================= VARIANT FIELDS ================= */}

                {hasVariants && (
                    <div className="mt-4 border-t border-gray-200 pt-5">

                        {/* Column headings */}

                        <div className="mb-3 grid grid-cols-[1.2fr_1.2fr_94px_94px_38px] gap-2">

                            <p className="text-[9px] font-medium tracking-[2px] text-gray-500">
                                OPTION NAME
                            </p>

                            <p className="text-[9px] font-medium tracking-[2px] text-gray-500">
                                VALUES
                            </p>

                            <p className="text-[9px] font-medium tracking-[2px] text-gray-500">
                                PRICE
                            </p>

                            <p className="text-[9px] font-medium tracking-[2px] text-gray-500">
                                STOCK
                            </p>

                            <div />
                        </div>

                        {/* Variant rows */}

                        <div className="space-y-3">

                            {varient.map((variant, index) => (
                                <div key={index} className="grid grid-cols-3 items-center gap-2">
                                    {/* 1. Option Name */}
                                    <div>
                                        <label>Option</label>
                                        <input
                                            type="text"
                                            name="optionName"
                                            value={variant.optionName}
                                            onChange={(e) => handleChange(index, e)}
                                            placeholder="Size"
                                            className="h-[38px] w-full border border-black px-3 text-[12px] text-gray-700 outline-none focus:bg-gray-50"
                                        />
                                    </div>

                                    {/* 2. Image Upload */}
                                    <div>
                                        <label>Image Upload</label>
                                        <label onClick={handleTriggerImage} className="group flex h-[38px] cursor-pointer items-center justify-center border border-black bg-white transition-colors hover:bg-black">
                                            <svg
                                                className="h-4 w-4 stroke-2 text-black transition-colors group-hover:text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                            <input
                                                type="file"
                                                name="file"
                                                accept="image/*"
                                                onChange={(e) => handleChange(index, e)}
                                                className="hidden"
                                            />
                                        </label>
                                    </div>

                                    {/* 3. Values */}
                                    <div>
                                        <label>Values</label>
                                        <input
                                            type="text"
                                            name="values"
                                            value={variant.values}
                                            onChange={(e) => handleChange(index, e)}
                                            placeholder="S, M, L, XL"
                                            className="h-[38px] w-full border border-black px-3 text-[12px] text-gray-700 outline-none focus:bg-gray-50"
                                        />
                                    </div>

                                    {/* 4. Price */}
                                    <div>
                                        <label>Price</label>
                                        <div className="flex h-[38px] border border-black">
                                            <span className="flex w-[25px] items-center justify-center border-r border-gray-300 text-[11px] text-gray-400">
                                                $
                                            </span>
                                            <input
                                                type="number"
                                                name="price"
                                                value={variant.price}
                                                onChange={(e) => handleChange(index, e)}
                                                className="w-full min-w-0 px-2 text-[12px] outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* 5. Stock */}
                                    <div>
                                        <label>Stock</label>
                                        <input
                                            type="number"
                                            name="stock"
                                            value={variant.stock}
                                            onChange={(e) => handleChange(index, e)}
                                            className="h-[38px] w-full border border-black px-3 text-[12px] outline-none"
                                        />
                                    </div>

                                    {/* 6. Remove */}
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemove(index)}
                                            className="mt-5 flex h-[38px] w-[38px] items-center justify-center border border-black text-[18px] text-gray-700 transition hover:bg-black hover:text-white"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* Add Variant Option */}

                        <button
                            type="button"
                            onClick={handleAddVariant}
                            className="mt-5 border border-black px-5 py-3 text-[10px] font-bold tracking-[1px] text-black transition hover:bg-black hover:text-white"
                        >
                            + ADD VARIANT OPTION
                        </button>

                    </div>
                )}

            </div>
        </div>
    );
};

export default VariantsSection;