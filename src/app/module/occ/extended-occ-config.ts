import { OccConfig } from '@spartacus/core';
import { ExtendedOccEndpoints } from './extended-occ-endpoints';

export abstract class MyOccConfig extends OccConfig {
  backend?: {
    occ?: {
      endpoints?: ExtendedOccEndpoints;
    }
  };
}

