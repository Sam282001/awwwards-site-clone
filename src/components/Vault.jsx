import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { BentoTilt } from "./Features";

const Vault = () => {
  return (
    <div id="vault" className="bg-[linear-gradient(180deg,_hsla(67,_100%,_70%,_1)_50%,_hsla(240,_36%,_91%,_1)_90%)] container mx-auto px-3 md:px-10">
      <div className="py-28 px-5">
        <AnimatedTitle
          title="T<b>h</b>e U<b>n</b>iv<b>e</b>rse <br /> Po<b>w</b>er<b>e</b>d b<b>y</b> Ze<b>n</b>t"
          sectionId="#story"
          containerClass="pointer-events-none !text-black z-10"
        />
        <div className="mt-4">
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-center items-center object-cover">
              <video
                loop
                autoPlay
                muted
                src="/videos/vault.webm"
                className="w-full h-80"
              />
            </div>
          </BentoTilt>
        </div>

        <div className="-mt-20 flex w-full justify-center md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start md:pt-14">
            <p className="mt-3 max-w-sm text-center font-circular-web text-black md:text-start text-lg">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover it's secrets and shape your fate amdist infinite
              opportunities.  
            </p>

            {/* <Button
              id="realm-button"
              title="discover prologue"
              containerClass="mt-5 !bg-black text-white"
            /> */}
            <Button
          title="Enter Vault"
          rightIcon={<TiLocationArrow />}
          containerClass="!bg-black flex-center gap-1 text-white mt-4"
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
