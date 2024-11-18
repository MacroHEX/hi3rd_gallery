import MainLayout from "@/layouts/MainLayout.tsx";

const Home = () => {
  return (
    <MainLayout>
      <div className='relative w-full h-full pt-36 sm:pt-0'>
        <video
          className='w-full h-full object-cover z-0'
          autoPlay
          muted
          loop
          src="https://fastcdn.hoyoverse.com/mi18n/bh3_global/m20230317hy14h0glc0/upload/564811a1744ce08ffe2c22abf21fa2cb_8931824403464310512.mp4"></video>
      </div>
    </MainLayout>
  );
};

export default Home;