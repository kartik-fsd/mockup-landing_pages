import banner from "../assets/banner.jpg";
import bcIMg from "../assets/Polygon.svg";
function Banner() {
  return (
    <div
      className="container flex flex-col justify-center p-6 mx-auto  sm:py-12 lg:py-24 lg:flex-row"
      style={{
        backgroundImage: `url(${bcIMg})`,
      }}
    >
      <div className="flex items-center justify-center p-4 mt-6 lg:mt-0 h-62 sm:h-70 lg:h-86 xl:h-102 2xl:h-118 rounded-xl">
        <img
          src={banner}
          alt=""
          className="object-contain rounded-xl h-60 sm:h-80 lg:h-76 xl:h-92 2xl:h-108"
        />
      </div>
      <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-4xl font-bold leadi sm:text-5xl">
          We build the Web{" "}
          <span className="dark:text-purple-400"> together</span>
        </h1>
        <p className="mt-4 mb-2 text-md text-black sm:mb-6">
          Join 1% of the Web Developer. Build a better product
        </p>
        <div className="flex flex-col space-y-2 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-5 py-2 text-lg font-semibold rounded text-gray-800 dark:bg-purple-400 dark:text-gray-50"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
