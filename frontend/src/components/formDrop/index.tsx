import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
  MouseEvent,
} from "react";

interface DropdownProps {
  button: ReactNode;
  children: ReactNode;
  classNames: string;
  animation?: string;
}

function useOutsideAlerter(
  ref: React.RefObject<HTMLDivElement>,
  setX: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setX(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setX]);
}

const Dropdown = (props: DropdownProps) => {
  const { button, children, classNames, animation } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [openWrapper, setOpenWrapper] = useState(false);
  useOutsideAlerter(wrapperRef, setOpenWrapper);

  return (
    <div ref={wrapperRef} className="relative inline-block">
      <div
        className="inline-block"
        onMouseDown={() => setOpenWrapper(!openWrapper)}
      >
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation
            ? animation
            : "origin-top-left transition-all duration-300 ease-in-out"
        } ${openWrapper ? "scale-100" : "scale-0"}`}
        style={{ top: "calc(100% + 5px)", left: openWrapper ? "0" : "100%" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
