"use client";
import { useState, useEffect, useRef } from "react";

function useTheme() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [theme]);

  const handleThemeChange = (newTheme: any) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, handleThemeChange };
}

export default function Theme() {
  const dropdown = useRef<HTMLDivElement>(null);
  const { theme, handleThemeChange } = useTheme();

  const handleClick = () => {
    dropdown.current!.classList.toggle("dropdown-open");
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }
  };

  return (
    <div className={`mb-72 dropdown m-9`} ref={dropdown}>
      <div
        tabIndex={0}
        role="button"
        className="m-1 btn "
        onClick={handleClick}
      >
        Theme
        <svg
          width="12px"
          height="12px"
          className={`h-2 w-2 fill-current opacity-60 inline-block`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className={`  dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-fit`}
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light"
            value="light"
            onChange={() => handleThemeChange("light")}
            checked={theme === "light"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="dark"
            onChange={() => handleThemeChange("dark")}
            checked={theme === "dark"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
            onChange={() => handleThemeChange("retro")}
            checked={theme === "retro"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            onChange={() => handleThemeChange("cyberpunk")}
            checked={theme === "cyberpunk"}
          />
        </li>

        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Aqua"
            value="aqua"
            onChange={() => handleThemeChange("aqua")}
            checked={theme === "aqua"}
          />
        </li>
      </ul>
    </div>
  );
}
