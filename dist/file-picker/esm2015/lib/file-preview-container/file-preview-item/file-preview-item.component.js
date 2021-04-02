import { FilePickerService } from './../../file-picker.service';
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { GET_FILE_TYPE, IS_IMAGE_FILE } from '../../file-upload.utils';
import { FilePickerAdapter, UploadStatus } from '../../file-picker.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./../../file-picker.service";
import * as i2 from "@angular/common";
import * as i3 from "../../icons/close-icon/close-icon.component";
import * as i4 from "./refresh-icon/refresh-icon.component";
function FilePreviewItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "img", 18);
    i0.ɵɵlistener("click", function FilePreviewItemComponent_div_0_div_2_Template_img_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.imageClicked.next(ctx_r9.fileItem); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r2.safeUrl, i0.ɵɵsanitizeUrl);
} }
function FilePreviewItemComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r3.fileItem.fileName.split(".").pop());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.fileType, " ");
} }
function FilePreviewItemComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.niceBytes(ctx_r4.fileItem.file == null ? null : ctx_r4.fileItem.file.size));
} }
function FilePreviewItemComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "span", 22);
    i0.ɵɵelementEnd();
} }
function FilePreviewItemComponent_div_0_refresh_icon_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "refresh-icon", 23);
    i0.ɵɵlistener("click", function FilePreviewItemComponent_div_0_refresh_icon_12_Template_refresh_icon_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onRetry(); });
    i0.ɵɵelementEnd();
} }
function FilePreviewItemComponent_div_0_a_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "a", 24);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r7.captions == null ? null : ctx_r7.captions.previewCard == null ? null : ctx_r7.captions.previewCard.uploadError);
} }
const _c0 = function (a0) { return { "width": a0 }; };
function FilePreviewItemComponent_div_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵelement(2, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 27);
    i0.ɵɵelementStart(4, "div", 28);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx_r8.uploadProgress + "%"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r8.uploadProgress, " %");
} }
const _c1 = function (a0) { return { "visually-hidden": a0 }; };
function FilePreviewItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, FilePreviewItemComponent_div_0_div_2_Template, 2, 1, "div", 4);
    i0.ɵɵtemplate(3, FilePreviewItemComponent_div_0_div_3_Template, 2, 2, "div", 5);
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 8);
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, FilePreviewItemComponent_div_0_div_9_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 10);
    i0.ɵɵtemplate(11, FilePreviewItemComponent_div_0_div_11_Template, 2, 0, "div", 11);
    i0.ɵɵtemplate(12, FilePreviewItemComponent_div_0_refresh_icon_12_Template, 1, 0, "refresh-icon", 12);
    i0.ɵɵelementStart(13, "a", 13);
    i0.ɵɵlistener("click", function FilePreviewItemComponent_div_0_Template_a_click_13_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onRemove(ctx_r13.fileItem); });
    i0.ɵɵelement(14, "close-icon", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, FilePreviewItemComponent_div_0_a_15_Template, 1, 1, "a", 15);
    i0.ɵɵtemplate(16, FilePreviewItemComponent_div_0_ng_container_16_Template, 6, 4, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c1, ctx_r0.itemTemplate));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isImageFile && (ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isImageFile || !(ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("title", ctx_r0.fileItem.fileName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.fileItem.fileName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.uploadError && !ctx_r0.uploadProgress && (ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.uploadError);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r0.captions == null ? null : ctx_r0.captions.previewCard == null ? null : ctx_r0.captions.previewCard.remove);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.uploadError && !ctx_r0.uploadProgress);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.uploadProgress);
} }
function FilePreviewItemComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1) { return { fileItem: a0, uploadProgress: a1 }; };
export class FilePreviewItemComponent {
    constructor(fileService) {
        this.fileService = fileService;
        this.removeFile = new EventEmitter();
        this.uploadSuccess = new EventEmitter();
        this.uploadFail = new EventEmitter();
        this.imageClicked = new EventEmitter();
    }
    ngOnInit() {
        if (this.fileItem.file) {
            if (this.fileItem.uploadResponse) {
                this.uploadResponse = this.fileItem.uploadResponse;
            }
            else {
                this._uploadFile(this.fileItem);
            }
            this.safeUrl = this.getSafeUrl(this.fileItem.file);
        }
        this.fileType = GET_FILE_TYPE(this.fileItem.fileName);
        this.isImageFile = IS_IMAGE_FILE(this.fileType);
    }
    getSafeUrl(file) {
        return this.fileService.createSafeUrl(file);
    }
    /** Converts bytes to nice size */
    niceBytes(x) {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let l = 0;
        let n = parseInt(x, 10) || 0;
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
        // include a decimal point and a tenths-place digit if presenting
        // less than ten of KB or greater units
        return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
    }
    /** Retry file upload when upload was unsuccessfull */
    onRetry() {
        this._uploadFile(this.fileItem);
    }
    onRemove(fileItem) {
        this._uploadUnsubscribe();
        this.removeFile.next(Object.assign(Object.assign({}, fileItem), { uploadResponse: this.uploadResponse }));
    }
    _uploadFile(fileItem) {
        if (!this.enableAutoUpload) {
            return;
        }
        if (this.adapter) {
            this._uploadSubscription =
                this.adapter.uploadFile(fileItem)
                    .subscribe((res) => {
                    if (res && res.status === UploadStatus.UPLOADED) {
                        this._onUploadSuccess(res.body, fileItem);
                        this.uploadProgress = undefined;
                    }
                    if (res && res.status === UploadStatus.IN_PROGRESS) {
                        this.uploadProgress = res.progress;
                    }
                    if (res && res.status === UploadStatus.ERROR) {
                        this.uploadError = true;
                        this.uploadFail.next(res.body);
                        this.uploadProgress = undefined;
                    }
                }, (er) => {
                    this.uploadError = true;
                    this.uploadFail.next(er);
                    this.uploadProgress = undefined;
                });
        }
        else {
            console.warn('no adapter was provided');
        }
    }
    /** Emits event when file upload api returns success  */
    _onUploadSuccess(uploadResponse, fileItem) {
        this.uploadResponse = uploadResponse;
        this.fileItem.uploadResponse = uploadResponse;
        this.uploadSuccess.next(Object.assign(Object.assign({}, fileItem), { uploadResponse }));
    }
    /** Cancel upload. Cancels request  */
    _uploadUnsubscribe() {
        if (this._uploadSubscription) {
            this._uploadSubscription.unsubscribe();
        }
    }
}
FilePreviewItemComponent.ɵfac = function FilePreviewItemComponent_Factory(t) { return new (t || FilePreviewItemComponent)(i0.ɵɵdirectiveInject(i1.FilePickerService)); };
FilePreviewItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilePreviewItemComponent, selectors: [["file-preview-item"]], inputs: { fileItem: "fileItem", adapter: "adapter", itemTemplate: "itemTemplate", captions: "captions", enableAutoUpload: "enableAutoUpload" }, outputs: { removeFile: "removeFile", uploadSuccess: "uploadSuccess", uploadFail: "uploadFail", imageClicked: "imageClicked" }, decls: 2, vars: 6, consts: [["class", "file-preview-wrapper", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "file-preview-wrapper", 3, "ngClass"], [1, "file-preview-thumbnail"], ["class", "img-preview-thumbnail", 4, "ngIf"], ["class", "other-preview-thumbnail", 3, "ngClass", 4, "ngIf"], [1, "thumbnail-backdrop"], [1, "file-preview-description"], ["href", "javascript:void(0)", 1, "file-preview-title", 3, "title"], ["class", "file-preview-size", 4, "ngIf"], [1, "file-preview-actions"], ["class", "ngx-checkmark-wrapper", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "ngx-close-icon-wrapper", 3, "title", "click"], [1, "ngx-close-icon"], ["class", "file-upload-error-wrapper", "href", "javascipt:void(0)", 3, "title", 4, "ngIf"], [4, "ngIf"], [1, "img-preview-thumbnail"], [3, "src", "click"], [1, "other-preview-thumbnail", 3, "ngClass"], [1, "file-preview-size"], [1, "ngx-checkmark-wrapper"], [1, "ngx-checkmark"], [3, "click"], ["href", "javascipt:void(0)", 1, "file-upload-error-wrapper", 3, "title"], [1, "file-upload-progress-bar-wrapper"], [1, "file-upload-progress-bar", 3, "ngStyle"], [1, "file-upload-percentage-wrapper"], [1, "file-upload-percentage"]], template: function FilePreviewItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FilePreviewItemComponent_div_0_Template, 17, 13, "div", 0);
        i0.ɵɵtemplate(1, FilePreviewItemComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.fileItem);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.itemTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c2, ctx.fileItem, ctx.uploadProgress));
    } }, directives: [i2.NgIf, i2.NgTemplateOutlet, i2.NgClass, i3.CloseIconComponent, i4.RefreshIconComponent, i2.NgStyle], styles: ["[_nghost-%COMP%]{border-bottom:1px solid #ebeef1;display:block;max-width:440px;padding:20px 16px;position:relative}.visually-hidden[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}.file-preview-wrapper[_ngcontent-%COMP%]{display:flex;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]{cursor:pointer;position:relative;z-index:2}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .img-preview-thumbnail[_ngcontent-%COMP%]{height:36px;width:36px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .img-preview-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;border-radius:6px;height:100%;object-fit:cover;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail[_ngcontent-%COMP%]{align-items:center;background:#706fd3;border-radius:4px;color:#fff;display:flex;font-size:12px;font-weight:700;height:36px;justify-content:center;overflow:hidden;white-space:nowrap;width:36px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.pdf[_ngcontent-%COMP%]{background:#e4394e}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.doc[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.docx[_ngcontent-%COMP%]{background:#2196f3}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.xls[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.xlsx[_ngcontent-%COMP%]{background:#4caf50}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.ppt[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.txt[_ngcontent-%COMP%]{background:#ff9800}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .thumbnail-backdrop[_ngcontent-%COMP%]{background:rgba(43,56,71,.2);border-radius:6px;height:100%;left:0;pointer-events:none;position:absolute;top:0;transition:all .1s ease-in-out;visibility:hidden;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]:hover   .thumbnail-backdrop[_ngcontent-%COMP%]{visibility:visible}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]:active   .thumbnail-backdrop[_ngcontent-%COMP%]{background:rgba(43,56,71,.4);visibility:visible}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]{align-items:flex-start;color:#74809d;display:flex;flex:1;flex-direction:column;overflow:hidden;padding-left:16px;padding-right:16px;position:relative;z-index:2}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-title[_ngcontent-%COMP%]{color:#74809d;cursor:default;font-weight:700;text-decoration:none;width:90%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-size[_ngcontent-%COMP%]{color:#979fb8;font-size:12px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]{align-items:center;display:flex;font-size:10px;position:relative;z-index:3}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]{background:#43d084;border-radius:50%;cursor:pointer;font-size:22px;height:20px;position:relative;width:20px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]   .ngx-checkmark[_ngcontent-%COMP%]{height:19px;left:0;position:absolute;top:0;width:19px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]   .ngx-checkmark[_ngcontent-%COMP%]:after{border:1px solid #fff;border-width:0 3px 3px 0;content:\"\";display:block;height:7px;left:7px;position:absolute;top:4px;transform:rotate(45deg);width:3px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-close-icon-wrapper[_ngcontent-%COMP%]{border-radius:50%;cursor:pointer;margin-left:5px;padding:3px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-percentage-wrapper[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-progress-bar-wrapper[_ngcontent-%COMP%]{bottom:0;height:95%;left:0;margin:auto;position:absolute;top:0;width:100%;z-index:1}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-progress-bar[_ngcontent-%COMP%]{background:#eef1fa;border-radius:6px;height:95%;transition:width .3s ease-in;width:0}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-percentage[_ngcontent-%COMP%]{color:#c2cdda;font-size:19px;padding-right:10%;padding-top:5%;text-align:right}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-error-wrapper[_ngcontent-%COMP%]{background:rgba(254,84,111,.06);bottom:0;height:95%;left:0;margin:auto;position:absolute;top:0;width:100%;z-index:1}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilePreviewItemComponent, [{
        type: Component,
        args: [{
                selector: 'file-preview-item',
                templateUrl: './file-preview-item.component.html',
                styleUrls: ['./file-preview-item.component.scss']
            }]
    }], function () { return [{ type: i1.FilePickerService }]; }, { removeFile: [{
            type: Output
        }], uploadSuccess: [{
            type: Output
        }], uploadFail: [{
            type: Output
        }], imageClicked: [{
            type: Output
        }], fileItem: [{
            type: Input
        }], adapter: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], captions: [{
            type: Input
        }], enableAutoUpload: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1wcmV2aWV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NsZWlzcy9wcm9qZWN0cy9ub2RlL25neC1hd2Vzb21lLXVwbG9hZGVyL3Byb2plY3RzL2ZpbGUtcGlja2VyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXByZXZpZXctY29udGFpbmVyL2ZpbGUtcHJldmlldy1pdGVtL2ZpbGUtcHJldmlldy1pdGVtLmNvbXBvbmVudC50cyIsImxpYi9maWxlLXByZXZpZXctY29udGFpbmVyL2ZpbGUtcHJldmlldy1pdGVtL2ZpbGUtcHJldmlldy1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVGLE9BQU8sRUFBMEIsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRS9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7O0lDSGxGLCtCQUNFO0lBQUEsK0JBQ0Y7SUFEdUIsMEtBQVMseUNBQTJCLElBQUM7SUFBMUQsaUJBQ0Y7SUFBQSxpQkFBTTs7O0lBREMsZUFBZTtJQUFmLHNEQUFlOzs7SUFFdEIsK0JBSUU7SUFBQSxZQUNGO0lBQUEsaUJBQU07OztJQUhKLG1FQUE4QztJQUU5QyxlQUNGO0lBREUsZ0RBQ0Y7OztJQU9BLCtCQUFzRDtJQUFBLFlBQWtDO0lBQUEsaUJBQU07OztJQUF4QyxlQUFrQztJQUFsQyx1R0FBa0M7OztJQUd0RiwrQkFDRTtJQUFBLDJCQUFtQztJQUNyQyxpQkFBTTs7OztJQUNOLHdDQUFxRTtJQUFuQyxtTkFBbUI7SUFBQyxpQkFBZTs7O0lBUXZFLHdCQUVJOzs7SUFE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ekUsbUNBQWdCO1FBa0R4QyxlQUE4RjtRQUE5RixtREFBOEYseUZBQUE7O2tERG5DL0Ysd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDtvRUFFMkIsVUFBVTtrQkFBbkMsTUFBTTtZQUNtQixhQUFhO2tCQUF0QyxNQUFNO1lBQ21CLFVBQVU7a0JBQW5DLE1BQU07WUFDbUIsWUFBWTtrQkFBckMsTUFBTTtZQUNTLFFBQVE7a0JBQXZCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9maWxlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZpbGVQcmV2aWV3TW9kZWwgfSBmcm9tICcuLy4uLy4uL2ZpbGUtcHJldmlldy5tb2RlbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEdFVF9GSUxFX0NBVEVHT1JZX1RZUEUsIEdFVF9GSUxFX1RZUEUsIElTX0lNQUdFX0ZJTEUgfSBmcm9tICcuLi8uLi9maWxlLXVwbG9hZC51dGlscyc7XG5pbXBvcnQgeyAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGaWxlUGlja2VyQWRhcHRlciwgVXBsb2FkUmVzcG9uc2UsIFVwbG9hZFN0YXR1cyB9IGZyb20gJy4uLy4uL2ZpbGUtcGlja2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgVXBsb2FkZXJDYXB0aW9ucyB9IGZyb20gJy4uLy4uL3VwbG9hZGVyLWNhcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmlsZS1wcmV2aWV3LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1wcmV2aWV3LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLXByZXZpZXctaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVQcmV2aWV3SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVhZG9ubHkgcmVtb3ZlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVByZXZpZXdNb2RlbD4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyByZWFkb25seSB1cGxvYWRTdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlUHJldmlld01vZGVsPigpO1xuICBAT3V0cHV0KCkgcHVibGljIHJlYWRvbmx5IHVwbG9hZEZhaWwgPSBuZXcgRXZlbnRFbWl0dGVyPEh0dHBFcnJvclJlc3BvbnNlPigpO1xuICBAT3V0cHV0KCkgcHVibGljIHJlYWRvbmx5IGltYWdlQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVByZXZpZXdNb2RlbD4oKTtcbiAgQElucHV0KCkgcHVibGljIGZpbGVJdGVtOiBGaWxlUHJldmlld01vZGVsO1xuICBASW5wdXQoKSBhZGFwdGVyOiBGaWxlUGlja2VyQWRhcHRlcjtcbiAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBjYXB0aW9uczogVXBsb2FkZXJDYXB0aW9ucztcbiAgQElucHV0KCkgZW5hYmxlQXV0b1VwbG9hZDogYm9vbGVhbjtcbiAgcHVibGljIHVwbG9hZFByb2dyZXNzOiBudW1iZXI7XG4gIHB1YmxpYyBpc0ltYWdlRmlsZTogYm9vbGVhbjtcbiAgcHVibGljIGZpbGVUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBzYWZlVXJsOiBTYWZlUmVzb3VyY2VVcmw7XG4gIHB1YmxpYyB1cGxvYWRFcnJvcjogYm9vbGVhbjtcbiAgcHVibGljIHVwbG9hZFJlc3BvbnNlOiBhbnk7XG4gIHByaXZhdGUgX3VwbG9hZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZpbGVTZXJ2aWNlOiBGaWxlUGlja2VyU2VydmljZSxcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5maWxlSXRlbS5maWxlKSB7XG4gICAgICBpZiAodGhpcy5maWxlSXRlbS51cGxvYWRSZXNwb25zZSkge1xuICAgICAgICB0aGlzLnVwbG9hZFJlc3BvbnNlID0gdGhpcy5maWxlSXRlbS51cGxvYWRSZXNwb25zZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3VwbG9hZEZpbGUodGhpcy5maWxlSXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNhZmVVcmwgPSB0aGlzLmdldFNhZmVVcmwodGhpcy5maWxlSXRlbS5maWxlKTtcbiAgICB9XG4gICAgdGhpcy5maWxlVHlwZSA9IEdFVF9GSUxFX1RZUEUodGhpcy5maWxlSXRlbS5maWxlTmFtZSk7XG4gICAgdGhpcy5pc0ltYWdlRmlsZSA9IElTX0lNQUdFX0ZJTEUodGhpcy5maWxlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2FmZVVybChmaWxlOiBGaWxlIHwgQmxvYik6IFNhZmVSZXNvdXJjZVVybCB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVNlcnZpY2UuY3JlYXRlU2FmZVVybChmaWxlKTtcbiAgfVxuICAvKiogQ29udmVydHMgYnl0ZXMgdG8gbmljZSBzaXplICovXG4gIG5pY2VCeXRlcyh4KTogc3RyaW5nIHtcbiAgICBjb25zdCB1bml0cyA9IFsnYnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcbiAgICBsZXQgbCA9IDA7XG4gICAgbGV0IG4gPSBwYXJzZUludCh4LCAxMCkgfHwgMDtcbiAgICB3aGlsZSAobiA+PSAxMDI0ICYmICsrbCkge1xuICAgICAgbiA9IG4gLyAxMDI0O1xuICAgIH1cbiAgICAvLyBpbmNsdWRlIGEgZGVjaW1hbCBwb2ludCBhbmQgYSB0ZW50aHMtcGxhY2UgZGlnaXQgaWYgcHJlc2VudGluZ1xuICAgIC8vIGxlc3MgdGhhbiB0ZW4gb2YgS0Igb3IgZ3JlYXRlciB1bml0c1xuICAgIHJldHVybiBuLnRvRml4ZWQobiA8IDEwICYmIGwgPiAwID8gMSA6IDApICsgJyAnICsgdW5pdHNbbF07XG4gIH1cbiAgLyoqIFJldHJ5IGZpbGUgdXBsb2FkIHdoZW4gdXBsb2FkIHdhcyB1bnN1Y2Nlc3NmdWxsICovXG4gIHB1YmxpYyBvblJldHJ5KCk6IHZvaWQge1xuICAgIHRoaXMuX3VwbG9hZEZpbGUodGhpcy5maWxlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgb25SZW1vdmUoZmlsZUl0ZW06IEZpbGVQcmV2aWV3TW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLl91cGxvYWRVbnN1YnNjcmliZSgpO1xuICAgIHRoaXMucmVtb3ZlRmlsZS5uZXh0KHtcbiAgICAgIC4uLmZpbGVJdGVtLFxuICAgICAgdXBsb2FkUmVzcG9uc2U6IHRoaXMudXBsb2FkUmVzcG9uc2VcbiAgICB9KTtcbiAgIH1cblxuICBwcml2YXRlIF91cGxvYWRGaWxlKGZpbGVJdGVtOiBGaWxlUHJldmlld01vZGVsKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZUF1dG9VcGxvYWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWRhcHRlcikge1xuICAgICAgdGhpcy5fdXBsb2FkU3Vic2NyaXB0aW9uID1cbiAgICAgIHRoaXMuYWRhcHRlci51cGxvYWRGaWxlKGZpbGVJdGVtKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBVcGxvYWRSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXMgPT09IFVwbG9hZFN0YXR1cy5VUExPQURFRCkge1xuICAgICAgICAgIHRoaXMuX29uVXBsb2FkU3VjY2VzcyhyZXMuYm9keSwgZmlsZUl0ZW0pO1xuICAgICAgICAgIHRoaXMudXBsb2FkUHJvZ3Jlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcyAmJiByZXMuc3RhdHVzID09PSBVcGxvYWRTdGF0dXMuSU5fUFJPR1JFU1MpIHtcbiAgICAgICAgICB0aGlzLnVwbG9hZFByb2dyZXNzID0gcmVzLnByb2dyZXNzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cyA9PT0gVXBsb2FkU3RhdHVzLkVSUk9SKSB7XG4gICAgICAgICAgdGhpcy51cGxvYWRFcnJvciA9IHRydWU7XG4gICAgICAgICAgdGhpcy51cGxvYWRGYWlsLm5leHQocmVzLmJvZHkpO1xuICAgICAgICAgIHRoaXMudXBsb2FkUHJvZ3Jlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sIChlcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy51cGxvYWRFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMudXBsb2FkRmFpbC5uZXh0KGVyKTtcbiAgICAgICAgdGhpcy51cGxvYWRQcm9ncmVzcyA9IHVuZGVmaW5lZDtcbiAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2Fybignbm8gYWRhcHRlciB3YXMgcHJvdmlkZWQnKTtcbiAgICB9XG4gIH1cbiAgLyoqIEVtaXRzIGV2ZW50IHdoZW4gZmlsZSB1cGxvYWQgYXBpIHJldHVybnMgc3VjY2VzcyAgKi9cbiAgcHJpdmF0ZSBfb25VcGxvYWRTdWNjZXNzKHVwbG9hZFJlc3BvbnNlOiBhbnksIGZpbGVJdGVtOiBGaWxlUHJldmlld01vZGVsKTogdm9pZCB7XG4gICAgdGhpcy51cGxvYWRSZXNwb25zZSA9IHVwbG9hZFJlc3BvbnNlO1xuICAgIHRoaXMuZmlsZUl0ZW0udXBsb2FkUmVzcG9uc2UgPSB1cGxvYWRSZXNwb25zZTtcbiAgICB0aGlzLnVwbG9hZFN1Y2Nlc3MubmV4dCh7Li4uZmlsZUl0ZW0sIHVwbG9hZFJlc3BvbnNlfSk7XG4gIH1cblxuIC8qKiBDYW5jZWwgdXBsb2FkLiBDYW5jZWxzIHJlcXVlc3QgICovXG4gcHJpdmF0ZSBfdXBsb2FkVW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gIGlmICh0aGlzLl91cGxvYWRTdWJzY3JpcHRpb24pIHtcbiAgICB0aGlzLl91cGxvYWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgIH1cbiB9XG5cbn1cbiIsIiAgICA8ZGl2IGNsYXNzPVwiZmlsZS1wcmV2aWV3LXdyYXBwZXJcIiAqbmdJZj1cImZpbGVJdGVtXCIgW25nQ2xhc3NdID0gXCJ7J3Zpc3VhbGx5LWhpZGRlbic6IGl0ZW1UZW1wbGF0ZX1cIj5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXByZXZpZXctdGh1bWJuYWlsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1wcmV2aWV3LXRodW1ibmFpbFwiICpuZ0lmPVwiaXNJbWFnZUZpbGUgJiYgZmlsZUl0ZW0/LmZpbGVcIiA+XG4gICAgICAgICAgICA8aW1nIFtzcmNdPVwic2FmZVVybFwiIChjbGljayk9XCJpbWFnZUNsaWNrZWQubmV4dChmaWxlSXRlbSlcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3RoZXItcHJldmlldy10aHVtYm5haWxcIlxuICAgICAgICAgICAgKm5nSWY9XCIhaXNJbWFnZUZpbGUgfHwgIWZpbGVJdGVtPy5maWxlXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImZpbGVJdGVtLmZpbGVOYW1lLnNwbGl0KCcuJykucG9wKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge3tmaWxlVHlwZX19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1ibmFpbC1iYWNrZHJvcFwiPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1wcmV2aWV3LWRlc2NyaXB0aW9uXCIgPlxuICAgICAgICAgIDxhIGNsYXNzPVwiZmlsZS1wcmV2aWV3LXRpdGxlXCIgW3RpdGxlXT1cImZpbGVJdGVtLmZpbGVOYW1lXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjxwPnt7ZmlsZUl0ZW0uZmlsZU5hbWV9fTwvcD48L2E+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtcHJldmlldy1zaXplXCIgKm5nSWY9XCJmaWxlSXRlbT8uZmlsZVwiPnt7bmljZUJ5dGVzKGZpbGVJdGVtLmZpbGU/LnNpemUpfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXByZXZpZXctYWN0aW9uc1wiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtY2hlY2ttYXJrLXdyYXBwZXJcIiAqbmdJZj1cIiF1cGxvYWRFcnJvciAmJiAhdXBsb2FkUHJvZ3Jlc3MgJiYgZmlsZUl0ZW0/LmZpbGVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZ3gtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cmVmcmVzaC1pY29uICpuZ0lmPVwidXBsb2FkRXJyb3JcIiAoY2xpY2spPVwib25SZXRyeSgpXCI+PC9yZWZyZXNoLWljb24+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5neC1jbG9zZS1pY29uLXdyYXBwZXJcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uUmVtb3ZlKGZpbGVJdGVtKVwiXG4gICAgICAgICAgICAgdGl0bGU9XCJ7e2NhcHRpb25zPy5wcmV2aWV3Q2FyZD8ucmVtb3ZlfX1cIlxuICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGNsb3NlLWljb24gY2xhc3M9XCJuZ3gtY2xvc2UtaWNvblwiPjwvY2xvc2UtaWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgY2xhc3M9XCJmaWxlLXVwbG9hZC1lcnJvci13cmFwcGVyXCIgKm5nSWY9XCJ1cGxvYWRFcnJvciAmJiAhdXBsb2FkUHJvZ3Jlc3NcIiBocmVmPVwiamF2YXNjaXB0OnZvaWQoMClcIlxuICAgICAgICAgIHRpdGxlPVwie3tjYXB0aW9ucz8ucHJldmlld0NhcmQ/LnVwbG9hZEVycm9yfX1cIj5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVwbG9hZFByb2dyZXNzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXVwbG9hZC1wcm9ncmVzcy1iYXItd3JhcHBlclwiICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtdXBsb2FkLXByb2dyZXNzLWJhclwiICBbbmdTdHlsZV09XCJ7ICd3aWR0aCc6IHVwbG9hZFByb2dyZXNzICsgJyUnIH1cIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtdXBsb2FkLXBlcmNlbnRhZ2Utd3JhcHBlclwiID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS11cGxvYWQtcGVyY2VudGFnZVwiPnt7dXBsb2FkUHJvZ3Jlc3N9fSAlPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8L2Rpdj5cblxuPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZTtjb250ZXh0OiB7ZmlsZUl0ZW06IGZpbGVJdGVtLCB1cGxvYWRQcm9ncmVzczogdXBsb2FkUHJvZ3Jlc3N9XCIgPiA8L25nLWNvbnRhaW5lcj5cbiJdfQ==