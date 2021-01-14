import { ContentSlotComponentData } from '@spartacus/core';


export class CustomComponentWrapper <T extends ContentSlotComponentData> {
  component: T;
}
