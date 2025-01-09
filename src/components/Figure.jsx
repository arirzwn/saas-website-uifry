export function Figure({ src, alt, className, imgClass }) {
  return (
    <figure className={`rounded-md ${className}`}>
      <img src={src} alt={alt} className={imgClass} />
    </figure>
  );
}
