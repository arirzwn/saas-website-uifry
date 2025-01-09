import { Button } from "../components/Button.jsx";
import { Figure } from "../components/Figure.jsx";
import { TextHeader } from "../components/TextHeader.jsx";
import { Card } from "../components/Card.jsx";
import { Input } from "../components/Input.jsx";
import { IconApi } from "../components/IconApi.jsx";
import { FaqList } from "../components/Faq/FaqList.jsx";
import { ButtonBookADemo } from "../components/ButtonBookADemo.jsx";
import { Footer } from "../components/Footer.jsx";
import { News } from "./News.jsx";

export function Home() {
  return (
    <>
      <div className="mx-4 mb-20 mt-10 md:mx-10">
        <div className="md:flex md:justify-between md:gap-x-5">
          <div className="md:w-1/2">
            <TextHeader>
              {" "}
              Launch a software businesses website today with us!
            </TextHeader>
            <p className="mt-8 text-base font-light">
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond.
            </p>

            <ButtonBookADemo />
            <div className="mt-8 flex items-center gap-x-5">
              <Figure
                src="/Star.png"
                alt="Icon Star"
                className="bg-customPink p-4"
              />
              <p className="font-light">Rated 4.9 out of 1200 reviews</p>
            </div>
          </div>
          <figure className="mt-14 md:mt-0">
            <img src="/foto-orang.png" alt="Foto Orang" className="mx-auto" />
          </figure>
        </div>

        <div className="mt-10 rounded-md border border-black p-4 md:flex md:items-center">
          <h1 className="font-semibold md:w-1/3">
            Trusted by over 100+ businesses worldwide!
          </h1>
          <div className="mx-auto mt-4 flex gap-x-5 px-5 text-center sm:justify-center md:w-full md:justify-between">
            <Figure
              src="/logo/intercom.png"
              alt="Logo Intercom"
              className="w-10"
            />
            <Figure
              src="/logo/treehouse.png"
              alt="Logo Treehouse"
              className="w-10"
            />
            <Figure src="/logo/zapier.png" alt="Logo Zapier" className="w-10" />
            <Figure src="/logo/marvel.png" alt="Logo Marvel" className="w-10" />
            <Figure src="/logo/notion.png" alt="Logo Notion" className="w-10" />
            <Figure src="/logo/shazam.png" alt="Logo Shazam" className="w-10" />
          </div>
        </div>

        <div className="mt-16 md:flex md:justify-between">
          <figure className="mt-4 sm:order-2 md:order-1">
            <img src="/orang2.png" alt="Foto orang" className="mx-auto" />
          </figure>
          <div className="sm:order-1 md:order-2 md:w-1/2">
            <TextHeader>
              {" "}
              Let your business thrive under our supervision
            </TextHeader>
            <p className="mt-8 font-light">
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. We are making every
              business grow!
            </p>
            <ul className="mt-6 flex flex-col gap-y-3">
              <li className="flex items-center">
                <figure className="mr-4 rounded-md bg-customPink p-3">
                  <img src="/Tick%20Square.svg" alt="Icon tick" />
                </figure>
                <p>Super useful and easy to use interface</p>
              </li>
              <li className="flex items-center">
                <figure className="mr-4 rounded-md bg-customPink p-3">
                  <img src="/Tick%20Square.svg" alt="Icon tick" />
                </figure>
                <p>Easiest way to grow your business in days</p>
              </li>
            </ul>

            <Button className="mt-8 flex w-full items-center justify-center gap-x-4 md:w-fit">
              Contact Now
              <a href="#">
                <img src="/arrow-right.png" alt="Icon arrow" />
              </a>
            </Button>
          </div>
        </div>

        <Card className="">
          <div className="flex items-center">
            <Figure
              src="/Tick%20Square.svg"
              alt="Icon tick"
              className="mr-4 bg-customPink p-3"
              imgClass="w-10 md:w-5"
            />
            <p className="leading-7 text-white">
              Super useful and easy to with over 100+ customisations!
            </p>
          </div>{" "}
          <div className="flex items-center">
            <Figure
              src="/Time%20Circle.svg"
              alt="Icon Clock"
              className="mr-4 bg-[#f3deb3] p-3"
              imgClass="w-10 md:w-5"
            />
            <p className="leading-7 text-white">
              Super useful and easy to with over 100+ customisations!
            </p>
          </div>{" "}
          <div className="flex items-center">
            <Figure
              src="/Upload.svg"
              alt="Icon Upload"
              className="mr-4 bg-[#cbcef9] p-3"
              imgClass="w-10 md:w-5"
            />
            <p className="leading-7 text-white">
              Super useful and easy to with over 100+ customisations!
            </p>
          </div>
        </Card>

        <div>
          <div className="gap-x-10 md:grid md:grid-cols-2">
            <div className="">
              <TextHeader className="mt-10 md:mt-0">
                {" "}
                Let your business thrive under our supervision
              </TextHeader>

              <p className="mt-6 text-base">
                Launch a business today with our help and get it done with
                amazing launch features, websites and more with uifry. We help
                business like yours thrive every day and beyond. <br />
                <span className="my-6 block font-semibold">
                  We are making every business grow!
                </span>
              </p>

              <div>
                <form action="">
                  <Input
                    icon="/Profile.png"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                  />
                  <Input
                    icon="/Send.png"
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    id="email"
                  />
                </form>

                <Button className="mt-8 flex w-full items-center justify-center gap-x-4 text-sm font-semibold">
                  Contact Now{" "}
                  <a href="#">
                    <img src="/arrow-right.png" alt="Icon arrow" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <figure className="md:h-full">
                <img
                  src="/foto-orang3.png"
                  alt="Gambar Orang"
                  className="mx-auto md:h-full"
                />
              </figure>
            </div>
          </div>

          <IconApi />

          <div className="">
            <div className="text-center">
              <TextHeader className="font-semibold">
                {" "}
                Out latest updates for you here!
              </TextHeader>
              <p>Whats happening around the World.</p>
            </div>

            <News />
          </div>
        </div>
        <Card className="mt-14">
          <div className="flex items-center">
            <Figure
              src="/Tick%20Square.svg"
              alt="Icon tick"
              className="mr-4 bg-customPink p-3"
              imgClass="w-10"
            />
            <p className="leading-7 text-white">
              Super useful and easy to with over 100+ customisations!
            </p>
          </div>{" "}
          <div className="flex items-center">
            <Figure
              src="/Time%20Circle.svg"
              alt="Icon Clock"
              className="mr-4 bg-[#f3deb3] p-3"
              imgClass="w-10"
            />
            <p className="leading-7 text-white">
              Super useful and easy to with over 100+ customisations!
            </p>
          </div>{" "}
          <div className="flex items-center">
            <Figure
              src="/Upload.svg"
              alt="Icon Upload"
              className="mr-4 bg-[#cbcef9] p-3"
              imgClass="w-10"
            />
            <p className="leading-7 text-white">
              Super useful and easy to with over 100+ customisations!
            </p>
          </div>
        </Card>

        <IconApi />

        <TextHeader className="text-center">
          Frequently asked questions
        </TextHeader>
        <p className="mt-3 text-center">Whats happening around the World.</p>

        {/*<FaqItem />*/}
        <FaqList />

        <ButtonBookADemo className="md:justify-center" />

        <Footer />
      </div>
    </>
  );
}
