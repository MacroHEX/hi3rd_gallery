import {Button} from "@/components/ui/button.tsx";

const MainHeader = () => {
  return (
    <nav
      className='flex flex-col sm:flex-row gap-5 sm:gap-10 justify-between px-6 sm:px-10 py-4 items-center bg-neutral-900 sm:bg-black bg-opacity-100 sm:bg-opacity-90 h-fit sm:h-16 shadow-md fixed w-full top-0 z-50'>
      <img src="/assets/logo.png" alt="logo"
           className="h-20 hover:scale-105 transition-all inline-block cursor-pointer active:scale-100"/>
      <ul className='flex gap-4'>
        <li>
          <Button variant='link' className='text-white hover:text-neutral-300 transition-all'>
            Home
          </Button>
        </li>
        <li>
          <Button variant='link' className='text-white hover:text-neutral-300 transition-all'>
            Characters
          </Button>
        </li>
        <li>
          <Button variant='link' className='text-white hover:text-neutral-300 transition-all'>
            Media
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default MainHeader;