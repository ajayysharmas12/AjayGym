import React from "react";
import pic from "../../../Images/pic.jpg";
import gympic2 from "../../../Images/gympic2.png";
const FactNutrition = () => {
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
                    The Importance of Diet for Beginners
                  </h2>

                  <p className="text-lg text-gray-800 dark:text-gray-400">
                    For newcomers to the world of fitness and bodybuilding,
                    relying solely on supplements might not be the best
                    approach. Instead, focus on maintaining a healthy diet that
                    ensures your body receives the necessary macronutrients
                    every day.
                  </p>
                </div>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200-500">
                    Embrace Culinary Creativity
                  </h2>
                  Nutrition can sometimes feel mundane, especially when you're
                  constantly consuming the same foods from the grocery store.
                  However, this is an opportunity to become an innovator in the
                  kitchen. Experiment with new recipes and ingredients to keep
                  your meals exciting and nutritious.
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200-500">
                    Prioritize Macronutrients
                  </h2>
                  In bodybuilding, paying attention to macronutrients –
                  carbohydrates, proteins, and fats – is crucial. Consuming
                  carbohydrates about an hour to 30 minutes before your workout
                  can help replenish glycogen stores, providing energy for
                  intense cardio sessions or demanding weightlifting sessions.
                </p>
                <blockquote className="text-center p-4 sm:px-7 ">
                  <p className="mt-8 mb-8 text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
                    Strive for progress, not perfection
                  </p>
                  <p className="text-gray-400 text-xl">
                    ~ Me posing my back after a year with proper nutrition
                    noticed growth
                  </p>
                </blockquote>
                <figure className="flex justify-center ">
                  <img
                    className=" w-7/12 rounded-xl h-2/5  mb-24"
                    src={gympic2}
                    alt="Image Description"
                  />
                </figure>
                <div className="space-y-3">
                  <p className="text-lg text-gray-800 dark:text-gray-200 ">
                    <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200-500">
                      Replenish Electrolytes
                    </h2>
                    During workouts, your body loses electrolytes through sweat,
                    leading to imbalances in sodium and potassium levels. It's
                    essential to replenish these electrolytes to maintain proper
                    bodily functions and overall health. Incorporating
                    electrolyte-rich drinks or foods into your routine can help
                    achieve this balance.
                  </p>
                </div>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                  <li className="ps-2">
                    <span className="font-bold text-gray-500">
                      Mindful Eating
                    </span>
                    <br />
                    While it's tempting to indulge in foods that please your
                    taste buds, it's essential to prioritize nutrition over
                    temporary satisfaction. Make mindful choices that benefit
                    your body's needs, even if it means making gradual
                    adjustments to your diet.
                  </li>
                </ul>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <span className="font-bold text-gray-200">
                    Hydration is Key <br />
                  </span>
                  Staying hydrated throughout the day is fundamental for overall
                  health and optimal performance during workouts. Additionally,
                  consuming a post-workout meal within 30 minutes to an hour
                  allows your body to efficiently absorb nutrients when it needs
                  them most. In conclusion, nutrition is the cornerstone of
                  bodybuilding success. By understanding and implementing these
                  nutritional guidelines, you can support your fitness journey
                  and achieve your desired results effectively. Remember,
                  consistency and dedication to a well-balanced diet are key to
                  reaching your fitness goals.
                </p>
                <div>
                  <div className="space-y-3">
                    <p className="text-lg text-gray-800 dark:text-gray-200 ">
                      <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200-500">
                        The Role of Nutrition in Mental Health
                      </h2>
                      Beyond physical gains, nutrition significantly impacts
                      mental well-being. A balanced diet rich in essential
                      nutrients supports cognitive function, mood regulation,
                      and overall mental clarity. As you embark on your
                      bodybuilding journey, prioritize foods that nourish both
                      your body and mind. Incorporating a variety of fruits,
                      vegetables, lean proteins, and healthy fats into your
                      meals can enhance your mood, increase energy levels, and
                      promote mental focus during workouts.
                    </p>
                  </div>
                  <br />
                  <div className="space-y-3">
                    <p className="text-lg text-gray-800 dark:text-gray-200 ">
                      <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200-500">
                        The Importance of Rest and Recovery
                      </h2>
                      In addition to proper nutrition, adequate rest and
                      recovery are essential for muscle growth and overall
                      well-being. During periods of rest, your muscles repair
                      and rebuild, allowing for optimal gains in strength and
                      size. Incorporate rest days into your training regimen and
                      prioritize quality sleep to support muscle recovery and
                      optimize performance.
                    </p>
                  </div>
                  <br />
                  <div className="space-y-3">
                    <p className="text-lg text-gray-800 dark:text-gray-200 ">
                      <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200-500">
                        Seeking Professional Guidance
                      </h2>
                      While these nutritional guidelines provide a solid
                      foundation for your bodybuilding journey, seeking
                      personalized guidance from a registered dietitian or
                      nutritionist can offer invaluable support. A professional
                      can assess your unique nutritional needs, tailor a meal
                      plan to your goals, and provide ongoing support and
                      accountability throughout your fitness journey.
                    </p>
                  </div>
                  <br />
                  <div className="space-y-3">
                    <p className="text-lg text-gray-800 dark:text-gray-200 ">
                      <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-200-500">
                        Conclusion
                      </h2>
                      In conclusion, nutrition plays a fundamental role in
                      bodybuilding success, impacting both physical and mental
                      health. By prioritizing a balanced diet rich in
                      macronutrients, staying hydrated, and practicing mindful
                      eating habits, you can optimize your performance,
                      accelerate muscle growth, and enhance overall well-being.
                      Remember to listen to your body, prioritize rest and
                      recovery, and seek professional guidance when needed. With
                      dedication, consistency, and smart nutritional choices,
                      you can achieve your fitness goals and unlock your full
                      potential.
                    </p>
                  </div>
                  <br />
                  <p className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200">
                    GYM
                  </p>
                  <p className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200">
                    NUTRITION
                  </p>
                  <p className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200">
                    EATING RIGHT
                  </p>
                  <p className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200">
                    GUT HEALTH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactNutrition;
