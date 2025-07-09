import React from "react";

export const buttonVariants = {
  primary:   "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
  outline:   "border border-current text-indigo-600 hover:bg-indigo-50",
};

export const Button = React.forwardRef(
  ({ variant = "primary", asChild = false, className = "", ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${buttonVariants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export default Button;
