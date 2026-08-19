import { useId, useState } from "react";

type DisclosureProps = {
  title: string;
  children: React.ReactNode;
};

export default function Disclosure({
  title,
  children,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen((current) => !current);
    }
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={() => setIsOpen((current) => !current)}
          onKeyDown={handleKeyDown}
        >
          {title}
        </button>
      </h2>

      <div
        id={id}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}