import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 ">
      <div className="text-center">
        <span className="bg-none border-black border font-host-grotesk rounded-full h-6 text-lg font-medium px-5 py-3">
          About Us
        </span>
        <h2 className="text-2xl font-poppins sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          Each service is thoughtfully curated to spark connection and create{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
             lasting memories for your event.
          </span>
        </h2>
      </div>

      <div className="mt-10 lg:mt-20">
        {/* Icon Tabs: Non-scrollable, centered row */}
        <div className="flex justify-center space-x-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-white justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="mt-1 text-center sm:text-xl font-medium text-sm font-poppins">
                {feature.text}
              </div>
            </div>
          ))}
        </div>

        {/* Image Carousel: Horizontally scrollable */}
        <div className="mt-4 overflow-x-auto p-3">
          <div className="flex space-x-4 ">
            {features.map((feature, index) => (
              <div key={index} className="flex-none w-56 h-49">
                <img
                  src={feature.image}
                  className="w-full h-full object-cover rounded-lg"
                  alt={`Feature ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
