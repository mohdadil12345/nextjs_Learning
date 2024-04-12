import Image from "next/image";

import pic1 from "../../assets/pic1.png"

export default function Home() {
  return (
   <div>
    <h1>Home Page</h1>
    <Image  height={200} width={400} className="w-[300px] h-[500px] ml-5 " src={pic1} alt="pic1"/>
    <Image  
     className="w-[300px] h-[300px] mt-5 ml-10 p-10 rounded-full" 
     src={require("../../assets/palace4.jpg")} alt="home"/>

   </div>
  );
}
