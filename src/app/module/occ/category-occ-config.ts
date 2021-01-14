import { MyOccConfig } from './extended-occ-config';

export const defaultMyOccConfig: MyOccConfig = {
  backend: {
    occ: {
      endpoints: {
        category:
          'category/get/${code}?',
      },
    },
  },
};
