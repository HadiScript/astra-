import React from "react";
// import Navbar from "../../components/Navbar";
import { Link, useParams } from "react-router-dom";
// import lenovo_logo from "../../assets/images/company/lenovo-logo.png";
// import Footer from "../../components/Footer";
// import JobDetailComp from "../../components/job-detail-comp";
import {
  Book,
  Briefcase,
  Clock,
  DollarSign,
  MapPin,
  Monitor,
  UserCheck,
} from "react-feather";
import Navbar from "../components/partials/Navbar";
import ServicesComp from "../components/services-comp";
import { service_data } from "../assets/data/services_data";

export default function ServiceDetails() {
  const { slug } = useParams();
  const findedOne = service_data.find((x) => x.slug === slug);

  return (
    <>
      <Navbar navClass="justify-end " />
      <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
        <div className="container mt-10">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">
              {/* <div className="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
                <div className="md:ms-4 md:mt-0 mt-6">
                  <h5 className="text-xl font-semibold">Back-End Developer</h5>
                  <div className="mt-2">
                    <span className="text-slate-400 font-medium me-2 inline-block">
                      <i className="uil uil-building text-[18px] text-emerald-600 me-1"></i>{" "}
                      Lenovo pvt. ltd.
                    </span>
                    <span className="text-slate-400 font-medium me-2 inline-block">
                      <i className="uil uil-map-marker text-[18px] text-emerald-600 me-1"></i>{" "}
                      Beijing, China
                    </span>
                  </div>
                </div>
              </div> */}

              <h2 className="text-3xl font-semibold ">{findedOne.title}</h2>
              <h5 className="text-lg font-semibold mt-6">
                {findedOne.heading}
              </h5>

              <p className="text-slate-400 mt-4">{findedOne.para1}</p>
              <p className="text-slate-400 mt-4">{findedOne.para2}</p>

              <h5 className="text-lg font-semibold mt-6">
                Features Of Infinititech {findedOne.title}
              </h5>
              <p className="text-slate-400 mt-4">{findedOne.pointsPara}</p>
              <ul className="list-none">
                {findedOne.points.map((x, index) => (
                  <li key={index} className="text-slate-400 mt-2">
                    <i className="uil uil-arrow-right text-emerald-600 me-1"></i>
                    {x}
                  </li>
                ))}
              </ul>

              <h5 className="text-lg font-semibold mt-6">Why Choose Us?</h5>
              <p className="text-slate-400 mt-5">{findedOne.whyUs}</p>

              <div className="mt-5">
                <Link
                  to="/quote"
                  className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto"
                >
                  Quote
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
              <div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                <div className="p-6">
                  <h5 className="text-lg font-semibold">Infinity Tech</h5>
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
                  <ul className="list-none">
                    <li className="flex items-center">
                      <UserCheck className="h-5 w-5"></UserCheck>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">
                          Experienced & Passionate Team
                        </span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <MapPin className="h-5 w-5"></MapPin>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">
                          Lahore, Pakistan
                        </span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <Monitor className="h-5 w-5"></Monitor>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">
                          Collaborate with cross-functional teams
                        </span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <Briefcase className="h-5 w-5"></Briefcase>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">
                          Develop clean and efficient code
                        </span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <Book className="h-5 w-5"></Book>

                      <div className="ms-4">
                        <span className="text-emerald-600 font-medium text-sm">
                          Implement and maintain
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
            Related Services
          </h3>
        </div>
        <ServicesComp limit={4} />
      </div>
      {/* <div className="container-fluid md:mt-24 mt-16">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-8 md:col-span-7">
                  <div className="ltr:md:text-left rtl:md:text-right text-center relative z-1">
                    <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                      Explore a job now!
                    </h3>
                    <p className="text-slate-400 max-w-xl">
                      Search all the open positions on the web. Get your own
                      personalized salary estimate. Read reviews on over 30000+
                      companies worldwide.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 md:col-span-5">
                  <div className="ltr:text-right rtl:text-left relative z-1">
                    <Link
                      to="/employer-detail"
                      className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md"
                    >
                      Apply Now
                    </Link>
                    <Link
                      to="/aboutus"
                      className="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -start-5">
                <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
              </div>

              <div className="absolute -bottom-5 -end-5">
                <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <br />
      {/* <Footer /> */}
    </>
  );
}
