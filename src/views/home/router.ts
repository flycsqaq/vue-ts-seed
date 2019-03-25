import { SimpleRouter } from '@/core/models';

const homeRouter: SimpleRouter = {
  path: '/',
  name: 'Home',
  component: () => import('./index.vue'),
};

export default homeRouter;
