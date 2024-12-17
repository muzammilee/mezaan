import { useDarkSide } from "../utility";

export default function Switcher({size}) {
  const [theme,setTheme] = useDarkSide();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
          <>
    {/* <!-- Rectangular switch --> */}
{/* <label className="switch fa-rotate-90">
  <input type="checkbox"/>
  <span className="slider"></span>
</label> */}

      <button className={`text-cust-black dark:text-cust-cream ${size}`} onClick={toggleDarkMode}>{theme === "dark" ? (<i className="fa-solid  fa-sun"></i>) :(<i className="fa-solid fa-moon"></i>)}</button>
    </>
    // {theme === "dark" ? (<i className="fa-solid  fa-sun"></i>) :(<i className="fa-solid fa-moon"></i>) 
  );
}