import { Outlet } from 'react-router-dom';

import Header from '../Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="md:container md:mx-auto">
        <Outlet />
      </div>
    </>
  );
}
