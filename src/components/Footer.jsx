import { logo } from "../assets";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-10 bg-primary border-b py-10 border-[#C0C0C0]">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 font-poppins">
        <div>
          <img src={logo} className="sm:w-20 sm:h-20 w-10 h-10 object-cover" alt="logo" />
          <p className="text-white mt-5 font-normal">
            We always make our customer happy by making the platform easily
            accessible as much as possible.
          </p>
        </div>
        <div>
          <h3 className="text-md text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
