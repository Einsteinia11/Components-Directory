import React, { useState } from "react";

function Navbar1() {
  const [activeIndex, setActiveIndex] = useState(null)
  function handleNavClick(index){
    setActiveIndex(index)
  }
  return (
    <div className="bg-black flex justify-center">
      <div className=" my-5 flex font-[outfit] font-extralight text-sm justify-center bg-white/10 border-1 border-white/10 rounded-full px-2 h-10 backdrop-blur-lg">
        {["Home", "Work", "About", "Blog", "More", "Book a Call"].map(
          (item, index) => (
            <div key={index} className=" text-white/80 hover:text-white">
              {index === 5 ? (
                <div className="bg-white/20 rounded-full mt-1 px-3 py-1 bg-gradient-to-b from-black/50 to-gray/10 shadow-white/10 shadow-xl">
                  <button>{item}</button>
                </div>
              ) : (
                <div className="">
                  <button onClick={() => handleNavClick(index)}>
                    {index == activeIndex ? (
                      <div className="">
                        <div className="relative flex items-center justify-center shadow-white shadow-xl">
                          <div
                            className={`absolute flex items-center ${
                              index === 0 || index === 4 ? "mr-7" : ""
                            } mx-2 bg-white w-1/2 h-0.5`}
                          ></div>
                        </div>

                        <div
                          className={` ${
                            index === 0 ? "mr-5" : "mx-5"
                          } ${index === 4 ? "ml-1 mr-7" : ""} shadow-white shadow-md bg-gradient-to-t from-black/70 to-white/40 rounded-full px-3 py-1 mt-1 `}
                        >
                          {item}
                        </div>
                      </div>
                    ) : (
                      <div className="mx-5 mt-2">{item}</div>
                    )}
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar1;
