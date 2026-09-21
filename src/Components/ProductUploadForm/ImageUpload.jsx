import axios from 'axios';
import React, { useRef, useState } from 'react';

const ImageUpload = ({setImage}) => {
    const [isDragging, setIsDragging] = useState(false);
     const fileInputRef = useRef(null); // ← ref to the hidden input
   
     

    
    const handleFileImage = async(e)=>{
       const files = e.target.files[0];
       const imageKey = import.meta.env.VITE_IMGBB_API_KEY;
       const formData = new FormData();

       formData.append('image',files);

       const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageKey}`;

       const uploadImage = await  axios.post(url,formData);

       console.log(uploadImage?.data?.data?.display_url);

       setImage(uploadImage?.data?.data?.display_url);

     
       

    
    }

    

   const  handleTriggerFilePicker = ()=>{
         fileInputRef.current.click();
        
       
       
   }
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    }

    const handleDragLeave = (e)=>{
        e.preventDefault();
        setIsDragging(false);
    }
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);

    }
    return (
         <div className="w-full">
      {/* ─── Header Bar ─── */}
      <div className="bg-black text-white px-4 py-2.5 flex items-center gap-2">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-[0.15em]">
          Product Media
        </span>
      </div>

      {/* ─── Subtitle ─── */}
      <p className="text-xs text-gray-500 px-4 pt-3">
        First image becomes the cover
      </p>

      {/* ─── Upload Zone ─── */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => {
          /* trigger hidden file input */
        }}
        className={`
          m-4 mt-2 flex flex-col items-center justify-center
          border-2 border-dashed rounded-lg
          py-14 px-6 cursor-pointer transition
          ${
            isDragging
              ? "border-black bg-gray-100"
              : "border-gray-300 bg-gray-50 hover:bg-gray-100"
          }
        `}
      >
        {/* Upload icon */}
        <svg
          className={`w-10 h-10 mb-4 ${isDragging ? "text-black" : "text-gray-400"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A1.5 1.5 0 0021.75 19.5V4.5A1.5 1.5 0 0020.25 3H3.75A1.5 1.5 0 002.25 4.5v15A1.5 1.5 0 003.75 21z"
          />
        </svg>

        {/* Primary text */}
        <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Drag &amp; drop or{" "}
          <span onClick={handleTriggerFilePicker} className="text-black underline underline-offset-2">
            click to upload
          </span>
        </p>

        {/* File specs */}
        <p className="text-xs text-gray-400 mt-2">
          PNG, JPG, WEBP – max 10MB each
        </p>

        {/* Hidden file input */}
        <input
          type="file"
          id="file"
          name="file"
          multiple
          accept=".png,.jpg,.jpeg,.webp"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileImage}
        
        />
      </div>
    </div>
    );
};

export default ImageUpload;