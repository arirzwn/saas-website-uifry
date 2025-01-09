import { useState } from "react";
import { Button } from "../components/Button.jsx";

const dataNews = [
  {
    img: "/Rectangle%2021.png",
    id: 1,
    category: "Growth",
    title: "15 ways to grow your saas in 21 days with no money",
  },
  {
    img: "/berita2.png",
    id: 2,
    category: "Career",
    title: "Why everyone is moving today to subscriptions",
  },
  {
    img: "/berita3.png",

    id: 3,
    category: "Design",
    title: "9 ways to make it quick and never look back again in your life",
  },
];

export function News() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataNews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + dataNews.length) % dataNews.length,
    );
  };

  return (
    <div className="mt-10 gap-x-6 md:grid md:grid-cols-3">
      {dataNews.map((objectNews, index) => (
        <div
          className={` ${index === currentIndex ? "block" : "hidden"} md:block`}
          key={index}
        >
          <figure className="h-64 w-full">
            <img
              src={objectNews.img}
              alt="Thumbnail News"
              className="h-full w-full object-cover"
            />
          </figure>
          <span className="mt-4 block text-sm md:text-xs">
            {objectNews.category}
          </span>
          <h2 className="mt-2 text-2xl font-semibold md:text-sm">
            {objectNews.title}
          </h2>
        </div>
      ))}
      <div className="mt-10 flex items-center justify-center gap-x-5 md:hidden">
        <Button onClick={handlePrev}>
          <img
            src="/arrow-left.svg"
            alt="arrow left"
            className="h-full w-full object-cover"
          />
        </Button>
        <Button onClick={handleNext}>
          <img
            src="/arrow-right.png"
            alt="arrow right"
            className="h-full w-full object-cover"
          />
        </Button>
      </div>
    </div>
  );
}
