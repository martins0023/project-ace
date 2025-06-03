import { CheckCircle2, MoveUpRight } from "lucide-react";
import { eventsCentres, hotels, reviews } from "../constants";
import { MapPin, Star } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { services, users } from "../pages/Services/constants";

const Deals = () => {
  const { id } = useParams();
  const svc = services.find((s) => String(s.id) === id);

  // const owner = users.find((u) => u.id === svc.userId);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/discover")
    window.scrollTo({ top: 0, left: 0})
  }
  return (
    <div className="mt-20">
      <h2 className="text-xl font-monument sm:text-3xl lg:text-3xl text-center mt-6 tracking-wide">
        Exclusive Deals On{" "}
        <span className="bg-gradient-to-r text-4xl sm:text-4xl lg:text-5xl text-[#696969] bg-clip-text">
          Project Ace.
        </span>
      </h2>

      {/* Hotel section */}
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <div className="bg-black rounded-3xl p-5 h-full">
            {/* Heading Section */}
            <div className="mt-5 flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="text-white font-monument text-3xl sm:text-4xl lg:text-5xl">
                  Event Planing
                </p>
                <p className="font-montserrat text-base text-white mt-2">
                  Get satisfied services for your engagement and upcoming
                  ceremonies or events.
                </p>
              </div>
              <div onClick={handleNavigate} className="bg-white rounded-full w-fit h-fit p-3 cursor-pointer">
                <MoveUpRight />
              </div>
            </div>

            {/* Reviews Section */}
            <div className="flex justify-end justify-items-end mt-4">
              <div className="flex -space-x-2">
                {/* Only display the first three reviews */}
                {reviews.slice(0, 3).map((reviewImage, index) => (
                  <img
                    key={index}
                    src={reviewImage.image}
                    alt={`Feature ${index + 1}`}
                    className="rounded-full w-10 h-10 border-2 border-black"
                  />
                ))}

                {/* If there are more than three reviews, display a + count */}
                {reviews.length > 3 && (
                  <div className="flex items-center justify-center rounded-full w-10 h-10 bg-white border-2 border-black text-black font-medium text-sm">
                    +{reviews.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 flex flex-row gap-1 justify-evenly w-full lg:w-1/2 cursor-pointer">
          {services.slice(0, 2).map((service, index) => (
            <div
              onClick={() => navigate(`/services/${service.id}`)}
              key={index}
              className="bg-white rounded-3xl w-full shadow-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Hotel Details */}
              <div className="bg-black p-4 h-full text-white">
                <p className="font-montserrat-alternates sm:text-lg font-semibold text-sm">
                  {service.title}
                </p>
                <p className="font-montserrat text-xs sm:text-base flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4" />
                  {service.type}
                </p>

                {/* Rating and Price Section */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex text-yellow-500">
                    {/* Renders 5 stars (static). 
                      If you have dynamic rating data, replace Array(5) with 
                      something like Array(hotel.rating) */}
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-3 h-3" />
                      ))}
                  </div>

                  <p className="font-semibold text-white text-xs sm:text-base">
                    ${service.price?.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* meetings and conferences */}
      <div className="flex flex-wrap justify-center mt-5">
        <div className="p-2 w-full lg:w-1/2">
          <div className="bg-black rounded-3xl p-5 h-full">
            {/* Heading Section */}
            <div className="mt-5 flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="text-white font-monument text-3xl sm:text-4xl lg:text-5xl">
                  Meetings & conferences
                </p>
                <p className="font-montserrat text-base text-white mt-2">
                  Get a satisfied meeting and conferences for your engagement and upcoming
                  event.
                </p>
              </div>
              <div onClick={handleNavigate} className="bg-white rounded-full w-fit h-fit p-3 cursor-pointer">
                <MoveUpRight />
              </div>
            </div>

            {/* Reviews Section */}
            <div className="flex justify-end justify-items-end mt-4">
              <div className="flex -space-x-2">
                {/* Only display the first three reviews */}
                {reviews.slice(0, 3).map((reviewImage, index) => (
                  <img
                    key={index}
                    src={reviewImage.image}
                    alt={`Feature ${index + 1}`}
                    className="rounded-full w-10 h-10 border-2 border-black"
                  />
                ))}

                {/* If there are more than three reviews, display a + count */}
                {reviews.length > 3 && (
                  <div className="flex items-center justify-center rounded-full w-10 h-10 bg-white border-2 border-black text-black font-medium text-sm">
                    +{reviews.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 flex flex-row gap-1 justify-evenly w-full lg:w-1/2">
          {eventsCentres.map((eventsCentre, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl w-full shadow-lg overflow-hidden"
            >
              {/* Events Image */}
              <img
                src={eventsCentre.image}
                alt={eventsCentre.centreName}
                className="w-full h-48 object-cover"
              />

              {/* Meetings and Conferences Details */}
              <div className="bg-black p-4 h-full text-white">
                <p className="font-montserrat-alternates sm:text-lg font-semibold text-sm">
                  {eventsCentre.centreName}
                </p>
                <p className="font-montserrat text-xs sm:text-base flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4" />
                  {eventsCentre.address}
                </p>

                {/* Rating and Price Section */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex text-yellow-500">
                    {/* Renders 5 stars (static). 
                      If you have dynamic rating data, replace Array(5) with 
                      something like Array(hotel.rating) */}
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-3 h-3" />
                      ))}
                  </div>

                  <p className="font-semibold text-white text-xs sm:text-base">
                    #{eventsCentre.price?.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
