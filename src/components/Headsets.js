import React from "react";

import Headshet1 from "../assets/img/headset-1.png";
import Headshet2 from "../assets/img/headset-2.png";
import Headshet3 from "../assets/img/headset-3.png";
import Headshet4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-6"data-aos="fade-down"data-aos-offset="300">Mixed Reality Headshet</h2>
        {/* GRID */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* item */}
          <div className="relative"data-aos="zoom-in"data-aos-offset="400" data-aos-delay="1000">
            <img src={Headshet1} />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p >
                sit amet risus nullam eget felis eget nunc lobortis mattis
                aliquam faucibus purus in massa tempor nec feugiat nisl pretium
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={Headshet2} />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p >
                sit amet risus nullam eget felis eget nunc lobortis mattis
                aliquam faucibus purus in massa tempor nec feugiat nisl pretium
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={Headshet3} />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p >
                sit amet risus nullam eget felis eget nunc lobortis mattis
                aliquam faucibus purus in massa tempor nec feugiat nisl pretium
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={Headshet4} />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">TPCASTT</h4>
              <p >
                sit amet risus nullam eget felis eget nunc lobortis mattis
                aliquam faucibus purus in massa tempor nec feugiat nisl pretium
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
