import { CloseIconComponent } from './icons/close-icon/close-icon.component';
import { FilePreviewItemComponent } from './file-preview-container/file-preview-item/file-preview-item.component';
import { FilePreviewContainerComponent } from './file-preview-container/file-preview-container.component';
import { NgModule } from '@angular/core';
import { FilePickerComponent } from './file-picker.component';
import { CommonModule } from '@angular/common';
import { FilePickerService } from './file-picker.service';
import { FileDropModule } from './file-drop/file-drop.module';
import { PreviewLightboxComponent } from './file-preview-container/preview-lightbox/preview-lightbox.component';
import { RefreshIconComponent } from './file-preview-container/file-preview-item/refresh-icon/refresh-icon.component';
import * as i0 from "@angular/core";
export class FilePickerModule {
}
FilePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: FilePickerModule });
FilePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FilePickerModule_Factory(t) { return new (t || FilePickerModule)(); }, providers: [FilePickerService], imports: [[
            CommonModule,
            FileDropModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilePickerModule, { declarations: [FilePickerComponent,
        FilePreviewContainerComponent,
        FilePreviewItemComponent,
        PreviewLightboxComponent,
        RefreshIconComponent,
        CloseIconComponent], imports: [CommonModule,
        FileDropModule], exports: [FilePickerComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilePickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FileDropModule,
                ],
                declarations: [
                    FilePickerComponent,
                    FilePreviewContainerComponent,
                    FilePreviewItemComponent,
                    PreviewLightboxComponent,
                    RefreshIconComponent,
                    CloseIconComponent
                ],
                exports: [FilePickerComponent],
                providers: [FilePickerService]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NsZWlzcy9wcm9qZWN0cy9ub2RlL25neC1hd2Vzb21lLXVwbG9hZGVyL3Byb2plY3RzL2ZpbGUtcGlja2VyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDbEgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDMUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdGQUFnRixDQUFDOztBQWlCdEgsTUFBTSxPQUFPLGdCQUFnQjs7b0RBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLG1CQUZoQixDQUFDLGlCQUFpQixDQUFDLFlBYnJCO1lBQ1AsWUFBWTtZQUNaLGNBQWM7U0FDZjt3RkFZVSxnQkFBZ0IsbUJBVnpCLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0Isd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsa0JBQWtCLGFBVGxCLFlBQVk7UUFDWixjQUFjLGFBVU4sbUJBQW1CO2tEQUdsQixnQkFBZ0I7Y0FoQjVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLDZCQUE2QjtvQkFDN0Isd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbG9zZUljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb25zL2Nsb3NlLWljb24vY2xvc2UtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZVByZXZpZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLXByZXZpZXctY29udGFpbmVyL2ZpbGUtcHJldmlldy1pdGVtL2ZpbGUtcHJldmlldy1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWxlUHJldmlld0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZmlsZS1wcmV2aWV3LWNvbnRhaW5lci9maWxlLXByZXZpZXctY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGaWxlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZmlsZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGaWxlRHJvcE1vZHVsZSB9IGZyb20gJy4vZmlsZS1kcm9wL2ZpbGUtZHJvcC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJldmlld0xpZ2h0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWxlLXByZXZpZXctY29udGFpbmVyL3ByZXZpZXctbGlnaHRib3gvcHJldmlldy1saWdodGJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVmcmVzaEljb25Db21wb25lbnQgfSBmcm9tICcuL2ZpbGUtcHJldmlldy1jb250YWluZXIvZmlsZS1wcmV2aWV3LWl0ZW0vcmVmcmVzaC1pY29uL3JlZnJlc2gtaWNvbi5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGaWxlRHJvcE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmlsZVBpY2tlckNvbXBvbmVudCxcbiAgICBGaWxlUHJldmlld0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBGaWxlUHJldmlld0l0ZW1Db21wb25lbnQsXG4gICAgUHJldmlld0xpZ2h0Ym94Q29tcG9uZW50LFxuICAgIFJlZnJlc2hJY29uQ29tcG9uZW50LFxuICAgIENsb3NlSWNvbkNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbRmlsZVBpY2tlckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0ZpbGVQaWNrZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlUGlja2VyTW9kdWxlIHt9XG4iXX0=