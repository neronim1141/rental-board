import clsx from "clsx";

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputSize?: "sm" | "md";
  type?: string;
  hasError?: boolean;
  onChange?: () => void;
}
export const Input = ({
  className,
  inputSize = "sm",
  hasError,
  type,
  onChange,
  ...rest
}: PropsInput) => {
  return (
    <input
      onChange={onChange}
      type={type}
      className={clsx(
        `bg-gray-600 focus:bg-sky-700 hover:bg-sky-700`,
        {
          "px-2 py-1 ": inputSize === "sm",
          "px-4 py-2": inputSize === "md",
        },
        { "bg-red-300": hasError },
        className
      )}
      {...rest}
    />
  );
};
