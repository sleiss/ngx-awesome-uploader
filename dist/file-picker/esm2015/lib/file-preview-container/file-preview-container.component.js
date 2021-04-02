import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { FilePickerAdapter } from '../file-picker.adapter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./preview-lightbox/preview-lightbox.component";
import * as i3 from "./file-preview-item/file-preview-item.component";
function FilePreviewContainerComponent_preview_lightbox_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "preview-lightbox", 2);
    i0.ɵɵlistener("previewClose", function FilePreviewContainerComponent_preview_lightbox_0_Template_preview_lightbox_previewClose_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.closeLightbox(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("file", ctx_r0.lightboxFile);
} }
function FilePreviewContainerComponent_file_preview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "file-preview-item", 3);
    i0.ɵɵlistener("removeFile", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_removeFile_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.removeFile.next($event); })("uploadSuccess", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_uploadSuccess_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.uploadSuccess.next($event); })("uploadFail", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_uploadFail_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.uploadFail.next($event); })("imageClicked", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_imageClicked_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.openLightbox($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fileItem", file_r4)("itemTemplate", ctx_r1.itemTemplate)("adapter", ctx_r1.adapter)("captions", ctx_r1.captions)("enableAutoUpload", ctx_r1.enableAutoUpload);
} }
export class FilePreviewContainerComponent {
    constructor() {
        this.removeFile = new EventEmitter();
        this.uploadSuccess = new EventEmitter();
        this.uploadFail = new EventEmitter();
    }
    ngOnInit() {
    }
    openLightbox(file) {
        this.lightboxFile = file;
    }
    closeLightbox() {
        this.lightboxFile = undefined;
    }
}
FilePreviewContainerComponent.ɵfac = function FilePreviewContainerComponent_Factory(t) { return new (t || FilePreviewContainerComponent)(); };
FilePreviewContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilePreviewContainerComponent, selectors: [["file-preview-container"]], inputs: { previewFiles: "previewFiles", itemTemplate: "itemTemplate", enableAutoUpload: "enableAutoUpload", adapter: "adapter", captions: "captions" }, outputs: { removeFile: "removeFile", uploadSuccess: "uploadSuccess", uploadFail: "uploadFail" }, decls: 2, vars: 2, consts: [[3, "file", "previewClose", 4, "ngIf"], [3, "fileItem", "itemTemplate", "adapter", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", "imageClicked", 4, "ngFor", "ngForOf"], [3, "file", "previewClose"], [3, "fileItem", "itemTemplate", "adapter", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", "imageClicked"]], template: function FilePreviewContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FilePreviewContainerComponent_preview_lightbox_0_Template, 1, 1, "preview-lightbox", 0);
        i0.ɵɵtemplate(1, FilePreviewContainerComponent_file_preview_item_1_Template, 1, 5, "file-preview-item", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.lightboxFile);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.previewFiles);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.PreviewLightboxComponent, i3.FilePreviewItemComponent], styles: ["[_nghost-%COMP%]{background:#fafbfd;display:flex;flex-direction:column;justify-content:flex-start;width:100%}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilePreviewContainerComponent, [{
        type: Component,
        args: [{
                selector: 'file-preview-container',
                templateUrl: './file-preview-container.component.html',
                styleUrls: ['./file-preview-container.component.scss']
            }]
    }], function () { return []; }, { previewFiles: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], enableAutoUpload: [{
            type: Input
        }], removeFile: [{
            type: Output
        }], uploadSuccess: [{
            type: Output
        }], uploadFail: [{
            type: Output
        }], adapter: [{
            type: Input
        }], captions: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1wcmV2aWV3LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2xlaXNzL3Byb2plY3RzL25vZGUvbmd4LWF3ZXNvbWUtdXBsb2FkZXIvcHJvamVjdHMvZmlsZS1waWNrZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtcHJldmlldy1jb250YWluZXIvZmlsZS1wcmV2aWV3LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJsaWIvZmlsZS1wcmV2aWV3LWNvbnRhaW5lci9maWxlLXByZXZpZXctY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0lDRjNELDJDQUFpSDtJQUFwRCx5T0FBZ0M7SUFBQyxpQkFBbUI7OztJQUExRSwwQ0FBcUI7Ozs7SUFDNUQsNENBV3FCO0lBUmpCLG1OQUFjLDhCQUF1QixJQUFDLDRNQUNyQixpQ0FBMEIsSUFETCxzTUFFeEIsOEJBQXVCLElBRkMseU9BQUE7SUFRekMsaUJBQW9COzs7O0lBVGpCLGtDQUFpQixxQ0FBQSwyQkFBQSw2QkFBQSw2Q0FBQTs7QURRckIsTUFBTSxPQUFPLDZCQUE2QjtJQVV4QztRQU4wQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDbEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUNyRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7SUFJN0QsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUNNLFlBQVksQ0FBQyxJQUFzQjtRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ00sYUFBYTtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDOzswR0FuQlUsNkJBQTZCO2tFQUE3Qiw2QkFBNkI7UUNYMUMsd0dBQThGO1FBQzlGLDBHQVdDOztRQVppQix1Q0FBb0I7UUFFbEMsZUFBaUM7UUFBakMsMENBQWlDOztrRERTeEIsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQzthQUN2RDtzQ0FFVSxZQUFZO2tCQUFwQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNvQixVQUFVO2tCQUFuQyxNQUFNO1lBQ21CLGFBQWE7a0JBQXRDLE1BQU07WUFDbUIsVUFBVTtrQkFBbkMsTUFBTTtZQUVFLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsZVByZXZpZXdNb2RlbCB9IGZyb20gJy4uL2ZpbGUtcHJldmlldy5tb2RlbCc7XG5pbXBvcnQgeyBGaWxlUGlja2VyQWRhcHRlciB9IGZyb20gJy4uL2ZpbGUtcGlja2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXBsb2FkZXJDYXB0aW9ucyB9IGZyb20gJy4uL3VwbG9hZGVyLWNhcHRpb25zJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWxlLXByZXZpZXctY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtcHJldmlldy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLXByZXZpZXctY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlsZVByZXZpZXdDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwcmV2aWV3RmlsZXM6IEZpbGVQcmV2aWV3TW9kZWxbXTtcbiAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBlbmFibGVBdXRvVXBsb2FkOiBib29sZWFuO1xuICBAT3V0cHV0KCkgcHVibGljIHJlYWRvbmx5IHJlbW92ZUZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVQcmV2aWV3TW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVhZG9ubHkgdXBsb2FkU3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVByZXZpZXdNb2RlbD4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyByZWFkb25seSB1cGxvYWRGYWlsID0gbmV3IEV2ZW50RW1pdHRlcjxIdHRwRXJyb3JSZXNwb25zZT4oKTtcbiAgcHVibGljIGxpZ2h0Ym94RmlsZTogRmlsZVByZXZpZXdNb2RlbDtcbiAgQElucHV0KCkgYWRhcHRlcjogRmlsZVBpY2tlckFkYXB0ZXI7XG4gIEBJbnB1dCgpIGNhcHRpb25zOiBVcGxvYWRlckNhcHRpb25zO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIHB1YmxpYyBvcGVuTGlnaHRib3goZmlsZTogRmlsZVByZXZpZXdNb2RlbCk6IHZvaWQge1xuICAgdGhpcy5saWdodGJveEZpbGUgPSBmaWxlO1xuICB9XG4gIHB1YmxpYyBjbG9zZUxpZ2h0Ym94KCk6IHZvaWQge1xuICAgIHRoaXMubGlnaHRib3hGaWxlID0gdW5kZWZpbmVkO1xuICB9XG5cbn1cbiIsIjxwcmV2aWV3LWxpZ2h0Ym94ICpuZ0lmPVwibGlnaHRib3hGaWxlXCIgW2ZpbGVdPVwibGlnaHRib3hGaWxlXCIgKHByZXZpZXdDbG9zZSk9XCJjbG9zZUxpZ2h0Ym94KClcIj48L3ByZXZpZXctbGlnaHRib3g+XG48ZmlsZS1wcmV2aWV3LWl0ZW1cbiAgICAqbmdGb3I9XCJsZXQgZmlsZSBvZiBwcmV2aWV3RmlsZXNcIlxuICAgIFtmaWxlSXRlbV09XCJmaWxlXCJcbiAgICAocmVtb3ZlRmlsZSk9XCJyZW1vdmVGaWxlLm5leHQoJGV2ZW50KVwiXG4gICAgKHVwbG9hZFN1Y2Nlc3MpPVwidXBsb2FkU3VjY2Vzcy5uZXh0KCRldmVudClcIlxuICAgICh1cGxvYWRGYWlsKT1cInVwbG9hZEZhaWwubmV4dCgkZXZlbnQpXCJcbiAgICAoaW1hZ2VDbGlja2VkKT1cIm9wZW5MaWdodGJveCgkZXZlbnQpXCJcbiAgICBbaXRlbVRlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZVwiXG4gICAgW2FkYXB0ZXJdPVwiYWRhcHRlclwiXG4gICAgW2NhcHRpb25zXT1cImNhcHRpb25zXCJcbiAgICBbZW5hYmxlQXV0b1VwbG9hZF09XCJlbmFibGVBdXRvVXBsb2FkXCJcbj48L2ZpbGUtcHJldmlldy1pdGVtPlxuIl19