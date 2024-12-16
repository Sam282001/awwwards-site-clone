import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Mission = () => {
  return (
    <div className="relative mb-8 mt-20 flex flex-col items-center gap-5">
      <h2 className="font-general text-sm uppercase md:text-[15px]">
        Who We Are
      </h2>

      <AnimatedTitle
        title="W<b>e</b>'re B<b>u</b>ildi<b>n</b>g <br /> A <b>N</b>ew <b>-</b> Re<b>a</b>lit<b>y</b> <br /> Th<b>a</b>t Re<b>w</b>ar<b>d</b>s <br /> Pl<b>a</b>yers <b>-</b> A<b>n</b>d <br /> E<b>n</b>co<b>u</b>rag<b>e</b>s <br /> Co<b>mm</b>unities <br /> To <b>-</b> Th<b>r<b/>ive"
        containerClass="mt-5 !text-black text-center tracking-wider"
      />

      <div className="justify-center text-center">
        <p>Zentry is on a mission to unite diverse player networks to</p>
        <p>forge the world's largest shared adventure.</p>
        
      </div>
      <Button
          title="Discover Who We Are"
          containerClass="!bg-black text-white flex items-center gap-2"
        />
    </div>
  );
};

export default Mission;
