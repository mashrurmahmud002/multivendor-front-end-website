import axios from "axios";
import { useState } from "react";

const BasicInformation = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [generateSKu, setGenerateSKu] = useState('');

  const handleAddTag = () => {
    const tag = tagInput.trim();

    if (!tag) return;

    setTags((prev) => [...prev, tag]);
    setTagInput("");
  };


  const handleGenerateSku = async()=>{
    try{
         const  response = await axios.get('http://localhost:5000/api/generate-sku');
         console.log(response)
     setGenerateSKu(response.data.sku);
    }catch(err){
        console.log(err)
    }
     

  }


  

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <section className="w-full border border-black bg-white">
      {/* Header */}
      <div className="flex h-[55px] items-center gap-4 bg-black px-6">
        <div className="flex h-6 w-6 items-center justify-center border border-white text-xs font-bold text-white">
          B
        </div>

        <h2 className="text-[11px] font-bold tracking-[0.12em] text-white">
          BASIC INFORMATION
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        {/* Product Title */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.15em] text-black">
            PRODUCT TITLE<span className="text-red-600">*</span>
          </label>

          <input
            type="text"
            placeholder="e.g. Ceramic Pour-Over Coffee Set"
            className="h-[43px] w-full border border-black px-4 text-sm outline-none placeholder:text-[#9ca3af] focus:ring-1 focus:ring-black"
          />
        </div>

        {/* SKU + Brand */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* SKU */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
              SKU
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                value={generateSKu}
                
                className="h-[43px] w-full max-w-[173px] border border-black px-4 text-xs text-[#9ca3af] outline-none"
              />

              <button
                onClick={handleGenerateSku}
                type="button"
                className="h-[43px] w-[48px] border border-black bg-white text-[9px] font-bold tracking-wider transition hover:bg-black hover:text-white"
              >
                GEN
              </button>
            </div>
          </div>

          {/* Brand */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
              BRAND
            </label>

            <input
              type="text"
              placeholder="Brand or manufacturer"
              className="h-[43px] w-full border border-black px-4 text-sm outline-none placeholder:text-[#9ca3af] focus:ring-1 focus:ring-black"
            />
          </div>
        </div>

        {/* Category + Sub Category */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Category */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
              CATEGORY<span className="text-red-600">*</span>
            </label>

            <select
              defaultValue=""
              className="h-[43px] w-full appearance-none border border-black bg-white px-4 text-sm outline-none focus:ring-1 focus:ring-black"
            >
              <option value="" disabled>
                Select category...
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Living</option>
              <option value="beauty">Beauty</option>
            </select>
          </div>

          {/* Sub Category */}
          <div>
            <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
              SUB-CATEGORY
            </label>

            <select
              defaultValue=""
              className="h-[43px] w-full appearance-none border border-black bg-[#f3f3f3] px-4 text-sm text-[#9ca3af] outline-none focus:ring-1 focus:ring-black"
            >
              <option value="" disabled>
                Select sub-category...
              </option>
              <option value="coffee">Coffee</option>
              <option value="kitchen">Kitchen</option>
              <option value="office">Office</option>
            </select>
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="mb-2 block text-[10px] font-bold tracking-[0.15em]">
            TAGS
          </label>

          <div className="flex gap-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a tag and press Enter"
              className="h-[43px] min-w-0 flex-1 border border-black px-4 text-sm outline-none placeholder:text-[#9ca3af] focus:ring-1 focus:ring-black"
            />

            <button
              type="button"
              onClick={handleAddTag}
              className="h-[43px] w-[64px] border border-black bg-white text-[9px] font-bold tracking-wider transition hover:bg-black hover:text-white"
            >
              + ADD
            </button>
          </div>

          {/* Added Tags */}
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="border border-black px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BasicInformation;