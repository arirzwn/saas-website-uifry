export function TextHeader({ children, className }) {
  return (
    <h1 className={`text-3xl font-bold leading-10 text-[#201c44] ${className}`}>
      {children}
    </h1>
  );
}
