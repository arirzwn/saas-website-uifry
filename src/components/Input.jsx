export function Input({
  className,
  icon,
  placeholder,
  type = "text",
  name,
  id,
}) {
  return (
    <div className="relative mt-4 flex items-center">
      <figure className="absolute left-3">
        <img src={icon} alt={`Icon ${name}`} />
      </figure>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`w-full rounded-md border border-slate-400 p-4 pl-12 ${className} `}
      />
    </div>
  );
}
