import clsx from "clsx";
import { ReactNode } from "react";

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "warning";
  size?: "sm" | "md";
}

export const Button = ({
  className,
  children,
  onClick,
  variant = "primary",
  size = "sm",
  ...rest
}: PropsButton) => (
  <button
    onClick={onClick}
    className={clsx(
      {
        "bg-primary-600 hover:bg-primary-500 text-primary-50":
          variant === "primary",
        "bg-secondary-600 hover:bg-secondary-500 text-secondary-50":
          variant === "secondary",
        "bg-warning-600 hover:bg-warning-500 text-warning-50":
          variant === "warning",
      },
      { "px-2 py-1": size === "sm", "px-4 py-2": size === "md" },
      "m-1 rounded font-bold hover:shadow-md",
      className
    )}
    {...rest}
  >
    {children}
  </button>
);
