import clsx from "clsx";
import { ReactNode } from "react";

interface PropsButton {
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
}: PropsButton) => (
  <button
    onClick={onClick}
    className={clsx(
      {
        "bg-lime-700  ": variant === "primary",
        "bg-red-900 ": variant === "secondary",
        "bg-red-600 ": variant === "warning",
      },
      { "px-2 py-1": size === "sm", "px-4 py-2": size === "md" },
      " m-1 rounded text-gray-50",
      className
    )}
  >
    {children}
  </button>
);
