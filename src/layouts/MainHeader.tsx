import {Button} from "@/components/ui/button.tsx";

const MainHeader = () => {
  return (
    <nav className='flex flex-col sm:flex-row gap-10 justify-between px-10 pb-5 items-center bg-neutral-900'>
      <img src="/assets/logo.png" alt="logo"/>
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