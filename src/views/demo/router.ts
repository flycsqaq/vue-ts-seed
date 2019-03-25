import { SimpleRouter } from '@/core/models';

const demoRouter: SimpleRouter = {
  path: '/demo',
  name: 'Demo',
  component: () => import('./index.vue'),
};

export default demoRouter;
