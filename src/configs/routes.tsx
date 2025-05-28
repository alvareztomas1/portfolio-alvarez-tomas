import type { RouteObject } from 'react-router-dom';

import Home from '@/pages/Home/Home';

export const publicRoutes: RouteObject[] = [
  {
    index: true,
    path: '/',
    element: <Home />,
  },
];
