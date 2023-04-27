import { useState ,useRef, useEffect } from 'react'
import { useScreenshot} from 'use-react-screenshot'
import axios from 'axios'

import './App.css'

function App() {
  const ref = useRef(null)
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => {
   
    takeScreenshot(ref.current)
  }

  const UploadImage = async () =>{




   
      const blob = await fetch(image).then((res) => res.blob());
      const file = new File([blob], "screen_capture", {
        type: blob.type,
        lastModified: Date.now()
      });

      // const blob = await (await fetch(image)).blob();


      const formData = new FormData();

    formData.append("screen_capture", file);

      

      axios.post("http://localhost:3001/uploadImage",formData).then((response)=>{
           console.log(response)
           alert("File uploaded successfully")
      })
 
      console.log(file)

 
      
  }


  
  return (
    <div>
      <div>
        <button style={{ marginBottom: '10px' , border:'solid' }} onClick={getImage}>
          Take screenshot
        </button>
        &nbsp;
        <button style={{ marginBottom: '10px' , border:'solid' }} onClick={UploadImage}>
          Upload Image
        </button>
      </div>
      <img width={"500px"} src={image} alt={'Screenshot'} />
      <div ref={ref}>
        <h1>FSD Screen Shot Demo</h1>
        <p>
          <strong>Sample Element</strong>
        </p>
      </div>
    </div>
  )

}

export default App
