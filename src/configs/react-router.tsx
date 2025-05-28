import { createBrowserRouter } from 'react-router-dom';

import { publicRoutes } from '@/configs/routes';
import Root from '@/pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [...publicRoutes],
  },
]);

export default router;
