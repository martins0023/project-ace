import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <div className="flex p-2 flex-row items-start text-center lg:gap-16 gap-5">
        <div className="flex flex-nowrap items-center space-x-3 mb-8">
          <span className="bg-none border border-black rounded-full font-host-grotesk text-sm sm:text-base font-medium px-4 py-2 whitespace-nowrap">
            Customer Story
          </span>
        </div>

        <div className="">
          <h2 className="text-lg font-poppins text-left sm:text-2xl lg:text-2xl tracking-wide">
            We’re trusted by the most important businesses and{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              services.
            </span>
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-white rounded-3xl p-6 text-md shadow-2xl">
              <div className="flex justify-between mt-2 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="font-poppins font-medium text-[#696767]">
                    {testimonial.user}
                  </h6>
                  {/* <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span> */}
                </div>
              </div>
              <p className="text-black font-poppins font-medium mt-3">
                "{testimonial.text}"
              </p>

              <p className="mt-5 font-poppins text-[#696767] font-medium">
                {testimonial.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
