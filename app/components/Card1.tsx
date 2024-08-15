import React from "react";
import Image from "next/image";
interface Card1Props {

  text: string;
  num: number | string;
  img: string;
}
const Card1 = ({text, num, img}: Card1Props) => {
  return (
    <div className="rounded-2xl p-4 shadow-sm bg-white">
      <div className=" flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div>
            <Image src={img} width={55} height={37} alt="image"/>
          </div>
          <div className="pl-4 ">
            <div className="text-[#718EBF] text-sm">{text}</div>
            <div className="text-[#232323] font-semibold text-xl">{num}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
