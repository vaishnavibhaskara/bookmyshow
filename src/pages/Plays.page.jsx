import React from "react";

// component
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Hyderabad</h2>
            <div className="flex flex-wrap ">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzIlICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-nhumwxpebt-portrait.jpg"
                  title="`DONT BREATHE 2` (A) Platinum Theatre Play"
                  subtitle="English -> ₹500"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzIlICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-nhumwxpebt-portrait.jpg"
                  title="`DONT BREATHE 2` (A) Platinum Theatre Play"
                  subtitle="English -> ₹500"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzIlICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-nhumwxpebt-portrait.jpg"
                  title="`DONT BREATHE 2` (A) Platinum Theatre Play"
                  subtitle="English -> ₹500"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzIlICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00312665-nhumwxpebt-portrait.jpg"
                  title="`DONT BREATHE 2` (A) Platinum Theatre Play"
                  subtitle="English -> ₹500"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["Hindi", "Telegu", "English"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;