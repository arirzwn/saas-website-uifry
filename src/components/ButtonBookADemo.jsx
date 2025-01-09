import { Button } from "./Button.jsx";
import { Figure } from "./Figure.jsx";

export function ButtonBookADemo({ className }) {
  return (
    <div className={`mt-8 flex items-center gap-x-5 ${className}`}>
      <Button>Contact Now</Button>
      <Figure
        src="/arrow-right.png"
        alt="Icon arrow"
        className="border border-customPink p-4"
      />

      <p className="text-sm font-semibold">Book a Demo Today</p>
    </div>
  );
}
