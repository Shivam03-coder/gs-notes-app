"use client";

import useMount from "@/hooks/use-mount";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type LottieComponentProps = {
  animationData?: object; // The animation data
  width?: number | string; // Width of the animation
  height?: number | string; // Height of the animation
};

const LottieComponent: React.FC<LottieComponentProps> = ({
  animationData,
  width = 300,
  height = 300,
}) => {
  const isMounted = useMount(); // Renamed for clarity

  if (!isMounted) {
    return null; // Explicitly return null to avoid rendering
  }

  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <Lottie
        animationData={animationData}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieComponent;
