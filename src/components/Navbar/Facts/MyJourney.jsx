import React from "react";
import pic from "../../../Images/pic.jpg";
import picgym from "../../../Images/picgym.jpg";
function MyJourney() {
  return (
    <>
      <div
        className=" sm:px-6 lg:px-8 flex flex-col"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560563609-3b4b1f5c2122?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center h-screen text-center">
          <div className="lg:col-span-3  mb-24">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Taking the first step is hard..
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Agreed! perhaps, I'm here to help.
            </p>
          </div>
          <div className="lg:col-span-4 mt-10 lg:mt-0 mr-24 mb-24 ">
            <img
              style={{ backgroundPosition: "center", backgroundSize: "cover" }}
              className="rounded-xl mt-24 w-8/12 float-right transition-transform hover:scale-110 duration-500"
              src="https://images.unsplash.com/photo-1608496601160-f86d19a44f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3Dhttps://images.unsplash.com/photo-1608496601160-f86d19a44f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
              alt="Image Description"
            />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className=" px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8  hover:text-4xl ">
            <div className="hover:bg-slate-900 max-w-4xl p-5  rounded-2xl hover:scale-105 transition-transform duration-500 hover:border-2 hover:border-white">
              <div className="flex justify-between items-center mb-6 ">
                <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                  <div className="flex-shrink-0">
                    <img className="size-12 rounded-full" src={pic} />
                  </div>

                  <div className="grow ">
                    <div className="flex justify-between items-center gap-x-2">
                      <div>
                        <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                          <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                            <span className="font-semibold text-white">
                              Mr. Souptik
                            </span>
                          </div>
                        </div>

                        <ul className="text-xs text-gray-500">
                          <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                            Jan 18
                          </li>
                          <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                            8 min read
                          </li>
                        </ul>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                        >
                          <svg
                            className="size-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                          Tweet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 md:space-y-8">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold md:text-3xl dark:text-slate-500">
                    Journey to Fitness: The Importance of Gym and Knowledge
                  </h2>

                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Embarking on a journey to achieve fitness is not merely
                    about sweating it out in the gym; it's a commitment to a
                    lifestyle change. Meet Souptik, a fitness enthusiast who
                    understands the significance of hitting the gym regularly
                    and acquiring the right knowledge to sculpt his body into a
                    masterpiece. However, Souptik recognizes that transforming
                    his physique is not an overnight endeavor. Just as it takes
                    time for a sapling to grow into a sturdy tree, building a
                    fit body requires dedication, perseverance, and above all,
                    patience.
                  </p>
                </div>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  We're proud to be a part of creating a more open culture and
                  to continue building a product that supports this vision.
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <h2 className="text-2xl font-bold md:text-3xl dark:text-slate-500">
                    Starting the Journey: From Lazy Days to Fitness Freak
                  </h2>
                  Reflecting on the past five years, Souptik reminisces about
                  his transformation from a self-proclaimed couch potato to a
                  dedicated bodybuilder. Gone are the days of mindlessly
                  indulging in fries during every lazy hour. Instead, he has
                  embraced a disciplined routine comprising rigorous workouts
                  and mindful nutrition choices. His journey serves as a
                  testament to the power of consistency and determination in
                  achieving fitness goals.
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <h2 className="text-2xl font-bold md:text-3xl dark:text-slate-500">
                    Importance of Direction: Guiding the Way to Success
                  </h2>
                  In the pursuit of fitness, being on the right track is
                  paramount. Imagine running a race without defined tracks or
                  signposts. It's a futile effort leading nowhere. Similarly,
                  without proper guidance and direction in fitness endeavors,
                  one may find themselves lost in a maze of conflicting
                  information and ineffective routines. Souptik understands this
                  all too well he values the guidance provided by knowledgeable
                  trainers and reputable resources in his quest for a fitter
                  self.
                </p>
                <blockquote className="text-center p-4 sm:px-7 ">
                  <p className="mt-8 mb-8 text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
                    Strength doesn't come from what you can do. <br />
                    It comes from overcoming the things you once thought you
                    couldn't
                  </p>
                  <p className="text-gray-400 text-xl">
                    ~ Me posing my back after 6 Months{" "}
                  </p>
                </blockquote>
                <figure className="flex justify-center ">
                  <img
                    className=" w-7/12 rounded-xl h-2/5  mb-24"
                    src={picgym}
                    alt="Image Description"
                  />
                </figure>
                <div className="space-y-3">
                  <p className="text-lg text-gray-800 dark:text-gray-200 ">
                    <h2 className="text-2xl font-bold md:text-3xl dark:text-slate-500">
                      The Role of Knowledge: Building Muscle and Mind
                    </h2>
                    Knowledge is the cornerstone of any successful fitness
                    journey. Understanding the principles of bodybuilding,
                    nutrition, and recovery is crucial for making informed
                    decisions and maximizing results. Souptik recognizes the
                    importance of continually expanding his knowledge base,
                    whether it's studying workout techniques, learning about
                    macro and micronutrients, or staying updated on the latest
                    fitness trends. Armed with knowledge, he approaches his
                    workouts with purpose and precision, optimizing each session
                    for maximum gains.
                  </p>
                </div>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  <li className="ps-2">
                    <span className="font-bold text-gray-500">
                      Embracing Patience: The Key to Long-Term Success
                    </span>
                    <br />
                    Patience is indeed a virtue, especially in the realm of
                    fitness. Building a strong, healthy body is not a sprint but
                    a marathon. Souptik acknowledges that sustainable progress
                    takes time and that shortcuts often lead to disappointment.
                    Instead of chasing quick fixes or instant results, he
                    embraces the journey, celebrating every small victory along
                    the way. With patience as his ally, Souptik remains
                    committed to his long-term fitness goals, knowing that each
                    step forward brings him closer to his ultimate destination.
                    Stewart Scott-Curran, Intercom's Director of Brand Design.
                  </li>
                </ul>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <span className="font-bold text-gray-200">
                    Conclusion: A Journey of Transformation <br />
                  </span>
                  In conclusion, Souptik's journey exemplifies the
                  transformative power of dedication, knowledge, and patience in
                  achieving fitness goals. By prioritizing regular gym sessions
                  and equipping himself with the right information, he has
                  overcome inertia and transformed his body and lifestyle.
                  Aspiring fitness enthusiasts can learn valuable lessons from
                  Souptik's story, realizing that the path to fitness is not
                  about shortcuts or quick fixes but about embracing the journey
                  and committing to long-term growth. So, lace up your sneakers,
                  hit the gym, and embark on your own journey to a fitter,
                  healthier you!
                </p>
                <div>
                  <a
                    className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                    href="#"
                  >
                    GYM
                  </a>
                  <a
                    className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                    href="#"
                  >
                    MENTALITY
                  </a>
                  <a
                    className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                    href="#"
                  >
                    PERSISTENCE
                  </a>
                  <a
                    className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                    href="#"
                  >
                    MOTIVATED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyJourney;
