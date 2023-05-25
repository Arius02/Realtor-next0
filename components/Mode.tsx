import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { TbSunFilled } from 'react-icons/tb';
import { useEffect, useState }from "react"

const Mode = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.theme = newTheme; // Store the theme in localStorage
  };

  if (!isMounted) return null;
  return (
    <button onClick={toggleTheme} className='flex px-2 py-1 items-center w-full'>
      {theme === 'light' ? <BsFillMoonStarsFill className='mr-2' /> : <TbSunFilled className='mr-2' />}
      {theme === 'light' ?   "Dark Mode" : `Light Mode`}
    </button>
  );
};

export default Mode