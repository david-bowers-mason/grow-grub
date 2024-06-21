// import { useParams } from 'react-router-dom'
// import React from "react"

export default function SinglePlant() {
  // const { id } = useParams()
  // const { data, isError, isLoading, error } =

  // if (!id) {
  //     throw new Error()
  // }
  // console.log("tell me what u see")
  return (
    <>
      {/* Page Banner */}
      <div>
        <div className="banner-container">
          <div className="mx-auto max-w-7xl">
            <div className="banner-flex">
              <div className="flex-1">
                <h2 className="banner-title">{plantData.plantName}</h2>
                <h3 className="py-3 text-xl italic text-gray-800">
                  {plantData.scientificName}
                </h3>
                <div className="mt-4 w-full resize-y md:max-w-xl">
                  <p className="text-lg text-gray-800">
                    {plantData.description}
                  </p>
                </div>
              </div>
              <div className="ml-8 flex-shrink-0">
                <img
                  src="/images/photos/tomato-plant.png"
                  alt={plantData.plantName}
                  className="h-50 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Care Instructions - the list items should be componentised */}
        <div>
          <div className="list-container">
            <h3 className="container-title">Care instructions</h3>
            <div className="list-grid">
              <div className="col-span-1">
                <img
                  className="h-12 w-12"
                  src="/images/flat-icons/soil.png"
                  alt="Soil"
                />
              </div>
              <div className="col-span-11">
                <h4 className="list-title">Soil </h4>
                <p className="list-description">
                  {plantData.careInstructions.soil}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/sun.png"
                    alt="Sunlight"
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Sunlight</h4>
                  <p className="list-description">
                    {plantData.careInstructions.sunlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/drop.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Watering</h4>
                  <p className="list-description">
                    {plantData.careInstructions.watering}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/fertilizer.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Fertilisation</h4>
                  <p className="list-description">
                    {plantData.careInstructions.fertilization}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/pruning-shears.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Pruning </h4>
                  <p className="list-description">
                    {plantData.careInstructions.pruning}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/bug-spray.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Pests </h4>
                  <p className="list-description">
                    {plantData.careInstructions.pests}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/pests.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Disease prevention </h4>
                  <p className="list-description">
                    {plantData.careInstructions.diseases}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="list-container">
              <h3 className="container-title">Planting</h3>
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/damage.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Outdoors </h4>
                  <p className="list-description">
                    {plantData.plantingTime.outdoors}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/indoor-plants.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Indoors </h4>
                  <p className="list-description">
                    {plantData.plantingTime.indoors}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/measure.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Spacing </h4>
                  <p className="list-description">
                    {plantData.plantingTime.spacing}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/calendar.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Season </h4>
                  <p className="list-description">
                    {plantData.plantingTime.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="list-container">
              <h3 className="container-title">Harvesting</h3>
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/harvest.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Season</h4>
                  <p className="list-description">
                    {plantData.harvesting.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="list-container">
              <div className="list-grid">
                <div className="col-span-1">
                  <img
                    className="h-12 w-12"
                    src="/images/flat-icons/idea.png"
                    alt={plantData.plantName}
                  />
                </div>
                <div className="col-span-11">
                  <h4 className="list-title">Tips</h4>
                  <p className="list-description">
                    {plantData.harvesting.tips}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="list-container">
            <h3 className="container-title">My Notes</h3>
          </div>
        </div>
      </div>
    </>
  )
}

const plantData = {
  plantName: 'Tomato',
  scientificName: 'Solanum lycopersicum',
  description:
    'Tomatoes are popular garden plants grown for their delicious fruits, which come in a variety of shapes, sizes, and colors.',
  careInstructions: {
    soil: 'Well-drained, fertile soil rich in organic matter.',
    sunlight: 'Full sun, at least 6-8 hours of direct sunlight per day.',
    watering:
      'Regular watering, keeping the soil consistently moist but not waterlogged.',
    fertilization:
      'Feed with balanced fertilizer at planting and during the growing season.',
    pruning: 'Remove suckers to encourage strong growth and fruit production.',
    pests:
      'Watch for pests like aphids, hornworms, and tomato fruitworms. Use organic pest control methods if needed.',
    diseases:
      'Prevent diseases like blight and wilt by ensuring good air circulation and avoiding overhead watering.',
  },
  plantingTime: {
    indoors:
      'Start seeds indoors 6-8 weeks before the last frost date in your area.',
    outdoors:
      'Transplant seedlings outdoors after all danger of frost has passed and soil temperatures are consistently above 55°F (13°C).',
    spacing:
      'Plant seedlings 18-24 inches apart in rows spaced 24-36 inches apart.',
    time: 'Spring: September to November. Summer: December to February',
  },
  harvesting: {
    time: 'Harvest tomatoes when they are firm, fully colored, and have reached their mature size. This is typically 60-85 days after transplanting.',
    tips: 'Pick tomatoes regularly to encourage continued fruit production.',
  },
}
