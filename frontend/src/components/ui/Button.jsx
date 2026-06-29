export default function Button({ children, className = "", as: As = "button", ...props }) {
  return (
    <As
      className={
        "btn-primary flex items-center justify-center gap-2 py-3 text-[13.5px] tracking-wide cursor-pointer " +
        className
      }
      {...props}
    >
      {children}
    </As>
  );
}
