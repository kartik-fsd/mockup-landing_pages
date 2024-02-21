import ReuseableCard from "../components/Cards/ReuseableCard";
import img from "../assets/mobile.jpg";
import img2 from "../assets/responsive.jpg";
import img3 from "../assets/image2.jpg";


function Intro() {
  const data = [
    {
      name: "Mobile First",
      description:
        "We develop with mobile in mind first , and scale upto larger scale upto larger screens.",
      imageSrc: img,
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Responsive Design",
      description:
        "We create design that adapt to different screen sizes ,from small mobile-devices to large desktop monitors.",
      imageSrc: img2,
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Cross-Browser Compatibility",
      description:
        "Our designs are tested for compatibility with different web browsers to ensure conisitent performance. ",
      imageSrc: img3,
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ];
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
        <h2 className="text-3xl font-extrabold text-gray-900">What we do</h2>
        <p className="mt-4 mb-2 text-md text-black sm:mb-6 sm:w-2/3 text-wrap">
          We build high quality website and web application that provide an
          optimal user experience across all device and screen device.
        </p>
        <ReuseableCard data={data}/>
      </div>
    </div>
  );
}

export default Intro;
