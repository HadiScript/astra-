import { Link } from "react-router-dom";

import React from "react";
import { blogs_data } from "../assets/data/blogs_data";

export default function BlogDetailComp() {
  return (
    <>
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {blogs_data.map((item, index) => (
              <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
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
      </section>
    </>
  );
}
