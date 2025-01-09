import { Button } from "../components/Button.jsx";

export function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex w-full items-center justify-between md:justify-start">
        <a href="#">
          <img src="/logo.png" alt="Logo" className="w-24 md:w-16" />
        </a>
        <figure className="ml-4 rounded-md bg-[#FAE0E1] p-3 md:hidden">
          <img src="/icon-category.png" alt="icon" className="w-4" />
        </figure>

        <ul className="hidden md:ml-10 md:flex md:text-sm md:font-semibold">
          <li className="mr-4">Home</li>
          <li className="mr-4">About</li>
          <li className="mr-4">Pricing</li>
          <li className="mr-4">Blog</li>
        </ul>
      </div>

      <Button className="hidden whitespace-nowrap md:inline-block">
        Contact Now
      </Button>
    </div>
  );
}
