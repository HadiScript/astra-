import React from "react";
import { HelpCircle } from "react-feather";

export default function QuesAnswer() {
  const QuesAnswerData = [
    {
      question: "What services does Astra Analytica provide?",
      answer:
        "Astra Analytica specializes in a wide range of software development services, including web development, mobile development, game development, web 3.0 development, blockchain solutions, graphics designing, and video editing. We offer comprehensive solutions tailored to meet the unique needs of our clients.",
    },
    {
      question: "How experienced is the team at Astra Analytica?",
      answer:
        "At Astra Analytica, we take pride in our experienced team of professionals. Our team consists of skilled software developers, designers, and engineers who have extensive expertise in their respective domains. With a track record of successful projects and a commitment to staying up-to-date with the latest industry trends, our team is well-equipped to deliver high-quality solutions.",
    },
    {
      question:
        "How does Astra Analytica ensure the quality of its software solutions?",
      answer:
        "Quality is of utmost importance to us at Astra Analytica. We follow a rigorous quality assurance process throughout the software development lifecycle. Our team conducts thorough testing, including functional testing, performance testing, and usability testing, to ensure that our solutions meet the highest standards. We also value client feedback and actively incorporate it into our development process to continually improve the quality of our deliverables.",
    },
    {
      question:
        "How does Astra Analytica approach client collaboration and communication?",
      answer:
        "At Astra Analytica, we believe in building strong partnerships with our clients. We foster open and transparent communication channels to ensure that we understand your requirements, goals, and expectations. We actively involve you in the development process, providing regular updates, and milestone reviews, and seeking your feedback at each stage. Our collaborative approach ensures that we deliver solutions that align with your vision and business objectives.",
    },
  ];
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
          Questions & Answers
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          Discover valuable insights about our software house through these
          frequently asked questions and answers. Gain information about our
          services, company culture, and more to help you make an informed
          decision about partnering with us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        {QuesAnswerData.map((item, index) => (
          <div className="flex" key={index}>
            <HelpCircle className="h-8 text-emerald-600 me-3"></HelpCircle>
            <div className="flex-1">
              <h5 className="mb-2 text-lg font-semibold">
                {item.question}
                <span className="text-emerald-600"></span>{" "}
              </h5>
              <p className="text-slate-400">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
