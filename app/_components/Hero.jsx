import React from 'react';
function Hero() {
  return (
    <section className="bg-grey-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manage Your Expense
            <strong className="font-extrabold text-red-700 sm:block">
              Control Your Money
                          </strong>
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            Start Creating your budget and save your money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm bg-red-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring focus:outline-none sm:w-auto"
              href="#"
              aria-label="Get started with our services"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded-sm px-12 py-3 text-sm font-medium text-red-600 shadow-sm hover:text-red-700 focus:ring focus:outline-none sm:w-auto"
              href="#"
              aria-label="Learn more about our offerings"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
