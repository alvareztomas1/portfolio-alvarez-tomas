import { Outlet } from 'react-router-dom';

import { Navbar } from '@components/navbar/NavBar';

import { useTheme } from '@/hooks/useTheme';

export default function Root() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {theme === 'light' ? (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      ) : (
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:14px_24px]" />
        </div>
      )}

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex flex-1 flex-col gap-10 lg:gap-12">
        <Outlet />
      </main>
    </div>
  );
}
