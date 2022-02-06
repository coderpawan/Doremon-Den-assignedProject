import React from "react";
import Navbar from "../components/Navbar";
import YoutubeSize from "../images/yotubeSize.png";
import Lock from "../images/lock.png";
import Profile from "../images/profile.png";

const WatchLectures = () => {
  return (
    <div className="flex lg:flex-row flex-col bg-gray-100 mt-7 w-[300px] md:w-auto">
      <img src={YoutubeSize} alt="" className="my-7 mx-5" />

      <div className="lg:mt-9 text-center lg:text-left">
        <div className="my-3 text-2xl">Introduction</div>
        <div className="my-3 text-xl">1 hr 30 min</div>
        <div className="my-3 text-xl">Introduction to Product Management</div>
      </div>
      <div className="lg:mt-20 mt-2 text-center lg:text-left mb-5 text-blue-500 underline lg:mr-7 lg:ml-14">
        Watch Now
      </div>
    </div>
  );
};
const LockLectures = () => {
  return (
    <div className="flex lg:flex-row flex-col bg-gray-100 mt-7 w-[300px] md:w-auto">
      <img src={YoutubeSize} alt="" className="my-7 mx-5" />

      <div className="lg:mt-9 text-center lg:text-left">
        <div className="my-3 text-2xl">Introduction</div>
        <div className="my-3 text-xl">1 hr 30 min</div>
        <div className="my-3 text-xl">Introduction to Product Management</div>
      </div>
      <img
        src={Lock}
        alt="lock"
        className="lg:ml-20 ml-32 mb-5 mt-5 lg:mt-20 h-7 w-5 lg:w-auto"
      />
    </div>
  );
};

const LecturesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row md:mt-12 mt-6 lg:ml-32 ml-10">
        <div className="">
          <div className="font-bold lg:text-5xl md:text-3xl text-2xl text-[#2C62B3]">
            Hi Tanay,{" "}
          </div>
          <div className="font-semibold lg:text-4xl md:text-2xl text-xl text-[#2C62B3]">
            Welome to the PM course!
          </div>
        </div>
        <div className="flex relative lg:mt-11 md:mt-7 mt-8 lg:left-[20%] md:left-[8%]">
          <div className="lg:px-20 px-10 bg-[#2C62B3] h-10 md:mx-5 mx-0 rounded-lg py-1 font-bold text-white">
            Lectures
          </div>
          <div className="lg:px-14 px-5 border-solid border-[#2C62B3] border-2 h-10 mx-5 rounded-lg py-1 font-bold text-[#2C62B3]">
            Assignments
          </div>
        </div>
      </div>
      <div className="w-[82%] md:w-[90%] lg:w-[82%] h-[1px] bg-gray-200 mt-7 lg:ml-32 ml-10"></div>
      <div className="flex flex-col md:flex-row md:mt-5 mt-6 lg:ml-32 ml-10 mb-24">
        <div className="">
          <div className="font-bold md:text-3xl text-2xl text-[#2C62B3]">
            Topics Covered
          </div>

          <WatchLectures />
          <LockLectures />
          <LockLectures />
          <LockLectures />
          <div className="text-blue-500 underline mt-7 text-lg">
            Show all topics
          </div>
        </div>
        <div className="lg:ml-16 md:ml-8 mt-8 md:mt-0">
          <div className="">
            <div className="font-bold md:text-3xl text-2xl text-[#2C62B3]">
              Instructors
            </div>
            <div className="mt-8 flex">
              <div className="">
                <img
                  src={Profile}
                  alt=""
                  className="md:h-40 md:w-40 h-32 w-32"
                />
                <div className="font-bold text-xl text-center mt-5">
                  Tanay Kedia
                </div>
                <div className="font-medium text-lg text-center mt-2">
                  PM, PayTM
                </div>
              </div>
              <div className="md:ml-12 ml-9">
                <img
                  src={Profile}
                  alt=""
                  className="md:h-40 md:w-40 h-32 w-32"
                />
                <div className="font-bold text-xl text-center mt-5">
                  Tanay Kedia
                </div>
                <div className="font-medium text-lg text-center mt-2">
                  PM, PayTM
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="font-bold md:text-3xl text-2xl text-[#2C62B3]">
                People who got the job
              </div>
              <div className="md:flex mt-6">
                <img
                  src={Profile}
                  alt="profile"
                  className="md:h-40 md:w-40 h-32 w-32 relative md:left-0 left-[25%]"
                />
                <div className="mt-6 relative md:left-0 left-[10%]">
                  <div className="flex ml-3">
                    <div className="text-xl font-bold">Tanu Modi</div>
                    <div className="text-lg font-medium ml-3">
                      APM, Flipkart
                    </div>
                  </div>
                  <div className="ml-3 w-64 text-lg mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </div>
                </div>
              </div>
              <div className="md:flex mt-6">
                <img
                  src={Profile}
                  alt="profile"
                  className="md:h-40 md:w-40 h-32 w-32 relative md:left-0 left-[25%]"
                />
                <div className=" mt-6 relative md:left-0 left-[10%]">
                  <div className="flex ml-3">
                    <div className="text-xl font-bold">Tanu Modi</div>
                    <div className="text-lg font-medium ml-3">
                      APM, Flipkart
                    </div>
                  </div>
                  <div className="ml-3 w-64 text-lg mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </div>
                </div>
              </div>
              <div className="md:flex mt-6">
                <img
                  src={Profile}
                  alt="profile"
                  className="md:h-40 md:w-40 h-32 w-32 relative md:left-0 left-[25%]"
                />
                <div className=" mt-6 relative md:left-0 left-[10%]">
                  <div className="flex ml-3">
                    <div className="text-xl font-bold">Tanu Modi</div>
                    <div className="text-lg font-medium ml-3">
                      APM, Flipkart
                    </div>
                  </div>
                  <div className="ml-3 w-64 text-lg mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-blue-500 underline text-lg mt-4">
            Show more reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturesPage;
