import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

export function useForm(firsValue) {
    let [value, setValue] = useState(firsValue)
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValue((prev) => ({ ...prev, [name]: value }));
    };
    return [ value,handleChange]
}
export function useFormNew(firsValue) {
    let [value, setFormValues] = useState(firsValue)
    return [
        value,
        (e) => {
            const { name, value } = e.target;
            if (isNaN(value) || value < 0) return;
            setFormValues((prev) => ({ ...prev, [name]: value }))
        }
    ]
}
export const showToast = (text , confirm ,cancel) => {
  Swal.fire({
    title: text,
    position:'top',
    showCancelButton: false, // Hide Cancel button
    showConfirmButton: false, // Hide Confirm button
    customClass: {
      popup: 'w-full h-[40px] bg-red-500/70',
      title: 'text-sm text-red-600',
      
  }
});
};
export const showSuccess = (text , confirm ,cancel) => {
  Swal.fire({
    title: text,
    position:'top',
    showCancelButton: false, // Hide Cancel button
    showConfirmButton: false, // Hide Confirm button
    customClass: {
      popup: 'w-full h-[40px] bg-green-500/70',
      title: 'text-sm text-green-600',
      
  }
});
};

export function useInView(elementRef, options = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options]);

  return isInView;
}
// Filename - hooks/useDarkSide.js
export function useDarkSide() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme || "light"; // Default to light theme
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}