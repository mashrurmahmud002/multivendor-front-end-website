import { useState } from "react";
import ImageUpload from "./ImageUpload";

export default function ProductUploadForm() {
  const [image, setImage] = useState(null);




  return (
    <>
       <form action="">
          <ImageUpload setImage={setImage}/>
          <br />


       </form>
    </>
  );
}   