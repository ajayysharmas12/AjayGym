import React from "react";
import pic from "../../../Images/pic.jpg";
import gympic2 from "../../../Images/gympic2.png";
function Recommendations() {
  return (
    <>
      <div
        className="bg-slate-900 w-full h-full pt-24 pb-24"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          height: "full",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center ">
          <div className=" px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8  hover:text-4xl ">
            <div className="hover:bg-slate-800 max-w-4xl p-5 bg-slate-600 rounded-2xl hover:scale-105 transition-transform duration-500 hover:border-2 hover:border-white">
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
                  <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200">
                    The Significance of In-Depth Consultation
                  </h2>

                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    Exploring the Benefits of Personalized Mentorship Programs
                    its recommended to have an in-depth consultation with a
                    professional. to give you expert Guidance for Optimal
                    Results
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-lg text-gray-800 dark:text-gray-200 ">
                    <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200-500">
                      Five Free Tips for Optimal Health
                    </h2>
                  </p>
                </div>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  <li className="ps-2">
                    <span className="font-bold text-gray-500">
                      I. Hydration Essentials: Maximizing the Benefits of
                      Supplements
                    </span>
                    <br />
                    When incorporating supplements like creatine into your
                    regimen, hydration becomes paramount. Ensure you're drinking
                    plenty of water throughout the day to support optimal
                    absorption and effectiveness.
                  </li>
                </ul>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  <li className="ps-2">
                    <span className="font-bold text-gray-500">
                      II. Fueling Your Workouts: Preparing Your Body for
                      Performance
                    </span>
                    <br />
                    For those utilizing pre-workout supplements, it's essential
                    to pair them with carbohydrates and a source of protein.
                    Quick and convenient options like peanut butter are favored
                    by many fitness enthusiasts for their energy-boosting
                    properties.
                  </li>
                </ul>

                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  <li className="ps-2">
                    <span className="font-bold text-gray-500">
                      III. Exercise Preparation: Prioritizing Warm-Up and
                      Stretching
                    </span>
                    <br />
                    Before diving into your workout routine, take the time to
                    properly warm up your body. Dynamic stretching exercises not
                    only help prevent injuries but also alleviate night cramps,
                    ensuring a smoother and more enjoyable workout experience.
                  </li>
                </ul>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  <li className="ps-2">
                    <span className="font-bold text-gray-500">
                      IV. Lifestyle Considerations: Navigating Smoking and
                      Alcohol Consumption
                    </span>
                    <br />
                    To optimize your fitness journey, it's crucial to avoid
                    smoking and limit alcohol consumption. These habits can
                    hinder progress and negatively impact overall health and
                    well-being.
                  </li>
                </ul>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  <li className="ps-2">
                    <span className="font-bold text-gray-500">
                      V. The Importance of Quality Sleep: Enhancing Recovery and
                      Performance
                    </span>
                    <br />
                    Finally, prioritize undisturbed sleep to support muscle
                    recovery and overall performance. Aim for a consistent sleep
                    schedule and create a relaxing bedtime routine to promote
                    restorative rest.
                    <br />
                    In conclusion, while the path to fitness success may seem
                    daunting, following these five simple recommendations can
                    significantly enhance your journey. By prioritizing
                    hydration, fueling your body with the right nutrients,
                    incorporating proper warm-up and stretching routines,
                    avoiding detrimental lifestyle habits, and prioritizing
                    quality sleep, you'll set yourself up for long-term success
                    in achieving your health and wellness goals. So take the
                    first step today and embark on your journey to a healthier,
                    happier you!
                  </li>
                </ul>

                <br />
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
                  ADVICE
                </a>
                <a
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                  href="#"
                >
                  HEALTH
                </a>
                <a
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                  href="#"
                >
                  CONSULTATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommendations;
