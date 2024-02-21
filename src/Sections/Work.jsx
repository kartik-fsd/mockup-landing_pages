import ReuseableCard from "../components/Cards/ReuseableCard";
import img1 from "../assets/start.jpg";
import img2 from "../assets/process2.jpg";
import img3 from "../assets/team.jpg"

function Work() {

    const work = [
        {
            name :"Meet the team",
            description : "our team of experienced developers, designers, and product managers are ready to help you build your next big thing.",
            imageSrc: img3,
            imageAlt:
              "meet our skilled team.",
            href: "#",
        },
        {
            name:"Our Proccess",
            description : "Whether your just starting out or you already have an exisiting project ,We'll work with you every step every step of the way to ensure your project is success.",
            imageSrc: img2,
            imageAlt: "Process",
            href: "#",
        },
        {
            name :"Get Started",
            description :"Ready to get started ? Contact us to learn more about our services and pricing.",
            imageSrc: img1,
            imageAlt: "Get started",
            href: "#",
        }
    ]
  return (
    <div className="mx-auto max-w-5xl p-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl  sm:py-24 lg:max-w-none">
      <h2 className="text-3xl font-extrabold text-gray-900">How it works</h2>
      <ReuseableCard data={work}/>
    </div>
  </div>
  )
}

export default Work