import React, { useState } from 'react'
// import { addSkill } from './service/api';

const Pic = () => {
    // const [file , setFile] = useState();
    // const add = async () =>{
    //     if (file) {
    //       const data = new FormData();
    //       data.append("file", file);
    //       data.append("name", "vue");
    //       data.append("id", "642c404dca9d0e76cea0b2eb");
    //          await addSkill(data);
    //       }
    // }
  return (
    <div>
      <input type="file" name="file" id="file"  />
      <button>Add</button>
    </div>
  )
}

export default Pic
