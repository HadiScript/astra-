import React from "react";
import CountUp from "react-countup";

export default function JobCounter() {
  return (
    <div className="container">
      <div className="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
        <div className="counter-box text-center">
          <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white my-primary-text">
            <CountUp start={1010} end={1258} duration={3} />
          </h1>
          <h5 className="counter-head text-sm font-semibold my-dim-text uppercase">
            Projects
          </h5>
        </div>

        <div className="counter-box text-center">
          <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white my-primary-text">
            <CountUp start={2} end={125} duration={4} />+
          </h1>
          <h5 className="counter-head text-sm font-semibold my-dim-text uppercase">
            Clients
          </h5>
        </div>

        <div className="counter-box text-center">
          <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white my-primary-text">
            <CountUp start={0} end={40} duration={4} />+
          </h1>
          <h5 className="counter-head text-sm font-semibold my-dim-text uppercase">
            Employees
          </h5>
        </div>
      </div>
    </div>
  );
}
