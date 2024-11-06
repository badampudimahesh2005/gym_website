import React from "react";

const Coach = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-black">
      {/* Header Section */}
      <div className="w-full text-center py-10">
        <div className="w-full px-10">
          <div>
            <div className="text-4xl font-bold italic flex justify-center items-center w-2/5 mx-auto text-center">
              <span className="text-white">Personal</span>
              <span className="text-blue-500"> Coach Mode</span>
            </div>
            <div className="w-3/5 mx-auto mt-8 text-lg leading-8 text-white">
              Expand your personal training business with Personal Coach Mode.
              Reduce your average time spent per client by connecting with
              fitness savvy clients remotely to provide personal workout plans,
              track their workout progress, and provide feedback.
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-md">
            START 14 DAY FREE TRIAL
          </button>
        </div>
      </div>

      {/* Jefit Community Members Section */}
      <div className="mt-16 w-1/2 mx-auto flex justify-center gap-2">
        <h2 className="text-4xl font-bold text-white">Jefit Community Members</h2>
      </div>

      {/* Main Content */}
      <div className="w-4/5 mx-auto mt-24 flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full lg:w-3/5">
          <h3 className="text-xl font-semibold text-center lg:text-left text-blue-500">
            Lower Your Time Spent On Each Client
          </h3>
          <p className="mt-4 text-lg leading-8 text-white">
            Quickly and efficiently coach clients via JEFIT allowing you to
            expand your client base without increasing your time invested.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-center lg:text-left text-blue-500">
            Easily Build and Sell Workout Plans
          </h3>
          <p className="mt-4 text-lg leading-8 text-white">
            Develop and distribute your premium workout plan with JEFIT’s robust
            exercise and workout plan libraries.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-center lg:text-left text-blue-500">
            Build Your Brand
          </h3>
          <p className="mt-4 text-lg leading-8 text-white">
            Build a profile that highlights your experience, client results, or
            certifications and attracts future clients.
          </p>

          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-md">
            START HERE
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/5">
          <img
            src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web2.png"
            alt="block1"
            className="w-full h-[600px]"
          />
        </div>
      </div>

      {/* Client Management Section */}
      <div className="w-4/5 mx-auto mt-16 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <div className="flex text-5xl font-bold gap-3">
            <span className="text-white">Client</span>
            <span className="text-blue-500">Management</span>
          </div>
          <div className="flex mt-4 text-4xl font-semibold gap-3 text-center lg:text-left">
            <span className="text-white">Coach More</span>
            <span className="text-blue-500">Clients in Less Time</span>
          </div>
          <p className="mt-4 text-lg leading-8 text-white">
            . Easily onboard new clients with JEFIT's robust online routine
            building and distribution system.
          </p>
          <p className="mt-4 text-lg leading-8 text-white">
            . JEFIT's premium exercise library coaches clients during their
            workout with exercise instructions and HD video demonstrations.
          </p>
          <p className="mt-4 text-lg leading-8 text-white">
            . Limit time spent coaching with advanced analytics, insights, and
            automated notifications from clients logging their workouts.
          </p>
          <p className="mt-4 text-lg leading-8 text-white">
            . JEFIT's feature-rich in-app messenger makes form reviews or
            workout plan updates quick and simple.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-md">
            START EXPLORING
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png"
            alt="block2"
            className="mt-12 lg:mt-0"
          />
        </div>
      </div>

      {/* Premium Workout Section */}
      <div className="w-4/5 mx-auto mt-24 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png"
            alt="block3"
            className="mt-12 lg:mt-0"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex text-6xl font-bold gap-4 text-left">
            <span className="text-white">Premium</span>
            <span className="text-blue-500">Workout</span>
          </div>
          <div className="flex mt-4 text-3xl italic font-semibold gap-4 text-left">
            <span className="text-blue-500">Easily personalize</span>
            <span className="text-white">your workout plans</span>
          </div>
          <p className="mt-4 text-lg leading-8 text-white">
            Quickly and efficiently coach clients via JEFIT allowing you to
            expand your client base without increasing your time invested.
          </p>
          <p className="mt-4 text-lg leading-8 text-white">
            JEFIT teaches your clients how to perform each exercise with
            detailed instructions and an HD video mid-workout.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-md">
            START EXPLORING
          </button>
        </div>
      </div>

      {/* Coach Branding Section */}
      <div className="w-4/5 mx-auto mt-16 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <div className="flex text-7xl font-bold gap-4 text-left">
            <span className="text-white">Coach</span>
            <span className="text-blue-500">Branding</span>
          </div>
          <div className="text-5xl font-medium mt-4 text-left">
            <span className="text-white">Build a reputation & let new </span>
            <span className="text-blue-500">clients come to you.</span>
          </div>
          <p className="mt-4 text-lg leading-8 text-white">
            Be one of the first Coaches on JEFIT and start building your
            reputation.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-md">
            START EXPLORING
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png"
            alt="block4"
            className="mt-12 lg:mt-0"
          />
        </div>
      </div>

      {/* Start Your Free Trial Section */}
      <div className="w-4/5 mx-auto mt-16 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/5">
          <img
            src="https://www.jefit.com/wp/wp-content/uploads/2020/10/coachiphonex.png"
            alt="block5"
            className="mt-12 lg:mt-0"
          />
        </div>
        <div className="w-full lg:w-3/5 text-left">
          <div className="text-5xl lg:text-7xl font-semibold">
            <span className="text-white">Start Your</span>
            <span className="text-blue-500"> Free Trial.</span>
          </div>
          <p className="mt-8 text-lg leading-8 text-white">
            JEFIT’s mobile and web software platform can save personal trainers
            1 hour of daily time managing each client while allowing you to
            coach more clients than ever.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-md">
            START YOUR FREE TRIAL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coach;
