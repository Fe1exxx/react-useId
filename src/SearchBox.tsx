import { useId } from "react";

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchBox = ({
  placeholder = "Поиск...",
  className = "",
  value = "",
  onChange,
}: SearchBoxProps) => {
  const id = useId();

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="sr-only">
        Поиск
      </label>
      <input
        id={id}
        type="search"
        role="searchbox"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        aria-label="Поиск по сайту"
      />
    </div>
  );
};
