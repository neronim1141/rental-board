import clsx from "clsx";

interface PropsTextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  inputSize?: "sm" | "md";
  hasError?: boolean;
  onChange?: () => void;
}
export const Textarea = ({
  className,
  inputSize = "sm",
  hasError,
  onChange,

  ...rest
}: PropsTextarea) => {
  return (
    <textarea
      onChange={onChange}
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
