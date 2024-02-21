import PropTypes from 'prop-types'

export default function ReuseableCard({data}) {
  return (
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {data.map((callout) => (
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
                <p className="mt-1 text-xs text-gray-500 text-wrap leading-4">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
 
  );
}



ReuseableCard.propTypes = {
  data : PropTypes.array.isRequired
}

