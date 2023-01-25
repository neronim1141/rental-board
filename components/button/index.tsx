import clsx from "clsx";
import { ReactNode } from "react";

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "warning";
  size?: "sm" | "md";
}

export const Button = ({
  className,
  children,
  disabled,
  onClick,
  variant = "primary",
  size = "sm",
  ...rest
}: PropsButton) => (
  <button
    disabled={disabled || !Boolean(onClick)}
    onClick={onClick}
    className={clsx(
      "border-2 border-current m-1 rounded-lg font-bold hover:shadow-md disabled:opacity-75",

      {
        "dark:bg-primary-dark-600 dark:hover:bg-primary-dark-500 dark:text-primary-dark-50":
          variant === "primary",
        "dark:text-primary-dark-600 dark:hover:bg-primary-dark-100":
          variant === "secondary",
        "dark:bg-warning-dark-600 dark:hover:bg-warning-dark-500 dark:text-warning-dark-50":
          variant === "warning",
      },
      {
        "bg-primary-600 hover:bg-primary-500 text-primary-50":
          variant === "primary",
        " border-primary-600 text-primary-500 hover:bg-primary-100 ":
          variant === "secondary",
        "bg-warning-600 hover:bg-warning-500 text-warning-50":
          variant === "warning",
      },
      { "px-2 py-1": size === "sm", "px-4 py-2 text-lg": size === "md" },
      className
    )}
    {...rest}
  >
    {children}
  </button>
);
