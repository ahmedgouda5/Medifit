import Lottie from "lottie-react";
import virusDisinfection from "../../../public/virus-disinfection.json";
export default function MyAnimation() {
  return (
    <div className="w-64 h-64">
      <Lottie animationData={virusDisinfection} loop={true} />
    </div>
  );
}
