import Banner from "../assets/banner.png";
import BackButton from "./BackButton";

export default function TripBanner() {
  return (
    <div className="w-full relative">
      <img
        src={Banner}
        alt="Banner"
        className="h-full w-full aspect-[35.3/5] object-cover object-left"
      />
      <BackButton />
    </div>
  );
} 