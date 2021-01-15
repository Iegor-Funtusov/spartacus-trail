import { CmsNavigationNode } from '@spartacus/core';
import { CmsNavigationEntry } from '@spartacus/core/src/model/cms.model';

export class CustomCmsNavigationNode implements CmsNavigationNode {

  uid?: string;
  title?: string;
  children?: Array<CustomCmsNavigationNode>;
  entries?: Array<CmsNavigationEntry>;
  thumbnailImage: any;
}
