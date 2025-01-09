export function Card({ children, className }) {
  return (
    <div className={`my-20 ${className}`}>
      <div className="mx-auto mt-10 flex h-[428px] w-full flex-col justify-center gap-y-12 rounded-[5px] bg-[#3c3679] px-7 py-10 md:h-fit md:flex-row md:text-sm">
        {children}
      </div>
    </div>
  );
}
