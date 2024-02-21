import RatingSection from "../components/Rating/RatingSection"


function Reviews() {
  return (
    <div className="mx-auto max-w-5xl p-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-center font-bold">
            What clients say about us
        </h1>
        <div className="mx-auto max-w-2xl sm:py-12 lg:max-w-none">
        <RatingSection/>
        </div>
        
  </div>
  )
}

export default Reviews