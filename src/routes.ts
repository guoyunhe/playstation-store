import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Games = lazy(() => import('@/pages/games'));
const NintendoGames = lazy(() => import('@/modules/nintendo-store/src/pages/games'));
const XboxGames = lazy(() => import('@/modules/xbox-store/src/pages/games'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Games,
      },
      {
        path: '/nintendo',
        exact: true,
        component: NintendoGames,
      },
      {
        path: '/xbox',
        exact: true,
        component: XboxGames,
      },
    ],
  },
];
export default routerConfig;
