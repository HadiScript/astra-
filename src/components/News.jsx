import image from "../assets/images/blog/01.jpg";
import image1 from "../assets/images/blog/02.jpg";
import image2 from "../assets/images/blog/03.jpg";
import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  const newsData = [
    {
      image: image,
      title: "arts",
      date: "20th February, 2023",
      time: "5 min read",
      headline: "11 Tips to Help You Get New Clients Through Cold Calling",
      powerdby: " Google",
    },
    {
      image: image1,
      title: "Illustration",
      date: "20th February, 2023",
      headline: "DigitalOcean launches first Canadian data centre in Toronto",
      powerdby: " Facebook",
    },
    {
      image: image2,
      title: "Music",
      date: "20th February, 2023",
      headline: "Using Banner Stands To Increase Trade Show Traffic",
      powerdby: " Linkedin",
    },
  ];
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
          Articles
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Some insightful articles for you to catch up on the latest trends and
          news of the global digital scenario
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                className="scale-110 group-hover:scale-100 transition-all duration-500"
                alt=""
              />
            </div>

            <div className="relative p-6">
              <div className="absolute start-6 -top-4">
                <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                  {item.title}
                </span>
              </div>

              <div className="">
                <div className="flex mb-4">
                  <span className="text-slate-400 text-sm">
                    <i className="uil uil-calendar-alt text-slate-900 dark:text-white me-2"></i>
                    {item.date}
                  </span>
                  <span className="text-slate-400 text-sm ms-3">
                    <i className="uil uil-clock text-slate-900 dark:text-white me-2"></i>
                    {item.time}
                  </span>
                </div>

                <Link
                  to={`/blog/${item.title}`}
                  className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out"
                >
                  {item.headline}
                </Link>

                <div className="flex justify-between items-center mt-3">
                  <Link
                    to="/blog-detail"
                    className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right"></i>
                  </Link>
                  <span className="text-slate-400 text-sm">
                    by{" "}
                    <Link
                      to="#"
                      className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium"
                    >
                      {item.powerdby}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
