export function Button({ children, className, ...props }) {
  return (
    <button
      className={`rounded-md bg-customPink px-6 py-4 text-sm font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
