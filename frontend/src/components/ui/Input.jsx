export default function Input({ label, icon: Icon, type = "text", ...props }) {
  return (
    <label className="flex flex-col gap-1.5 w-full">
      {label && (
        <span className="text-[12.5px] font-medium text-dim">{label}</span>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <Icon size={16} className="absolute left-3.5 text-faint pointer-events-none" />
        )}
        <input
          type={type}
          className={"input-field" + (Icon ? " pl-10" : "")}
          {...props}
        />
      </div>
    </label>
  );
}
