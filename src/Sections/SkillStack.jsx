import MiniCard from "../components/Cards/MiniCard"

function SkillStack() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Skills and Technologies</h2>
        <p className="mt-4 mb-2 text-md text-black sm:mb-6 sm:w-2/3 text-wrap">
         Our team of experienced developers offers you a wide range of skills and
         expertise to bring your web project to life. 
        </p>
        <MiniCard/>
    </section>
  )
}

export default SkillStack