import img from "../../assets/image.jpg";
import img2 from "../../assets/mobile.jpg";
import img3 from "../../assets/cross.png";

const callouts = [
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

export default function ReuseableCard() {
  return (


          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-44">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-base font-medium text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-xs text-gray-500 text-wrap">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
 
  );
}
