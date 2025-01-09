import {
  FaInstagram,
  FaGithubAlt,
  FaFigma,
  FaDribbble,
  FaFlickr,
} from "react-icons/fa";

const icons = [FaInstagram, FaGithubAlt, FaFigma, FaDribbble, FaFlickr];

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="relative flex items-start justify-between">
        <figure>
          <img src="/logo.png" alt="Logo" />
        </figure>
        <ul className="flex flex-col gap-y-10 font-semibold md:flex-row md:gap-x-10 md:font-normal">
          <li>Home</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <ul className="flex flex-col gap-y-6 md:hidden md:flex-row">
          {icons.map((Icon, index) => (
            <li key={index} className="rounded-full border bg-black p-2">
              <Icon className="text-xl text-white" />
            </li>
          ))}
        </ul>
      </div>
      <hr className="hidden h-0.5 w-full bg-black md:my-10 md:block" />

      <div className="md:flex md:items-center md:justify-between">
        <p className="mt-12 text-center font-light md:mt-0">
          All rights reserved ® uifry.com | Terms and conditions apply!
        </p>

        <ul className="hidden gap-y-6 md:inline-block md:flex md:items-center md:gap-x-10">
          {icons.map((Icon, index) => (
            <li key={index} className="rounded-full border bg-black p-2">
              <Icon className="text-xl text-white" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
