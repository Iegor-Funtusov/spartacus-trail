import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ICON_TYPE, IconLoaderService, NavigationUIComponent } from '@spartacus/storefront';
import { CmsNavigationComponent, CmsNavigationNode, CmsService, ContentSlotComponentData } from '@spartacus/core';
import { CustomComponentWrapper } from '../../data/custom-component-wrapper.data';
import {CustomCmsNavigationNode} from '../../data/custom-navigation-node.data';
import {NavigationBarService} from '../../service/navigation-bar.service';

@Component({
  selector: 'cx-navigation-ui',
  templateUrl: './custom-navigation-ui.component.html',
  styleUrls: ['./custom-navigation-ui.component.scss']
})
export class CustomNavigationUiComponent extends NavigationUIComponent implements OnInit {


  readonly cxIconSelector = 'cx-icon';

  @Input()
  contentSlotData: CustomComponentWrapper<ContentSlotComponentData>;
  private rootNavigationNode: CustomCmsNavigationNode;
  private caretDownClasses: string;
  private caretRightClasses: string;

  constructor(
    router: Router,
    renderer: Renderer2,
    elemRef: ElementRef,
    protected cmsService: CmsService,
    protected iconLoaderService: IconLoaderService,
    protected navigationBarService: NavigationBarService
  ) {
    super(router, renderer, elemRef);
  }

  ngOnInit(): void {
    const $navigationComponentData = this.cmsService.getComponentData<CmsNavigationComponent>(this.contentSlotData.component.uid);
    $navigationComponentData.subscribe({
      next: componentData => {
        this.rootNavigationNode = this.navigationBarService.convert(componentData.navigationNode); // <-- convert navigationNode data to the extended type
        this.navigationBarService.populateNavigationNodeImage(this.rootNavigationNode); // <-- populate the extended type with supercategory name and thumbnail image
        // see the implementation of the navigationBarService below
      }
    });
    this.initCaretClasses();
  }

  caretDown(event: Event) {
    const cxIconElement = (event.target as Element).querySelector(this.cxIconSelector);
    const caretDownClasses = this.caretDownClasses.split(' ');

    cxIconElement.removeAttribute('class');
    cxIconElement.classList.add(...caretDownClasses);
  }

  caretRight(event: Event) {
    const cxIconElement = (event.target as Element).querySelector(this.cxIconSelector);
    const caretRightClasses = this.caretRightClasses.split(' ');

    cxIconElement.removeAttribute('class');
    cxIconElement.classList.add(...caretRightClasses);
  }

  private initCaretClasses() {
    this.caretDownClasses = this.iconLoaderService.getStyleClasses(ICON_TYPE.CARET_DOWN);
    this.caretRightClasses = this.iconLoaderService.getStyleClasses(ICON_TYPE.CARET_RIGHT);
  }

}
