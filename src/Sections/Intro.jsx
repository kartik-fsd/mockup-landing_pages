import ReuseableCard from "../components/Cards/ReuseableCard";

function Intro() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
        <h2 className="text-3xl font-extrabold text-gray-900">What we do</h2>
        <p className="mt-4 mb-2 text-md text-black sm:mb-6 sm:w-2/3 text-wrap">
          We build high quality website and web application that provide an
          optimal user experience across all device and screen device.
        </p>
        <ReuseableCard />
      </div>
    </div>
  );
}

export default Intro;
