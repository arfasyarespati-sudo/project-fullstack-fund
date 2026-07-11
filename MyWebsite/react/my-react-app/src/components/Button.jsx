import { twMerge } from "tailwind-merge";

export function Button({ variant = "primary", className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        getVariantStyles(variant),
        `transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed ${className || ""}`
      )}
    />
  );
}



function getVariantStyles(variant) {
  switch (variant) {
    case "primary":
      return "bg-violet-600 hover:bg-violet-500 text-white";
    case "secondary":
      return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400";
    case "ghost-destructive":
      return "hover:bg-red-800 text-red-800 hover:text-red-200";
    default:
      throw new Error(`Invalid variant: ${variant}`);
  }
}
  
  
