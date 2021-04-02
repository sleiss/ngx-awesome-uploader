import { FilePickerService } from './file-picker.service';
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { GET_FILE_CATEGORY_TYPE } from './file-upload.utils';
import { FileValidationTypes } from './validation-error.model';
import { FilePickerAdapter } from './file-picker.adapter';
import { combineLatest, of, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { DefaultCaptions } from './default-captions';
import { DEFAULT_CROPPER_OPTIONS, BITS_TO_MB } from './file-picker.constants';
import * as i0 from "@angular/core";
import * as i1 from "./file-picker.service";
import * as i2 from "@angular/common";
import * as i3 from "./file-drop/file-drop.component";
import * as i4 from "./file-preview-container/file-preview-container.component";
function FilePickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function FilePickerComponent_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(2); return _r1.click(); });
    i0.ɵɵelementStart(1, "file-drop", 7);
    i0.ɵɵlistener("onFileDrop", function FilePickerComponent_div_0_Template_file_drop_onFileDrop_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.dropped($event); });
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("customstyle", "custom-drag")("captions", ctx_r0.captions);
} }
function FilePickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelementStart(2, "img", 10);
    i0.ɵɵlistener("load", function FilePickerComponent_div_3_Template_img_load_2_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.cropperImgLoaded($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 11);
    i0.ɵɵelementStart(4, "button", 12);
    i0.ɵɵlistener("click", function FilePickerComponent_div_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onCropSubmit(); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 13);
    i0.ɵɵlistener("click", function FilePickerComponent_div_3_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.closeCropper({ file: ctx_r10.currentCropperFile, fileName: ctx_r10.currentCropperFile.name }); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r2.safeCropImgUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.captions == null ? null : ctx_r2.captions.cropper == null ? null : ctx_r2.captions.cropper.crop, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.captions == null ? null : ctx_r2.captions.cropper == null ? null : ctx_r2.captions.cropper.cancel, " ");
} }
function FilePickerComponent_file_preview_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "file-preview-container", 14);
    i0.ɵɵlistener("removeFile", function FilePickerComponent_file_preview_container_5_Template_file_preview_container_removeFile_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.removeFile($event); })("uploadSuccess", function FilePickerComponent_file_preview_container_5_Template_file_preview_container_uploadSuccess_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onUploadSuccess($event); })("uploadFail", function FilePickerComponent_file_preview_container_5_Template_file_preview_container_uploadFail_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onUploadFail($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("previewFiles", ctx_r3.files)("adapter", ctx_r3.adapter)("itemTemplate", ctx_r3.itemTemplate)("captions", ctx_r3.captions)("enableAutoUpload", ctx_r3.enableAutoUpload);
} }
const _c0 = [[["", 8, "dropzonetemplate"]]];
const _c1 = function (a0) { return { "visually-hidden": a0 }; };
const _c2 = [".dropzoneTemplate"];
export class FilePickerComponent {
    constructor(fileService, elementRef) {
        this.fileService = fileService;
        this.elementRef = elementRef;
        /** Emitted when file upload via api successfully. Emitted for every file */
        this.uploadSuccess = new EventEmitter();
        /** Emitted when file upload via api failed. Emitted for every file */
        this.uploadFail = new EventEmitter();
        /** Emitted when file is removed via api successfully. Emitted for every file */
        this.removeSuccess = new EventEmitter();
        /** Emitted on file validation fail */
        this.validationError = new EventEmitter();
        /** Emitted when file is added and passed validations. Not uploaded yet */
        this.fileAdded = new EventEmitter();
        /** Emitted when file is removed from fileList */
        this.fileRemoved = new EventEmitter();
        /** Whether to enable cropper. Default: disabled */
        this.enableCropper = false;
        /** Whether to show default drag and drop zone. Default:true */
        this.showeDragDropZone = true;
        /** Whether to show default files preview container. Default: true */
        this.showPreviewContainer = true;
        /** Single or multiple. Default: multi */
        this.uploadType = 'multi';
        /** Cropped canvas options. */
        this.croppedCanvasOptions = {};
        /** Custom captions input. Used for multi language support */
        this.captions = DefaultCaptions;
        /** captions object */
        /** Whether to auto upload file on file choose or not. Default: true */
        this.enableAutoUpload = true;
        this.files = [];
        /** Files array for cropper. Will be shown equentially if crop enabled */
        this.filesForCropper = [];
        this._cropClosed$ = new Subject();
        this._onDestroy$ = new Subject();
    }
    ngOnInit() {
        this._setCropperOptions();
        this._listenToCropClose();
    }
    ngOnDestroy() {
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }
    /** On input file selected */
    onChange(event) {
        const files = Array.from(event);
        this.handleFiles(files).subscribe();
    }
    /** On file dropped */
    dropped(event) {
        const files = event.files;
        const filesForUpload = [];
        for (const droppedFile of files) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry;
                fileEntry.file((file) => {
                    filesForUpload.push(file);
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry;
                // console.log(droppedFile.relativePath, fileEntry);
            }
        }
        setTimeout(() => this.handleFiles(filesForUpload).subscribe());
    }
    /** Emits event when file upload api returns success  */
    onUploadSuccess(fileItem) {
        this.uploadSuccess.next(fileItem);
    }
    /** Emits event when file upload api returns success  */
    onUploadFail(er) {
        this.uploadFail.next(er);
    }
    /** Emits event when file remove api returns success  */
    onRemoveSuccess(fileItem) {
        this.removeSuccess.next(fileItem);
        this.removeFileFromList(fileItem);
    }
    getSafeUrl(file) {
        return this.fileService.createSafeUrl(file);
    }
    /** Removes file from UI and sends api */
    removeFile(fileItem) {
        if (!this.enableAutoUpload) {
            this.removeFileFromList(fileItem);
            return;
        }
        if (this.adapter) {
            this.adapter.removeFile(fileItem).subscribe(res => {
                this.onRemoveSuccess(fileItem);
            });
        }
        else {
            console.warn('no adapter was provided');
        }
    }
    /** Listen when Cropper is closed and open new cropper if next image exists */
    _listenToCropClose() {
        this._cropClosed$
            .pipe(takeUntil(this._onDestroy$))
            .subscribe((res) => {
            const croppedIndex = this.filesForCropper.findIndex(item => item.name === res.fileName);
            const nextFile = croppedIndex !== -1
                ? this.filesForCropper[croppedIndex + 1]
                : undefined;
            this.filesForCropper = [...this.filesForCropper].filter(item => item.name !== res.fileName);
            if (nextFile) {
                this.openCropper(nextFile);
            }
        });
    }
    /** Sets custom cropper options if avaiable */
    _setCropperOptions() {
        if (!this.cropperOptions) {
            this._setDefaultCropperOptions();
        }
    }
    /** Sets manual cropper options if no custom options are avaiable */
    _setDefaultCropperOptions() {
        this.cropperOptions = DEFAULT_CROPPER_OPTIONS;
    }
    /** Handles input and drag/drop files */
    handleFiles(files) {
        if (!this.isValidMaxFileCount(files)) {
            return of(null);
        }
        const isValidUploadSync = files.every(item => this._validateFileSync(item));
        const asyncFunctions = files.map(item => this._validateFileAsync(item));
        return combineLatest([...asyncFunctions]).pipe(map(res => {
            const isValidUploadAsync = res.every(result => result === true);
            if (!isValidUploadSync || !isValidUploadAsync) {
                return;
            }
            files.forEach((file, index) => {
                this.handleInputFile(file, index);
            });
        }));
    }
    /** Validates synchronous validations */
    _validateFileSync(file) {
        if (!file) {
            return;
        }
        if (!this.isValidUploadType(file)) {
            return;
        }
        if (!this.isValidExtension(file, file.name)) {
            return;
        }
        return true;
    }
    /** Validates asynchronous validations */
    _validateFileAsync(file) {
        if (!this.customValidator) {
            return of(true);
        }
        return this.customValidator(file).pipe(tap(res => {
            if (!res) {
                this.validationError.next({
                    file,
                    error: FileValidationTypes.customValidator
                });
            }
        }));
    }
    /** Handles input and drag&drop files */
    handleInputFile(file, index) {
        const type = GET_FILE_CATEGORY_TYPE(file.type);
        if (type === 'image' && this.enableCropper) {
            this.filesForCropper.push(file);
            if (!this.currentCropperFile) {
                this.openCropper(file);
            }
        }
        else {
            /** Size is not initially checked on handleInputFiles because of cropper size change */
            if (this.isValidSize(file, file.size)) {
                this.pushFile(file);
            }
        }
    }
    /** Validates if upload type is single so another file cannot be added */
    isValidUploadType(file) {
        if (this.uploadType === 'single' && this.files.length > 0) {
            this.validationError.next({
                file,
                error: FileValidationTypes.uploadType
            });
            return false;
        }
        else {
            return true;
        }
    }
    /** Validates max file count */
    isValidMaxFileCount(files) {
        if (!this.fileMaxCount || this.fileMaxCount >= this.files.length + files.length) {
            return true;
        }
        else {
            this.validationError.next({
                file: null,
                error: FileValidationTypes.fileMaxCount
            });
            return false;
        }
    }
    /** Add file to file list after succesfull validation */
    pushFile(file, fileName = file.name) {
        this.files.push({ file, fileName });
        this.fileAdded.next({ file, fileName });
    }
    /** Opens cropper for image crop */
    openCropper(file) {
        if (window.CROPPER || typeof Cropper !== 'undefined') {
            this.safeCropImgUrl = this.fileService.createSafeUrl(file);
            this.currentCropperFile = file;
        }
        else {
            console.warn("please import cropperjs script and styles to use cropper feature or disable it by setting [enableCropper]='false'");
            return;
        }
    }
    /** On img load event */
    cropperImgLoaded(e) {
        const image = document.getElementById('cropper-img');
        this.cropper = new Cropper(image, this.cropperOptions);
    }
    /** Close or cancel cropper */
    closeCropper(filePreview) {
        this.currentCropperFile = undefined;
        this.cropper = undefined;
        setTimeout(() => this._cropClosed$.next(filePreview), 200);
    }
    /** Removes files from files list */
    removeFileFromList(file) {
        this.files = this.files.filter(f => f.fileName !== file.fileName);
        this.fileRemoved.next(file);
    }
    /** Validates file extension */
    isValidExtension(file, fileName) {
        if (!this.fileExtensions) {
            return true;
        }
        const extension = fileName.split('.').pop();
        const fileExtensions = this.fileExtensions.map(ext => ext.toLowerCase());
        if (fileExtensions.indexOf(extension.toLowerCase()) === -1) {
            this.validationError.next({ file, error: FileValidationTypes.extensions });
            return false;
        }
        return true;
    }
    /** Validates selected file size and total file size */
    isValidSize(file, size) {
        /** Validating selected file size */
        const res = BITS_TO_MB(size);
        let isValidFileSize;
        let isValidTotalFileSize;
        if (!this.fileMaxSize || (this.fileMaxSize && res < this.fileMaxSize)) {
            isValidFileSize = true;
        }
        else {
            this.validationError.next({
                file,
                error: FileValidationTypes.fileMaxSize
            });
        }
        /** Validating Total Files Size */
        const totalBits = this.files
            .map(f => f.file ? f.file.size : 0)
            .reduce((acc, curr) => acc + curr, 0);
        if (!this.totalMaxSize ||
            (this.totalMaxSize &&
                BITS_TO_MB(totalBits + file.size) < this.totalMaxSize)) {
            isValidTotalFileSize = true;
        }
        else {
            this.validationError.next({
                file,
                error: FileValidationTypes.totalMaxSize
            });
        }
        return !!isValidFileSize && isValidTotalFileSize;
    }
    /** when crop button submitted */
    onCropSubmit() {
        this.cropper
            .getCroppedCanvas(this.croppedCanvasOptions)
            .toBlob(this._blobFallBack.bind(this), 'image/png');
    }
    /** After crop submit */
    _blobFallBack(blob) {
        if (!blob) {
            return;
        }
        if (this.isValidSize(blob, blob.size)) {
            this.pushFile(blob, this.currentCropperFile.name);
        }
        this.closeCropper({
            file: blob,
            fileName: this.currentCropperFile.name
        });
    }
}
FilePickerComponent.ɵfac = function FilePickerComponent_Factory(t) { return new (t || FilePickerComponent)(i0.ɵɵdirectiveInject(i1.FilePickerService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
FilePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilePickerComponent, selectors: [["ngx-awesome-uploader"]], inputs: { customValidator: "customValidator", enableCropper: "enableCropper", showeDragDropZone: "showeDragDropZone", showPreviewContainer: "showPreviewContainer", itemTemplate: "itemTemplate", uploadType: "uploadType", fileMaxSize: "fileMaxSize", fileMaxCount: "fileMaxCount", totalMaxSize: "totalMaxSize", accept: "accept", fileExtensions: "fileExtensions", cropperOptions: "cropperOptions", croppedCanvasOptions: "croppedCanvasOptions", adapter: "adapter", dropzoneTemplate: "dropzoneTemplate", captions: "captions", enableAutoUpload: "enableAutoUpload" }, outputs: { uploadSuccess: "uploadSuccess", uploadFail: "uploadFail", removeSuccess: "removeSuccess", validationError: "validationError", fileAdded: "fileAdded", fileRemoved: "fileRemoved" }, ngContentSelectors: _c2, decls: 6, vars: 8, consts: [["class", "file-drop-wrapper", 3, "click", 4, "ngIf"], ["type", "file", "name", "file[]", "id", "fileInput", 1, "file-input", 3, "multiple", "accept", "click", "change"], ["fileInput", ""], ["class", "cropperJsOverlay", 4, "ngIf"], [1, "files-preview-wrapper", 3, "ngClass"], [3, "previewFiles", "adapter", "itemTemplate", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", 4, "ngIf"], [1, "file-drop-wrapper", 3, "click"], [3, "customstyle", "captions", "onFileDrop"], [1, "cropperJsOverlay"], [1, "cropperJsBox"], ["id", "cropper-img", 3, "src", "load"], [1, "cropper-actions"], ["type", "button", 1, "cropSubmit", 3, "click"], ["type", "button", 1, "cropCancel", 3, "click"], [3, "previewFiles", "adapter", "itemTemplate", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail"]], template: function FilePickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵtemplate(0, FilePickerComponent_div_0_Template, 3, 2, "div", 0);
        i0.ɵɵelementStart(1, "input", 1, 2);
        i0.ɵɵlistener("click", function FilePickerComponent_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r15); const _r1 = i0.ɵɵreference(2); return _r1.value = null; })("change", function FilePickerComponent_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r15); const _r1 = i0.ɵɵreference(2); return ctx.onChange(_r1.files); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, FilePickerComponent_div_3_Template, 8, 3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtemplate(5, FilePickerComponent_file_preview_container_5_Template, 1, 5, "file-preview-container", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showeDragDropZone);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("multiple", ctx.uploadType === "multi" ? "multiple" : "")("accept", ctx.accept);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.currentCropperFile);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1, !ctx.showPreviewContainer));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.files);
    } }, directives: [i2.NgIf, i2.NgClass, i3.FileComponent, i4.FilePreviewContainerComponent], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{align-items:center;border-radius:6px;display:flex;flex-direction:column;height:100%;max-width:440px;overflow:auto}.files-preview-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%}#cropper-img[_ngcontent-%COMP%]{display:none;max-width:60vw}#cropper-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.file-drop-wrapper[_ngcontent-%COMP%]{background:#fafbfd;padding-top:20px;width:100%}.preview-container[_ngcontent-%COMP%]{display:flex}.cropperJsOverlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.32);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:999}.cropperJsBox[_ngcontent-%COMP%], .cropperJsOverlay[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.cropperJsBox[_ngcontent-%COMP%]{flex-direction:column;max-height:calc(100vh - 88px);max-width:90vw}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]{display:flex}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;border-radius:6px;cursor:pointer;margin:5px;padding:12px 25px}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]   .cropSubmit[_ngcontent-%COMP%]{background:#16a085;color:#fff} .cropper img{max-height:300px!important}#images[_ngcontent-%COMP%]{display:flex;justify-content:center;overflow-x:auto;width:500px}#images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-items:flex-end;display:flex;flex:0 0 100px;flex-direction:column;margin:0 2px}#fileInput[_ngcontent-%COMP%]{display:none}.uploader-submit-btn[_ngcontent-%COMP%]{background:#ffd740;border:0;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);color:rgba(0,0,0,.87);cursor:pointer;font-size:15px;line-height:36px;margin-top:12px;padding:0 16px}button[_ngcontent-%COMP%]:disabled{background:#dcdcdc;color:rgba(0,0,0,.26)}.visually-hidden[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilePickerComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-awesome-uploader',
                templateUrl: './file-picker.component.html',
                styleUrls: ['./file-picker.component.scss']
            }]
    }], function () { return [{ type: i1.FilePickerService }, { type: i0.ElementRef }]; }, { uploadSuccess: [{
            type: Output
        }], uploadFail: [{
            type: Output
        }], removeSuccess: [{
            type: Output
        }], validationError: [{
            type: Output
        }], fileAdded: [{
            type: Output
        }], fileRemoved: [{
            type: Output
        }], customValidator: [{
            type: Input
        }], enableCropper: [{
            type: Input
        }], showeDragDropZone: [{
            type: Input
        }], showPreviewContainer: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], uploadType: [{
            type: Input
        }], fileMaxSize: [{
            type: Input
        }], fileMaxCount: [{
            type: Input
        }], totalMaxSize: [{
            type: Input
        }], accept: [{
            type: Input
        }], fileExtensions: [{
            type: Input
        }], cropperOptions: [{
            type: Input
        }], croppedCanvasOptions: [{
            type: Input
        }], adapter: [{
            type: Input
        }], dropzoneTemplate: [{
            type: Input
        }], captions: [{
            type: Input
        }], enableAutoUpload: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NsZWlzcy9wcm9qZWN0cy9ub2RlL25neC1hd2Vzb21lLXVwbG9hZGVyL3Byb2plY3RzL2ZpbGUtcGlja2VyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9maWxlLXBpY2tlci5jb21wb25lbnQudHMiLCJsaWIvZmlsZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBbUIsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU0xRCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7SUMxQjlFLDhCQUtFO0lBSkEsNktBQVMsV0FBaUIsSUFBQztJQUkzQixvQ0FLRTtJQUpBLDZNQUE4QjtJQUk5QixrQkFBd0M7SUFDMUMsaUJBQVk7SUFDZCxpQkFBTTs7O0lBTEYsZUFBNkI7SUFBN0IsMkNBQTZCLDZCQUFBOzs7O0lBbUJqQyw4QkFDQTtJQUFBLDhCQUNFO0lBQUEsK0JBS0E7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QUE1QixLQUFLO1lBRUcsT0FBTztrQkFBZixLQUFLO1lBRUcsZ0JBQWdCO2tCQUF4QixLQUFLO1lBRUcsUUFBUTtrQkFBaEIsS0FBSztZQUdHLGdCQUFnQjtrQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9maWxlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZpbGVQcmV2aWV3TW9kZWwgfSBmcm9tICcuL2ZpbGUtcHJldmlldy5tb2RlbCc7XG5pbXBvcnQgeyBHRVRfRklMRV9DQVRFR09SWV9UWVBFIH0gZnJvbSAnLi9maWxlLXVwbG9hZC51dGlscyc7XG5pbXBvcnQgeyBGaWxlVmFsaWRhdGlvblR5cGVzLCBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tICcuL3ZhbGlkYXRpb24tZXJyb3IubW9kZWwnO1xuaW1wb3J0IHsgRmlsZVBpY2tlckFkYXB0ZXIgfSBmcm9tICcuL2ZpbGUtcGlja2VyLmFkYXB0ZXInO1xuaW1wb3J0IHtcbiAgRmlsZVN5c3RlbURpcmVjdG9yeUVudHJ5LFxuICBGaWxlU3lzdGVtRmlsZUVudHJ5LFxuICBVcGxvYWRFdmVudFxufSBmcm9tICcuL2ZpbGUtZHJvcCc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERlZmF1bHRDYXB0aW9ucyB9IGZyb20gJy4vZGVmYXVsdC1jYXB0aW9ucyc7XG5pbXBvcnQgeyBVcGxvYWRlckNhcHRpb25zIH0gZnJvbSAnLi91cGxvYWRlci1jYXB0aW9ucyc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERFRkFVTFRfQ1JPUFBFUl9PUFRJT05TLCBCSVRTX1RPX01CIH0gZnJvbSAnLi9maWxlLXBpY2tlci5jb25zdGFudHMnO1xuXG5kZWNsYXJlIHZhciBDcm9wcGVyO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWF3ZXNvbWUtdXBsb2FkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBFbWl0dGVkIHdoZW4gZmlsZSB1cGxvYWQgdmlhIGFwaSBzdWNjZXNzZnVsbHkuIEVtaXR0ZWQgZm9yIGV2ZXJ5IGZpbGUgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHVwbG9hZFN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVQcmV2aWV3TW9kZWw+KCk7XG4gIC8qKiBFbWl0dGVkIHdoZW4gZmlsZSB1cGxvYWQgdmlhIGFwaSBmYWlsZWQuIEVtaXR0ZWQgZm9yIGV2ZXJ5IGZpbGUgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHVwbG9hZEZhaWwgPSBuZXcgRXZlbnRFbWl0dGVyPEh0dHBFcnJvclJlc3BvbnNlPigpO1xuICAvKiogRW1pdHRlZCB3aGVuIGZpbGUgaXMgcmVtb3ZlZCB2aWEgYXBpIHN1Y2Nlc3NmdWxseS4gRW1pdHRlZCBmb3IgZXZlcnkgZmlsZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVtb3ZlU3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVByZXZpZXdNb2RlbD4oKTtcbiAgLyoqIEVtaXR0ZWQgb24gZmlsZSB2YWxpZGF0aW9uIGZhaWwgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbGlkYXRpb25FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8VmFsaWRhdGlvbkVycm9yPigpO1xuICAvKiogRW1pdHRlZCB3aGVuIGZpbGUgaXMgYWRkZWQgYW5kIHBhc3NlZCB2YWxpZGF0aW9ucy4gTm90IHVwbG9hZGVkIHlldCAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZmlsZUFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlUHJldmlld01vZGVsPigpO1xuICAvKiogRW1pdHRlZCB3aGVuIGZpbGUgaXMgcmVtb3ZlZCBmcm9tIGZpbGVMaXN0ICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBmaWxlUmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVByZXZpZXdNb2RlbD4oKTtcbiAgLyoqIEN1c3RvbSB2YWxpZGF0b3IgZnVuY3Rpb24gKi9cbiAgQElucHV0KCkgY3VzdG9tVmFsaWRhdG9yOiAoZmlsZTogRmlsZSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqIFdoZXRoZXIgdG8gZW5hYmxlIGNyb3BwZXIuIERlZmF1bHQ6IGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGVuYWJsZUNyb3BwZXIgPSBmYWxzZTtcbiAgLyoqIFdoZXRoZXIgdG8gc2hvdyBkZWZhdWx0IGRyYWcgYW5kIGRyb3Agem9uZS4gRGVmYXVsdDp0cnVlICovXG4gIEBJbnB1dCgpIHNob3dlRHJhZ0Ryb3Bab25lID0gdHJ1ZTtcbiAgLyoqIFdoZXRoZXIgdG8gc2hvdyBkZWZhdWx0IGZpbGVzIHByZXZpZXcgY29udGFpbmVyLiBEZWZhdWx0OiB0cnVlICovXG4gIEBJbnB1dCgpIHNob3dQcmV2aWV3Q29udGFpbmVyID0gdHJ1ZTtcbiAgLyoqIFByZXZpZXcgSXRlbSB0ZW1wbGF0ZSAqL1xuICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiBTaW5nbGUgb3IgbXVsdGlwbGUuIERlZmF1bHQ6IG11bHRpICovXG4gIEBJbnB1dCgpIHVwbG9hZFR5cGUgPSAnbXVsdGknO1xuICAvKiogTWF4IHNpemUgb2Ygc2VsZWN0ZWQgZmlsZSBpbiBNQi4gRGVmYXVsdDogbm8gbGltaXQgKi9cbiAgQElucHV0KCkgZmlsZU1heFNpemU6IG51bWJlcjtcbiAgLyoqIE1heCBjb3VudCBvZiBmaWxlIGluIG11bHRpLXVwbG9hZC4gRGVmYXVsdDogbm8gbGltaXQgKi9cbiAgQElucHV0KCkgZmlsZU1heENvdW50OiBudW1iZXI7XG4gIC8qKiBUb3RhbCBNYXggc2l6ZSBsaW1pdCBvZiBhbGwgZmlsZXMgaW4gTUIuIERlZmF1bHQ6IG5vIGxpbWl0ICovXG4gIEBJbnB1dCgpIHRvdGFsTWF4U2l6ZTogbnVtYmVyO1xuICAvKiogV2hpY2ggZmlsZSB0eXBlcyB0byBzaG93IG9uIGNob29zZSBmaWxlIGRpYWxvZy4gRGVmYXVsdDogc2hvdyBhbGwgKi9cbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmc7XG4gIC8qKiBGaWxlIGV4dGVuc2lvbnMgZmlsdGVyICovXG4gIEBJbnB1dCgpIGZpbGVFeHRlbnNpb25zOiBzdHJpbmdbXTtcbiAgLyoqIENyb3BwZXIgb3B0aW9ucy4gKi9cbiAgQElucHV0KCkgY3JvcHBlck9wdGlvbnM6IG9iamVjdDtcbiAgLyoqIENyb3BwZWQgY2FudmFzIG9wdGlvbnMuICovXG4gIEBJbnB1dCgpIGNyb3BwZWRDYW52YXNPcHRpb25zOiBvYmplY3QgPSB7fTtcbiAgLyoqIEN1c3RvbSBhcGkgQWRhcHRlciBmb3IgdXBsb2FkaW5nL3JlbW92aW5nIGZpbGVzICovXG4gIEBJbnB1dCgpIGFkYXB0ZXI6IEZpbGVQaWNrZXJBZGFwdGVyO1xuICAvKiogIEN1c3RvbWUgdGVtcGxhdGUgZm9yIGRyb3B6b25lICovXG4gIEBJbnB1dCgpIGRyb3B6b25lVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiBDdXN0b20gY2FwdGlvbnMgaW5wdXQuIFVzZWQgZm9yIG11bHRpIGxhbmd1YWdlIHN1cHBvcnQgKi9cbiAgQElucHV0KCkgY2FwdGlvbnM6IFVwbG9hZGVyQ2FwdGlvbnMgPSBEZWZhdWx0Q2FwdGlvbnM7XG4gIC8qKiBjYXB0aW9ucyBvYmplY3QgKi9cbiAgLyoqIFdoZXRoZXIgdG8gYXV0byB1cGxvYWQgZmlsZSBvbiBmaWxlIGNob29zZSBvciBub3QuIERlZmF1bHQ6IHRydWUgKi9cbiAgQElucHV0KCkgZW5hYmxlQXV0b1VwbG9hZCA9IHRydWU7XG4gIGNyb3BwZXI6IGFueTtcbiAgcHVibGljIGZpbGVzOiBGaWxlUHJldmlld01vZGVsW10gPSBbXTtcbiAgLyoqIEZpbGVzIGFycmF5IGZvciBjcm9wcGVyLiBXaWxsIGJlIHNob3duIGVxdWVudGlhbGx5IGlmIGNyb3AgZW5hYmxlZCAqL1xuICBmaWxlc0ZvckNyb3BwZXI6IEZpbGVbXSA9IFtdO1xuICAvKiogQ3VycmVudCBmaWxlIHRvIGJlIHNob3duIGluIGNyb3BwZXIgKi9cbiAgcHVibGljIGN1cnJlbnRDcm9wcGVyRmlsZTogRmlsZTtcbiAgcHVibGljIHNhZmVDcm9wSW1nVXJsOiBTYWZlUmVzb3VyY2VVcmw7XG4gIHByaXZhdGUgX2Nyb3BDbG9zZWQkID0gbmV3IFN1YmplY3Q8RmlsZVByZXZpZXdNb2RlbD4oKTtcbiAgcHJpdmF0ZSBfb25EZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmlsZVNlcnZpY2U6IEZpbGVQaWNrZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NldENyb3BwZXJPcHRpb25zKCk7XG4gICAgdGhpcy5fbGlzdGVuVG9Dcm9wQ2xvc2UoKTtcbiAgfVxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb25EZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5fb25EZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG4gIC8qKiBPbiBpbnB1dCBmaWxlIHNlbGVjdGVkICovXG4gIHB1YmxpYyBvbkNoYW5nZShldmVudDogRmlsZVtdKSB7XG4gICAgY29uc3QgZmlsZXM6IEZpbGVbXSA9IEFycmF5LmZyb20oZXZlbnQpO1xuICAgIHRoaXMuaGFuZGxlRmlsZXMoZmlsZXMpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIE9uIGZpbGUgZHJvcHBlZCAqL1xuICBwdWJsaWMgZHJvcHBlZChldmVudDogVXBsb2FkRXZlbnQpIHtcbiAgICBjb25zdCBmaWxlcyA9IGV2ZW50LmZpbGVzO1xuICAgIGNvbnN0IGZpbGVzRm9yVXBsb2FkOiBGaWxlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRyb3BwZWRGaWxlIG9mIGZpbGVzKSB7XG4gICAgICAvLyBJcyBpdCBhIGZpbGU/XG4gICAgICBpZiAoZHJvcHBlZEZpbGUuZmlsZUVudHJ5LmlzRmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlRW50cnkgPSBkcm9wcGVkRmlsZS5maWxlRW50cnkgYXMgRmlsZVN5c3RlbUZpbGVFbnRyeTtcbiAgICAgICAgZmlsZUVudHJ5LmZpbGUoKGZpbGU6IEZpbGUpID0+IHtcbiAgICAgICAgICBmaWxlc0ZvclVwbG9hZC5wdXNoKGZpbGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEl0IHdhcyBhIGRpcmVjdG9yeSAoZW1wdHkgZGlyZWN0b3JpZXMgYXJlIGFkZGVkLCBvdGhlcndpc2Ugb25seSBmaWxlcylcbiAgICAgICAgY29uc3QgZmlsZUVudHJ5ID0gZHJvcHBlZEZpbGUuZmlsZUVudHJ5IGFzIEZpbGVTeXN0ZW1EaXJlY3RvcnlFbnRyeTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZHJvcHBlZEZpbGUucmVsYXRpdmVQYXRoLCBmaWxlRW50cnkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGFuZGxlRmlsZXMoZmlsZXNGb3JVcGxvYWQpLnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBldmVudCB3aGVuIGZpbGUgdXBsb2FkIGFwaSByZXR1cm5zIHN1Y2Nlc3MgICovXG4gIHB1YmxpYyBvblVwbG9hZFN1Y2Nlc3MoZmlsZUl0ZW06IEZpbGVQcmV2aWV3TW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLnVwbG9hZFN1Y2Nlc3MubmV4dChmaWxlSXRlbSk7XG4gIH1cblxuICAvKiogRW1pdHMgZXZlbnQgd2hlbiBmaWxlIHVwbG9hZCBhcGkgcmV0dXJucyBzdWNjZXNzICAqL1xuICBwdWJsaWMgb25VcGxvYWRGYWlsKGVyOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgIHRoaXMudXBsb2FkRmFpbC5uZXh0KGVyKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBldmVudCB3aGVuIGZpbGUgcmVtb3ZlIGFwaSByZXR1cm5zIHN1Y2Nlc3MgICovXG4gIHB1YmxpYyBvblJlbW92ZVN1Y2Nlc3MoZmlsZUl0ZW06IEZpbGVQcmV2aWV3TW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZVN1Y2Nlc3MubmV4dChmaWxlSXRlbSk7XG4gICAgdGhpcy5yZW1vdmVGaWxlRnJvbUxpc3QoZmlsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldFNhZmVVcmwoZmlsZTogRmlsZSk6IFNhZmVSZXNvdXJjZVVybCB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVNlcnZpY2UuY3JlYXRlU2FmZVVybChmaWxlKTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGZpbGUgZnJvbSBVSSBhbmQgc2VuZHMgYXBpICovXG4gIHB1YmxpYyByZW1vdmVGaWxlKGZpbGVJdGVtOiBGaWxlUHJldmlld01vZGVsKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZUF1dG9VcGxvYWQpIHtcbiAgICAgIHRoaXMucmVtb3ZlRmlsZUZyb21MaXN0KGZpbGVJdGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWRhcHRlcikge1xuICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUZpbGUoZmlsZUl0ZW0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLm9uUmVtb3ZlU3VjY2VzcyhmaWxlSXRlbSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdubyBhZGFwdGVyIHdhcyBwcm92aWRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBMaXN0ZW4gd2hlbiBDcm9wcGVyIGlzIGNsb3NlZCBhbmQgb3BlbiBuZXcgY3JvcHBlciBpZiBuZXh0IGltYWdlIGV4aXN0cyAqL1xuICBwcml2YXRlIF9saXN0ZW5Ub0Nyb3BDbG9zZSgpIHtcbiAgICB0aGlzLl9jcm9wQ2xvc2VkJFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBGaWxlUHJldmlld01vZGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyb3BwZWRJbmRleCA9IHRoaXMuZmlsZXNGb3JDcm9wcGVyLmZpbmRJbmRleChcbiAgICAgICAgICBpdGVtID0+IGl0ZW0ubmFtZSA9PT0gcmVzLmZpbGVOYW1lXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5leHRGaWxlID1cbiAgICAgICAgICBjcm9wcGVkSW5kZXggIT09IC0xXG4gICAgICAgICAgICA/IHRoaXMuZmlsZXNGb3JDcm9wcGVyW2Nyb3BwZWRJbmRleCArIDFdXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5maWxlc0ZvckNyb3BwZXIgPSBbLi4udGhpcy5maWxlc0ZvckNyb3BwZXJdLmZpbHRlcihcbiAgICAgICAgICBpdGVtID0+IGl0ZW0ubmFtZSAhPT0gcmVzLmZpbGVOYW1lXG4gICAgICAgICk7XG4gICAgICAgIGlmIChuZXh0RmlsZSkge1xuICAgICAgICAgIHRoaXMub3BlbkNyb3BwZXIobmV4dEZpbGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuICAvKiogU2V0cyBjdXN0b20gY3JvcHBlciBvcHRpb25zIGlmIGF2YWlhYmxlICovXG4gIHByaXZhdGUgX3NldENyb3BwZXJPcHRpb25zKCkge1xuICAgIGlmICghdGhpcy5jcm9wcGVyT3B0aW9ucykge1xuICAgICAgdGhpcy5fc2V0RGVmYXVsdENyb3BwZXJPcHRpb25zKCk7XG4gICAgfVxuICB9XG4gIC8qKiBTZXRzIG1hbnVhbCBjcm9wcGVyIG9wdGlvbnMgaWYgbm8gY3VzdG9tIG9wdGlvbnMgYXJlIGF2YWlhYmxlICovXG4gIHByaXZhdGUgX3NldERlZmF1bHRDcm9wcGVyT3B0aW9ucygpIHtcbiAgICB0aGlzLmNyb3BwZXJPcHRpb25zID0gREVGQVVMVF9DUk9QUEVSX09QVElPTlM7XG4gIH1cblxuICAvKiogSGFuZGxlcyBpbnB1dCBhbmQgZHJhZy9kcm9wIGZpbGVzICovXG4gIGhhbmRsZUZpbGVzKGZpbGVzOiBGaWxlW10pOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZE1heEZpbGVDb3VudChmaWxlcykpIHtcbiAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG4gICAgY29uc3QgaXNWYWxpZFVwbG9hZFN5bmMgPSBmaWxlcy5ldmVyeShpdGVtID0+IHRoaXMuX3ZhbGlkYXRlRmlsZVN5bmMoaXRlbSkpO1xuICAgIGNvbnN0IGFzeW5jRnVuY3Rpb25zID0gZmlsZXMubWFwKGl0ZW0gPT4gdGhpcy5fdmFsaWRhdGVGaWxlQXN5bmMoaXRlbSkpO1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFsuLi5hc3luY0Z1bmN0aW9uc10pLnBpcGUoXG4gICAgICBtYXAocmVzID0+IHtcbiAgICAgICAgY29uc3QgaXNWYWxpZFVwbG9hZEFzeW5jID0gcmVzLmV2ZXJ5KHJlc3VsdCA9PiByZXN1bHQgPT09IHRydWUpO1xuICAgICAgICBpZiAoIWlzVmFsaWRVcGxvYWRTeW5jIHx8ICFpc1ZhbGlkVXBsb2FkQXN5bmMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmlsZXMuZm9yRWFjaCgoZmlsZTogRmlsZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlSW5wdXRGaWxlKGZpbGUsIGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgLyoqIFZhbGlkYXRlcyBzeW5jaHJvbm91cyB2YWxpZGF0aW9ucyAqL1xuICBwcml2YXRlIF92YWxpZGF0ZUZpbGVTeW5jKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzVmFsaWRVcGxvYWRUeXBlKGZpbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5pc1ZhbGlkRXh0ZW5zaW9uKGZpbGUsIGZpbGUubmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiogVmFsaWRhdGVzIGFzeW5jaHJvbm91cyB2YWxpZGF0aW9ucyAqL1xuICBwcml2YXRlIF92YWxpZGF0ZUZpbGVBc3luYyhmaWxlOiBGaWxlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKCF0aGlzLmN1c3RvbVZhbGlkYXRvcikge1xuICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXN0b21WYWxpZGF0b3IoZmlsZSkucGlwZShcbiAgICAgIHRhcChyZXMgPT4ge1xuICAgICAgICBpZiAoIXJlcykge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yLm5leHQoe1xuICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgIGVycm9yOiBGaWxlVmFsaWRhdGlvblR5cGVzLmN1c3RvbVZhbGlkYXRvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKiogSGFuZGxlcyBpbnB1dCBhbmQgZHJhZyZkcm9wIGZpbGVzICovXG4gIGhhbmRsZUlucHV0RmlsZShmaWxlOiBGaWxlLCBpbmRleCk6IHZvaWQge1xuICAgIGNvbnN0IHR5cGUgPSBHRVRfRklMRV9DQVRFR09SWV9UWVBFKGZpbGUudHlwZSk7XG4gICAgaWYgKHR5cGUgPT09ICdpbWFnZScgJiYgdGhpcy5lbmFibGVDcm9wcGVyKSB7XG4gICAgICB0aGlzLmZpbGVzRm9yQ3JvcHBlci5wdXNoKGZpbGUpO1xuICAgICAgaWYgKCF0aGlzLmN1cnJlbnRDcm9wcGVyRmlsZSkge1xuICAgICAgICB0aGlzLm9wZW5Dcm9wcGVyKGZpbGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiogU2l6ZSBpcyBub3QgaW5pdGlhbGx5IGNoZWNrZWQgb24gaGFuZGxlSW5wdXRGaWxlcyBiZWNhdXNlIG9mIGNyb3BwZXIgc2l6ZSBjaGFuZ2UgKi9cbiAgICAgIGlmICh0aGlzLmlzVmFsaWRTaXplKGZpbGUsIGZpbGUuc2l6ZSkpIHtcbiAgICAgICAgdGhpcy5wdXNoRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogVmFsaWRhdGVzIGlmIHVwbG9hZCB0eXBlIGlzIHNpbmdsZSBzbyBhbm90aGVyIGZpbGUgY2Fubm90IGJlIGFkZGVkICovXG4gIGlzVmFsaWRVcGxvYWRUeXBlKGZpbGUpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy51cGxvYWRUeXBlID09PSAnc2luZ2xlJyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yLm5leHQoe1xuICAgICAgICBmaWxlLFxuICAgICAgICBlcnJvcjogRmlsZVZhbGlkYXRpb25UeXBlcy51cGxvYWRUeXBlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIFZhbGlkYXRlcyBtYXggZmlsZSBjb3VudCAqL1xuICBpc1ZhbGlkTWF4RmlsZUNvdW50KGZpbGVzOiBGaWxlW10pOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZmlsZU1heENvdW50IHx8IHRoaXMuZmlsZU1heENvdW50ID49IHRoaXMuZmlsZXMubGVuZ3RoICsgZmlsZXMubGVuZ3RoXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3IubmV4dCh7XG4gICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgIGVycm9yOiBGaWxlVmFsaWRhdGlvblR5cGVzLmZpbGVNYXhDb3VudFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqIEFkZCBmaWxlIHRvIGZpbGUgbGlzdCBhZnRlciBzdWNjZXNmdWxsIHZhbGlkYXRpb24gKi9cbiAgcHVzaEZpbGUoZmlsZTogRmlsZSwgZmlsZU5hbWUgPSBmaWxlLm5hbWUpOiB2b2lkIHtcbiAgICB0aGlzLmZpbGVzLnB1c2goeyBmaWxlLCBmaWxlTmFtZSB9KTtcbiAgICB0aGlzLmZpbGVBZGRlZC5uZXh0KHsgZmlsZSwgZmlsZU5hbWUgfSk7XG4gIH1cbiAgLyoqIE9wZW5zIGNyb3BwZXIgZm9yIGltYWdlIGNyb3AgKi9cbiAgb3BlbkNyb3BwZXIoZmlsZTogRmlsZSk6IHZvaWQge1xuICAgIGlmICgod2luZG93IGFzIGFueSkuQ1JPUFBFUiAgfHwgdHlwZW9mIENyb3BwZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnNhZmVDcm9wSW1nVXJsID0gdGhpcy5maWxlU2VydmljZS5jcmVhdGVTYWZlVXJsKGZpbGUpO1xuICAgICAgdGhpcy5jdXJyZW50Q3JvcHBlckZpbGUgPSBmaWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwicGxlYXNlIGltcG9ydCBjcm9wcGVyanMgc2NyaXB0IGFuZCBzdHlsZXMgdG8gdXNlIGNyb3BwZXIgZmVhdHVyZSBvciBkaXNhYmxlIGl0IGJ5IHNldHRpbmcgW2VuYWJsZUNyb3BwZXJdPSdmYWxzZSdcIlxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAvKiogT24gaW1nIGxvYWQgZXZlbnQgKi9cbiAgY3JvcHBlckltZ0xvYWRlZChlKTogdm9pZCB7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JvcHBlci1pbWcnKTtcbiAgICB0aGlzLmNyb3BwZXIgPSBuZXcgQ3JvcHBlcihpbWFnZSwgdGhpcy5jcm9wcGVyT3B0aW9ucyk7XG4gIH1cbiAgLyoqIENsb3NlIG9yIGNhbmNlbCBjcm9wcGVyICovXG4gIGNsb3NlQ3JvcHBlcihmaWxlUHJldmlldzogRmlsZVByZXZpZXdNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudENyb3BwZXJGaWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY3JvcHBlciA9IHVuZGVmaW5lZDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2Nyb3BDbG9zZWQkLm5leHQoZmlsZVByZXZpZXcpLCAyMDApO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgZmlsZXMgZnJvbSBmaWxlcyBsaXN0ICovXG4gIHJlbW92ZUZpbGVGcm9tTGlzdChmaWxlOiBGaWxlUHJldmlld01vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKGYgPT4gZi5maWxlTmFtZSAhPT0gZmlsZS5maWxlTmFtZSk7XG4gICAgdGhpcy5maWxlUmVtb3ZlZC5uZXh0KGZpbGUpO1xuICB9XG5cbiAgLyoqIFZhbGlkYXRlcyBmaWxlIGV4dGVuc2lvbiAqL1xuICBpc1ZhbGlkRXh0ZW5zaW9uKGZpbGU6IEZpbGUsIGZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZmlsZUV4dGVuc2lvbnMpIHtyZXR1cm4gdHJ1ZTsgfVxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGZpbGVOYW1lLnNwbGl0KCcuJykucG9wKCk7XG4gICAgY29uc3QgZmlsZUV4dGVuc2lvbnMgPSB0aGlzLmZpbGVFeHRlbnNpb25zLm1hcChleHQgPT4gZXh0LnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChmaWxlRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yLm5leHQoe2ZpbGUsIGVycm9yOiBGaWxlVmFsaWRhdGlvblR5cGVzLmV4dGVuc2lvbnN9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqIFZhbGlkYXRlcyBzZWxlY3RlZCBmaWxlIHNpemUgYW5kIHRvdGFsIGZpbGUgc2l6ZSAqL1xuICBpc1ZhbGlkU2l6ZShmaWxlOiBGaWxlLCBzaXplOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAvKiogVmFsaWRhdGluZyBzZWxlY3RlZCBmaWxlIHNpemUgKi9cbiAgICBjb25zdCByZXM6IG51bWJlciA9IEJJVFNfVE9fTUIoc2l6ZSk7XG4gICAgbGV0IGlzVmFsaWRGaWxlU2l6ZTogYm9vbGVhbjtcbiAgICBsZXQgaXNWYWxpZFRvdGFsRmlsZVNpemU6IGJvb2xlYW47XG4gICAgaWYgKCF0aGlzLmZpbGVNYXhTaXplIHx8ICh0aGlzLmZpbGVNYXhTaXplICYmIHJlcyA8IHRoaXMuZmlsZU1heFNpemUpKSB7XG4gICAgICBpc1ZhbGlkRmlsZVNpemUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25FcnJvci5uZXh0KHtcbiAgICAgICAgZmlsZSxcbiAgICAgICAgZXJyb3I6IEZpbGVWYWxpZGF0aW9uVHlwZXMuZmlsZU1heFNpemVcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogVmFsaWRhdGluZyBUb3RhbCBGaWxlcyBTaXplICovXG4gICAgY29uc3QgdG90YWxCaXRzID0gdGhpcy5maWxlc1xuICAgICAgLm1hcChmID0+IGYuZmlsZSA/IGYuZmlsZS5zaXplIDogMClcbiAgICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCk7XG4gICAgaWYgKFxuICAgICAgIXRoaXMudG90YWxNYXhTaXplIHx8XG4gICAgICAodGhpcy50b3RhbE1heFNpemUgJiZcbiAgICAgICAgQklUU19UT19NQih0b3RhbEJpdHMgKyBmaWxlLnNpemUpIDwgdGhpcy50b3RhbE1heFNpemUpXG4gICAgKSB7XG4gICAgICBpc1ZhbGlkVG90YWxGaWxlU2l6ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9yLm5leHQoe1xuICAgICAgICBmaWxlLFxuICAgICAgICBlcnJvcjogRmlsZVZhbGlkYXRpb25UeXBlcy50b3RhbE1heFNpemVcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gISFpc1ZhbGlkRmlsZVNpemUgJiYgaXNWYWxpZFRvdGFsRmlsZVNpemU7XG4gIH1cblxuICAvKiogd2hlbiBjcm9wIGJ1dHRvbiBzdWJtaXR0ZWQgKi9cbiAgb25Dcm9wU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JvcHBlclxuICAgICAgLmdldENyb3BwZWRDYW52YXModGhpcy5jcm9wcGVkQ2FudmFzT3B0aW9ucylcbiAgICAgIC50b0Jsb2IodGhpcy5fYmxvYkZhbGxCYWNrLmJpbmQodGhpcyksICdpbWFnZS9wbmcnKTtcbiAgfVxuICAvKiogQWZ0ZXIgY3JvcCBzdWJtaXQgKi9cbiAgcHJpdmF0ZSBfYmxvYkZhbGxCYWNrKGJsb2I6IEJsb2IpOiB2b2lkIHtcbiAgICBpZiAoIWJsb2IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNWYWxpZFNpemUoYmxvYiBhcyBGaWxlLCBibG9iLnNpemUpKSB7XG4gICAgICB0aGlzLnB1c2hGaWxlKGJsb2IgYXMgRmlsZSwgdGhpcy5jdXJyZW50Q3JvcHBlckZpbGUubmFtZSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VDcm9wcGVyKHtcbiAgICAgIGZpbGU6IGJsb2IgYXMgRmlsZSxcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmN1cnJlbnRDcm9wcGVyRmlsZS5uYW1lXG4gICAgfSk7XG4gIH1cblxufVxuIiwiPGRpdlxuICAoY2xpY2spPVwiZmlsZUlucHV0LmNsaWNrKClcIlxuICBjbGFzcz1cImZpbGUtZHJvcC13cmFwcGVyXCJcbiAgKm5nSWY9XCJzaG93ZURyYWdEcm9wWm9uZVwiXG4+XG4gIDxmaWxlLWRyb3BcbiAgICAob25GaWxlRHJvcCk9XCJkcm9wcGVkKCRldmVudClcIlxuICAgIFtjdXN0b21zdHlsZV09XCInY3VzdG9tLWRyYWcnXCJcbiAgICBbY2FwdGlvbnNdPVwiY2FwdGlvbnNcIlxuICA+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiLmRyb3B6b25lVGVtcGxhdGVcIj4gPC9uZy1jb250ZW50PlxuICA8L2ZpbGUtZHJvcD5cbjwvZGl2PlxuXG48aW5wdXRcbiAgdHlwZT1cImZpbGVcIlxuICBuYW1lPVwiZmlsZVtdXCJcbiAgaWQ9XCJmaWxlSW5wdXRcIlxuICAjZmlsZUlucHV0XG4gIFttdWx0aXBsZV09XCJ1cGxvYWRUeXBlID09PSAnbXVsdGknID8gJ211bHRpcGxlJyA6ICcnXCJcbiAgKGNsaWNrKT1cImZpbGVJbnB1dC52YWx1ZSA9IG51bGxcIlxuICAoY2hhbmdlKT1cIm9uQ2hhbmdlKGZpbGVJbnB1dC5maWxlcylcIlxuICBbYWNjZXB0XT1cImFjY2VwdFwiXG4gIGNsYXNzPVwiZmlsZS1pbnB1dFwiXG4vPlxuXG48ZGl2IGNsYXNzPVwiY3JvcHBlckpzT3ZlcmxheVwiICpuZ0lmPVwiY3VycmVudENyb3BwZXJGaWxlXCI+XG48ZGl2IGNsYXNzPVwiY3JvcHBlckpzQm94XCI+XG4gIDxpbWdcbiAgICBbc3JjXT1cInNhZmVDcm9wSW1nVXJsXCJcbiAgICBpZD1cImNyb3BwZXItaW1nXCJcbiAgICAobG9hZCk9XCJjcm9wcGVySW1nTG9hZGVkKCRldmVudClcIlxuICAvPlxuICA8ZGl2IGNsYXNzPVwiY3JvcHBlci1hY3Rpb25zXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNyb3BTdWJtaXRcIiAoY2xpY2spPVwib25Dcm9wU3VibWl0KClcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICB7eyBjYXB0aW9ucz8uY3JvcHBlcj8uY3JvcCB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiY3JvcENhbmNlbFwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIChjbGljayk9XCJcbiAgICAgICAgY2xvc2VDcm9wcGVyKHtcbiAgICAgICAgICBmaWxlOiBjdXJyZW50Q3JvcHBlckZpbGUsXG4gICAgICAgICAgZmlsZU5hbWU6IGN1cnJlbnRDcm9wcGVyRmlsZS5uYW1lXG4gICAgICAgIH0pXG4gICAgICBcIlxuICAgID5cbiAgICAgIHt7IGNhcHRpb25zPy5jcm9wcGVyPy5jYW5jZWwgfX1cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbjwvZGl2PlxuXG48ZGl2XG4gIGNsYXNzPVwiZmlsZXMtcHJldmlldy13cmFwcGVyXCJcbiAgW25nQ2xhc3NdPVwieyAndmlzdWFsbHktaGlkZGVuJzogIXNob3dQcmV2aWV3Q29udGFpbmVyIH1cIlxuPlxuICA8ZmlsZS1wcmV2aWV3LWNvbnRhaW5lclxuICAgICpuZ0lmPVwiZmlsZXNcIlxuICAgIFtwcmV2aWV3RmlsZXNdPVwiZmlsZXNcIlxuICAgIChyZW1vdmVGaWxlKT1cInJlbW92ZUZpbGUoJGV2ZW50KVwiXG4gICAgKHVwbG9hZFN1Y2Nlc3MpPVwib25VcGxvYWRTdWNjZXNzKCRldmVudClcIlxuICAgICh1cGxvYWRGYWlsKT1cIm9uVXBsb2FkRmFpbCgkZXZlbnQpXCJcbiAgICBbYWRhcHRlcl09XCJhZGFwdGVyXCJcbiAgICBbaXRlbVRlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZVwiXG4gICAgW2NhcHRpb25zXT1cImNhcHRpb25zXCJcbiAgICBbZW5hYmxlQXV0b1VwbG9hZF09XCJlbmFibGVBdXRvVXBsb2FkXCJcbiAgPlxuICA8L2ZpbGUtcHJldmlldy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==