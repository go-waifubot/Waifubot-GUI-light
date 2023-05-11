import { JSX } from "solid-js";

export const Input = ({
  placeholder,
  onInput,
  onEnter,
  icon,
}: {
  onInput?: (a: string) => void;
  onEnter?: (a: string) => void;
  placeholder?: string;
  icon?: JSX.Element;
}) => {
  return (
    <div class="relative flex w-full">
      <input
        type="text"
        onInput={(e) => onInput && onInput(e.currentTarget.value)}
        onKeyPress={(e) =>
          onEnter && e.key === "Enter" && onEnter(e.currentTarget.value)
        }
        placeholder={placeholder}
        class="
          w-full
          py-4
          px-2
          rounded-md
          focus:outline-none
          bg-base
          placeholder:font-sans
          border-blue
          hover:cursor-text
          placeholder:text-overlayC
          text-text
          overflow-clip
          "
      ></input>
      {icon && <span class="top-3.5 right-3.5 absolute">{icon}</span>}
    </div>
  );
};