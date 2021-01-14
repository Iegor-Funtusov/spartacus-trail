import { Injectable } from '@angular/core';
import { CmsNavigationNode, CmsService } from '@spartacus/core';
import { CustomCmsNavigationNode } from '../data/custom-navigation-node.data';

@Injectable({
  providedIn: 'root'
})
export class NavigationBarService {

  constructor(private cmsService: CmsService) { }

  populateNavigationNodeImage(navigationNode: CustomCmsNavigationNode): void {
    if (navigationNode.entries !== undefined && navigationNode.entries.length > 0) {
      this.cmsService.getComponentData<any>(navigationNode.entries[0].itemId)
        .forEach(entry => {
          if (entry.typeCode === 'CategoryNavBarComponent') {
            navigationNode.title =  entry.name;
            navigationNode.thumbnailImage = entry.thumbnailImage;
          }
        });
    }
    if (navigationNode.children) {
      navigationNode.children.map(it => this.populateNavigationNodeImage(it));
    }
  }

  convert(from: CmsNavigationNode): CustomCmsNavigationNode {
    return {
      uid: from.uid,
      title: from.title,
      children: this.convertChildrenRecursively(from.children),
      entries: from.entries
    } as CustomCmsNavigationNode;
  }

  private convertChildrenRecursively(children: any): Array<CustomCmsNavigationNode> {
    return children ? children.map(child => this.convert(child)) : [];
  }
}
