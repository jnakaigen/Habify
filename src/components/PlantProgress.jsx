import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import plantGrowth from "../assets/animations/plantgrowth.json";
import { gsap } from "gsap";

const PlantProgress = ({ progress }) => {
  const lottieRef = useRef();

  useEffect(() => {
    const lottieInstance = lottieRef.current?.getLottie?.();
    if (lottieInstance && lottieInstance.totalFrames) {
      const totalFrames = lottieInstance.totalFrames;
      const targetFrame = (progress / 100) * totalFrames;

      gsap.to(
        { frame: lottieInstance.currentFrame },
        {
          frame: targetFrame,
          duration: 1,
          ease: "power2.out",
          onUpdate: function () {
            lottieInstance.goToAndStop(this.targets()[0].frame, true);
          },
        }
      );
    }
  }, [progress]);

  return (
    <div className="w-full flex flex-col items-center">
      <Lottie
        lottieRef={lottieRef}
        animationData={plantGrowth}
        loop={false}
        autoplay={false}
        style={{ width: 120, height: 120 }}
      />
      <span className="mt-2 text-green-700 font-bold">{Math.round(progress)}%</span>
    </div>
  );
};

export default PlantProgress;