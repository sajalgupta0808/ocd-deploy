// src/Pages/Blogs.jsx
import React from "react";
import { Link } from "react-router-dom";

import img1 from '../assets/componets-bg/article1.png';
import img2 from '../assets/componets-bg/article2.png';
import img3 from '../assets/componets-bg/article3.png';

export default function Blogs() {
  const articles = [
    {
      id: 1,
      image: img1,
      title: "HOW CAR BODY POLISH CAN RESTORE FACTORY-LIKE FINISH.",
      desc: "EVERY CAR, WHETHER IT’S A DAILY DRIVER OR A LUXURY SPORTS MACHINE,",
      link: "/articles/1",
    },
    {
      id: 2,
      image: img2,
      title: "WHY HEADLIGHT SEALING AFTER POLISH IS A GAME-CHANGER.",
      desc: "KEEPING YOUR MOTORCYCLE LOOKING AS GOOD AS NEW ISN’T JUST ABOUT PRIDE;",
      link: "/articles/2",
    },
    {
      id: 3,
      image: img3,
      title: "BEST SOAP & WAX COMBOS FOR COATED CARS.",
      desc: "A MOTORCYCLE IS MORE THAN JUST A MACHINE; IT’S A PASSION FOR MANY",
      link: "/articles/3",
    },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="font-bebas uppercase text-3xl md:text-4xl text-center tracking-wider mb-3">
          DETAILING DEMYSTIFIED: <span className="text-custom-red">FROM MYTHS TO MASTERY.</span>
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
          Straight from the studio : insights, how-tos, and expert tips to help you protect what you drive.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article
              key={a.id}
              className="flex flex-col bg-[#1f1f1f] shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              {/* Top header panel (title + desc) */}
              <div className="px-6 py-6 bg-[#2a2a2a] min-h-[160px] flex flex-col justify-center">
                <h3 className="font-bebas uppercase text-lg md:text-xl leading-tight text-white">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-300 mt-3">{a.desc}</p>
              </div>

              {/* Image */}
              <div className="h-[270px] md:h-[290px] overflow-hidden bg-black">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-auto object-contain"
                  style={{ backgroundColor: '#000' }}
                />
              </div>

              {/* Bottom footer panel */}
              <div className="px-6 py-6 bg-[#2a2a2a]">
                {/* Only the text is clickable - not the whole card */}
                <Link
                  to={a.link}
                  className="text-white font-semibold hover:text-custom-red transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span>Read Article</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Read All Button centered with glow */}
        <div className="flex justify-center mt-12">
          <Link
            to="/articles"
            className="bg-custom-red px-8 py-3 text-white font-bold uppercase shadow-[0_24px_60px_rgba(255,0,0,0.25)]"
          >
            Read All
          </Link>
        </div>
      </div>
    </section>
  );
}