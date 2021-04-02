import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵnamespaceSVG, ɵɵelementStart, ɵɵelement, ɵɵelementEnd, Component, ɵɵtext, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, EventEmitter, ɵɵdirectiveInject, NgZone, Renderer2, ɵɵprojectionDef, ɵɵlistener, ɵɵprojection, ɵɵtemplate, ɵɵreference, ɵɵclassProp, ɵɵproperty, Input, Output, ɵɵsanitizeUrl, ɵɵpureFunction1, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵtextInterpolate, ɵɵpropertyInterpolate, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵelementContainer, ɵɵpureFunction2, ElementRef, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { of, timer, Subject, combineLatest } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntil, map, tap } from 'rxjs/operators';
import { NgIf, NgStyle, NgTemplateOutlet, NgClass, NgForOf, CommonModule } from '@angular/common';

class FilePickerService {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    mockUploadFile(formData) {
        const event = new CustomEvent('customevent', {
            detail: {
                type: 'UploadProgreess'
            }
        });
        return of(event.detail);
    }
    createSafeUrl(file) {
        try {
            const url = window.URL.createObjectURL(file);
            const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            return safeUrl;
        }
        catch (er) {
            console.log(er);
        }
    }
}
FilePickerService.ɵfac = function FilePickerService_Factory(t) { return new (t || FilePickerService)(ɵɵinject(DomSanitizer)); };
FilePickerService.ɵprov = ɵɵdefineInjectable({ token: FilePickerService, factory: FilePickerService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilePickerService, [{
        type: Injectable
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

function GET_FILE_CATEGORY_TYPE(fileExtension) {
    if (fileExtension.includes('image')) {
        return 'image';
    }
    else if (fileExtension.includes('video')) {
        return 'video';
    }
    else {
        return 'other';
    }
}
function GET_FILE_TYPE(name) {
    return name.substr(name.lastIndexOf('.') + 1).toUpperCase();
}
function IS_IMAGE_FILE(fileType) {
    const IMAGE_TYPES = ['PNG', 'JPG', 'JPEG', 'BMP', 'WEBP', 'JFIF', 'TIFF'];
    return IMAGE_TYPES.includes(fileType.toUpperCase());
}

var FileValidationTypes;
(function (FileValidationTypes) {
    FileValidationTypes["fileMaxSize"] = "FILE_MAX_SIZE";
    FileValidationTypes["fileMaxCount"] = "FILE_MAX_COUNT";
    FileValidationTypes["totalMaxSize"] = "TOTAL_MAX_SIZE";
    FileValidationTypes["extensions"] = "EXTENSIONS";
    FileValidationTypes["uploadType"] = "UPLOAD_TYPE";
    FileValidationTypes["customValidator"] = "CUSTOM_VALIDATOR";
})(FileValidationTypes || (FileValidationTypes = {}));

var UploadStatus;
(function (UploadStatus) {
    UploadStatus["UPLOADED"] = "UPLOADED";
    UploadStatus["IN_PROGRESS"] = "IN PROGRESS";
    UploadStatus["ERROR"] = "ERROR";
})(UploadStatus || (UploadStatus = {}));
class FilePickerAdapter {
}

const DefaultCaptions = {
    dropzone: {
        title: 'Drag and drop file here',
        or: 'or',
        browse: 'Browse Files'
    },
    cropper: {
        crop: 'Crop',
        cancel: 'Cancel'
    },
    previewCard: {
        remove: 'Remove',
        uploadError: 'Error on upload'
    }
};

const DEFAULT_CROPPER_OPTIONS = {
    dragMode: 'crop',
    aspectRatio: 1,
    autoCrop: true,
    movable: true,
    zoomable: true,
    scalable: true,
    autoCropArea: 0.8
};
function BITS_TO_MB(size) {
    return parseFloat(size.toString()) / 1048576;
}

/**
 * fileEntry is an instance of {@link FileSystemFileEntry} or {@link FileSystemDirectoryEntry}.
 * Which one is it can be checked using {@link FileSystemEntry.isFile} or {@link FileSystemEntry.isDirectory}
 * properties of the given {@link FileSystemEntry}.
 */
class UploadFile {
    constructor(relativePath, fileEntry) {
        this.relativePath = relativePath;
        this.fileEntry = fileEntry;
    }
}

class UploadEvent {
    constructor(files) {
        this.files = files;
    }
}

class CloudIconComponent {
    constructor() { }
    ngOnInit() {
    }
}
CloudIconComponent.ɵfac = function CloudIconComponent_Factory(t) { return new (t || CloudIconComponent)(); };
CloudIconComponent.ɵcmp = ɵɵdefineComponent({ type: CloudIconComponent, selectors: [["cloud-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "42px", "height", "42px", 1, "svg-icon"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"]], template: function CloudIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelement(2, "path", 2);
        ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{align-items:center;display:flex;justify-content:center;margin-bottom:.4em}.svg-icon[_ngcontent-%COMP%]{fill:#95a5a6}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CloudIconComponent, [{
        type: Component,
        args: [{
                selector: 'cloud-icon',
                templateUrl: './cloud-icon.component.html',
                styleUrls: ['./cloud-icon.component.scss']
            }]
    }], function () { return []; }, null); })();

function FileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "cloud-icon", 5);
    ɵɵelementStart(2, "div", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 7);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 8);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.title, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.or, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.browse, " ");
} }
const _c0 = ["*"];
class FileComponent {
    constructor(zone, renderer) {
        this.zone = zone;
        this.renderer = renderer;
        this.customstyle = null;
        this.disableIf = false;
        this.onFileDrop = new EventEmitter();
        this.onFileOver = new EventEmitter();
        this.onFileLeave = new EventEmitter();
        this.stack = [];
        this.files = [];
        this.dragoverflag = false;
        this.globalDisable = false;
        this.numOfActiveReadEntries = 0;
        if (!this.customstyle) {
            this.customstyle = 'drop-zone';
        }
        this.globalStart = this.renderer.listen('document', 'dragstart', evt => {
            this.globalDisable = true;
        });
        this.globalEnd = this.renderer.listen('document', 'dragend', evt => {
            this.globalDisable = false;
        });
    }
    onDragOver(event) {
        if (!this.globalDisable && !this.disableIf) {
            if (!this.dragoverflag) {
                this.dragoverflag = true;
                this.onFileOver.emit(event);
            }
            this.preventAndStop(event);
        }
    }
    onDragLeave(event) {
        if (!this.globalDisable && !this.disableIf) {
            if (this.dragoverflag) {
                this.dragoverflag = false;
                this.onFileLeave.emit(event);
            }
            this.preventAndStop(event);
        }
    }
    dropFiles(event) {
        if (!this.globalDisable && !this.disableIf) {
            this.dragoverflag = false;
            event.dataTransfer.dropEffect = 'copy';
            let length;
            if (event.dataTransfer.items) {
                length = event.dataTransfer.items.length;
            }
            else {
                length = event.dataTransfer.files.length;
            }
            for (let i = 0; i < length; i++) {
                let entry;
                if (event.dataTransfer.items) {
                    if (event.dataTransfer.items[i].webkitGetAsEntry) {
                        entry = event.dataTransfer.items[i].webkitGetAsEntry();
                    }
                }
                else {
                    if (event.dataTransfer.files[i].webkitGetAsEntry) {
                        entry = event.dataTransfer.files[i].webkitGetAsEntry();
                    }
                }
                if (!entry) {
                    const file = event.dataTransfer.files[i];
                    if (file) {
                        const fakeFileEntry = {
                            name: file.name,
                            isDirectory: false,
                            isFile: true,
                            file: (callback) => {
                                callback(file);
                            }
                        };
                        const toUpload = new UploadFile(fakeFileEntry.name, fakeFileEntry);
                        this.addToQueue(toUpload);
                    }
                }
                else {
                    if (entry.isFile) {
                        const toUpload = new UploadFile(entry.name, entry);
                        this.addToQueue(toUpload);
                    }
                    else if (entry.isDirectory) {
                        this.traverseFileTree(entry, entry.name);
                    }
                }
            }
            this.preventAndStop(event);
            const timerObservable = timer(200, 200);
            this.subscription = timerObservable.subscribe(t => {
                if (this.files.length > 0 && this.numOfActiveReadEntries === 0) {
                    this.onFileDrop.emit(new UploadEvent(this.files));
                    this.files = [];
                }
            });
        }
    }
    traverseFileTree(item, path) {
        if (item.isFile) {
            const toUpload = new UploadFile(path, item);
            this.files.push(toUpload);
            this.zone.run(() => {
                this.popToStack();
            });
        }
        else {
            this.pushToStack(path);
            path = path + '/';
            const dirReader = item.createReader();
            let entries = [];
            const thisObj = this;
            const readEntries = () => {
                thisObj.numOfActiveReadEntries++;
                dirReader.readEntries((res) => {
                    if (!res.length) {
                        // add empty folders
                        if (entries.length === 0) {
                            const toUpload = new UploadFile(path, item);
                            thisObj.zone.run(() => {
                                thisObj.addToQueue(toUpload);
                            });
                        }
                        else {
                            for (let i = 0; i < entries.length; i++) {
                                thisObj.zone.run(() => {
                                    thisObj.traverseFileTree(entries[i], path + entries[i].name);
                                });
                            }
                        }
                        thisObj.zone.run(() => {
                            thisObj.popToStack();
                        });
                    }
                    else {
                        // continue with the reading
                        entries = entries.concat(res);
                        readEntries();
                    }
                    thisObj.numOfActiveReadEntries--;
                });
            };
            readEntries();
        }
    }
    addToQueue(item) {
        this.files.push(item);
    }
    pushToStack(str) {
        this.stack.push(str);
    }
    popToStack() {
        const value = this.stack.pop();
    }
    clearQueue() {
        this.files = [];
    }
    preventAndStop(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.globalStart();
        this.globalEnd();
    }
}
FileComponent.ɵfac = function FileComponent_Factory(t) { return new (t || FileComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2)); };
FileComponent.ɵcmp = ɵɵdefineComponent({ type: FileComponent, selectors: [["file-drop"]], inputs: { captions: "captions", customstyle: "customstyle", disableIf: "disableIf" }, outputs: { onFileDrop: "onFileDrop", onFileOver: "onFileOver", onFileLeave: "onFileLeave" }, ngContentSelectors: _c0, decls: 5, vars: 4, consts: [["id", "dropZone", 3, "className", "drop", "dragover", "dragleave"], [1, "custom-dropzone"], ["ref", ""], ["class", "content", 4, "ngIf"], [1, "content"], [1, "cloud-icon"], [1, "content-top-text"], [1, "content-center-text"], ["type", "button", 1, "file-browse-button"]], template: function FileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("drop", function FileComponent_Template_div_drop_0_listener($event) { return ctx.dropFiles($event); })("dragover", function FileComponent_Template_div_dragover_0_listener($event) { return ctx.onDragOver($event); })("dragleave", function FileComponent_Template_div_dragleave_0_listener($event) { return ctx.onDragLeave($event); });
        ɵɵelementStart(1, "div", 1, 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
        ɵɵtemplate(4, FileComponent_div_4_Template, 8, 3, "div", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(2);
        ɵɵclassProp("over", ctx.dragoverflag);
        ɵɵproperty("className", ctx.customstyle);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", (_r0.children == null ? null : _r0.children.length) == 0);
    } }, directives: [NgIf, CloudIconComponent], styles: ["[_nghost-%COMP%]{display:block;padding:0 16px;width:100%}#dropZone[_ngcontent-%COMP%]{background:#fff;border:2px dashed #ecf0f1;border-radius:6px;margin:auto;max-width:440px;padding:56px 0}.file-browse-button[_ngcontent-%COMP%]{background:#7f8c8d;border:0;border-radius:6px;color:#fff;cursor:pointer;font-size:14px;font-weight:700;outline:0;padding:12px 18px}.content[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center}.over[_ngcontent-%COMP%]{background-color:hsla(0,0%,57.6%,.5)}.content-top-text[_ngcontent-%COMP%]{color:#5b5b7b;font-size:18px;font-weight:700}.content-center-text[_ngcontent-%COMP%]{color:#90a0bc;font-size:14px;margin:12px 0}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FileComponent, [{
        type: Component,
        args: [{
                selector: 'file-drop',
                templateUrl: './file-drop.component.html',
                styleUrls: ['./file-drop.component.scss']
            }]
    }], function () { return [{ type: NgZone }, { type: Renderer2 }]; }, { captions: [{
            type: Input
        }], customstyle: [{
            type: Input
        }], disableIf: [{
            type: Input
        }], onFileDrop: [{
            type: Output
        }], onFileOver: [{
            type: Output
        }], onFileLeave: [{
            type: Output
        }] }); })();

class CloseIconComponent {
    constructor() { }
    ngOnInit() {
    }
}
CloseIconComponent.ɵfac = function CloseIconComponent_Factory(t) { return new (t || CloseIconComponent)(); };
CloseIconComponent.ɵcmp = ɵɵdefineComponent({ type: CloseIconComponent, selectors: [["close-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]], template: function CloseIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelement(2, "path", 2);
        ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{cursor:pointer;display:block}svg[_ngcontent-%COMP%]{fill:#95a5a6}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CloseIconComponent, [{
        type: Component,
        args: [{
                selector: 'close-icon',
                templateUrl: './close-icon.component.html',
                styleUrls: ['./close-icon.component.scss']
            }]
    }], function () { return []; }, null); })();

const _c0$1 = function (a0) { return { "visibility": a0 }; };
class PreviewLightboxComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.previewClose = new EventEmitter();
    }
    ngOnInit() {
        this.getSafeUrl(this.file.file);
    }
    getSafeUrl(file) {
        const url = window.URL.createObjectURL(file);
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    onClose(event) {
        this.previewClose.next();
    }
}
PreviewLightboxComponent.ɵfac = function PreviewLightboxComponent_Factory(t) { return new (t || PreviewLightboxComponent)(ɵɵdirectiveInject(DomSanitizer)); };
PreviewLightboxComponent.ɵcmp = ɵɵdefineComponent({ type: PreviewLightboxComponent, selectors: [["preview-lightbox"]], inputs: { file: "file" }, outputs: { previewClose: "previewClose" }, decls: 6, vars: 4, consts: [[1, "ng-modal-backdrop", 3, "click"], [1, "ng-modal-content"], [1, "close-icon-wrapper", 3, "click"], [1, "lightbox-item"], [3, "src", "ngStyle", "load"]], template: function PreviewLightboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function PreviewLightboxComponent_Template_div_click_0_listener($event) { return ctx.onClose($event); });
        ɵɵelementEnd();
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵlistener("click", function PreviewLightboxComponent_Template_div_click_2_listener($event) { return ctx.onClose($event); });
        ɵɵelement(3, "close-icon");
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "img", 4);
        ɵɵlistener("load", function PreviewLightboxComponent_Template_img_load_5_listener() { return ctx.loaded = true; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("src", ctx.safeUrl, ɵɵsanitizeUrl)("ngStyle", ɵɵpureFunction1(2, _c0$1, ctx.loaded ? "visible" : "hidden"));
    } }, directives: [CloseIconComponent, NgStyle], styles: ["[_nghost-%COMP%]{align-items:center;display:flex;flex-direction:column;height:100vh;justify-content:center;overflow:auto;overflow:hidden;width:100vw}.ng-modal-backdrop[_ngcontent-%COMP%], [_nghost-%COMP%]{left:0;position:fixed;top:0;z-index:1040}.ng-modal-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.288);bottom:0;right:0}.ng-modal-content[_ngcontent-%COMP%]{align-items:center;color:rgba(0,0,0,.87);display:flex;justify-content:center;z-index:1041}.ng-modal-content[_ngcontent-%COMP%]   .close-icon-wrapper[_ngcontent-%COMP%]{font-size:20px;position:absolute;right:20px;top:20px}.ng-modal-content[_ngcontent-%COMP%]   .lightbox-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:contain;-webkit-animation-duration:.2s;-webkit-animation-name:zoomIn;animation-duration:.2s;animation-name:zoomIn;height:auto;max-height:calc(100vh - 30px);max-width:calc(100vw - 30px);object-fit:contain;width:100%}@-webkit-keyframes zoomIn{0%{opacity:0;transform:scale3d(.9,.9,.9)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.9,.9,.9)}50%{opacity:1}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PreviewLightboxComponent, [{
        type: Component,
        args: [{
                selector: 'preview-lightbox',
                templateUrl: './preview-lightbox.component.html',
                styleUrls: ['./preview-lightbox.component.scss']
            }]
    }], function () { return [{ type: DomSanitizer }]; }, { file: [{
            type: Input
        }], previewClose: [{
            type: Output
        }] }); })();

class RefreshIconComponent {
}
RefreshIconComponent.ɵfac = function RefreshIconComponent_Factory(t) { return new (t || RefreshIconComponent)(); };
RefreshIconComponent.ɵcmp = ɵɵdefineComponent({ type: RefreshIconComponent, selectors: [["refresh-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"]], template: function RefreshIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelement(2, "path", 2);
        ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{cursor:pointer;display:block}svg[_ngcontent-%COMP%]{fill:#95a5a6}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RefreshIconComponent, [{
        type: Component,
        args: [{
                selector: 'refresh-icon',
                templateUrl: './refresh-icon.component.html',
                styleUrls: ['./refresh-icon.component.scss']
            }]
    }], null, null); })();

function FilePreviewItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵelementStart(1, "img", 18);
    ɵɵlistener("click", function FilePreviewItemComponent_div_0_div_2_Template_img_click_1_listener() { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(2); return ctx_r9.imageClicked.next(ctx_r9.fileItem); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r2.safeUrl, ɵɵsanitizeUrl);
} }
function FilePreviewItemComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r3.fileItem.fileName.split(".").pop());
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.fileType, " ");
} }
function FilePreviewItemComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.niceBytes(ctx_r4.fileItem.file == null ? null : ctx_r4.fileItem.file.size));
} }
function FilePreviewItemComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵelement(1, "span", 22);
    ɵɵelementEnd();
} }
function FilePreviewItemComponent_div_0_refresh_icon_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "refresh-icon", 23);
    ɵɵlistener("click", function FilePreviewItemComponent_div_0_refresh_icon_12_Template_refresh_icon_click_0_listener() { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(2); return ctx_r11.onRetry(); });
    ɵɵelementEnd();
} }
function FilePreviewItemComponent_div_0_a_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "a", 24);
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r7.captions == null ? null : ctx_r7.captions.previewCard == null ? null : ctx_r7.captions.previewCard.uploadError);
} }
const _c0$2 = function (a0) { return { "width": a0 }; };
function FilePreviewItemComponent_div_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 25);
    ɵɵelement(2, "div", 26);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 27);
    ɵɵelementStart(4, "div", 28);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(2, _c0$2, ctx_r8.uploadProgress + "%"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ctx_r8.uploadProgress, " %");
} }
const _c1 = function (a0) { return { "visually-hidden": a0 }; };
function FilePreviewItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵtemplate(2, FilePreviewItemComponent_div_0_div_2_Template, 2, 1, "div", 4);
    ɵɵtemplate(3, FilePreviewItemComponent_div_0_div_3_Template, 2, 2, "div", 5);
    ɵɵelement(4, "div", 6);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 7);
    ɵɵelementStart(6, "a", 8);
    ɵɵelementStart(7, "p");
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(9, FilePreviewItemComponent_div_0_div_9_Template, 2, 1, "div", 9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 10);
    ɵɵtemplate(11, FilePreviewItemComponent_div_0_div_11_Template, 2, 0, "div", 11);
    ɵɵtemplate(12, FilePreviewItemComponent_div_0_refresh_icon_12_Template, 1, 0, "refresh-icon", 12);
    ɵɵelementStart(13, "a", 13);
    ɵɵlistener("click", function FilePreviewItemComponent_div_0_Template_a_click_13_listener() { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.onRemove(ctx_r13.fileItem); });
    ɵɵelement(14, "close-icon", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(15, FilePreviewItemComponent_div_0_a_15_Template, 1, 1, "a", 15);
    ɵɵtemplate(16, FilePreviewItemComponent_div_0_ng_container_16_Template, 6, 4, "ng-container", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c1, ctx_r0.itemTemplate));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.isImageFile && (ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isImageFile || !(ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
    ɵɵadvance(3);
    ɵɵproperty("title", ctx_r0.fileItem.fileName);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.fileItem.fileName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.uploadError && !ctx_r0.uploadProgress && (ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.uploadError);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r0.captions == null ? null : ctx_r0.captions.previewCard == null ? null : ctx_r0.captions.previewCard.remove);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.uploadError && !ctx_r0.uploadProgress);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.uploadProgress);
} }
function FilePreviewItemComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1) { return { fileItem: a0, uploadProgress: a1 }; };
class FilePreviewItemComponent {
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
FilePreviewItemComponent.ɵfac = function FilePreviewItemComponent_Factory(t) { return new (t || FilePreviewItemComponent)(ɵɵdirectiveInject(FilePickerService)); };
FilePreviewItemComponent.ɵcmp = ɵɵdefineComponent({ type: FilePreviewItemComponent, selectors: [["file-preview-item"]], inputs: { fileItem: "fileItem", adapter: "adapter", itemTemplate: "itemTemplate", captions: "captions", enableAutoUpload: "enableAutoUpload" }, outputs: { removeFile: "removeFile", uploadSuccess: "uploadSuccess", uploadFail: "uploadFail", imageClicked: "imageClicked" }, decls: 2, vars: 6, consts: [["class", "file-preview-wrapper", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "file-preview-wrapper", 3, "ngClass"], [1, "file-preview-thumbnail"], ["class", "img-preview-thumbnail", 4, "ngIf"], ["class", "other-preview-thumbnail", 3, "ngClass", 4, "ngIf"], [1, "thumbnail-backdrop"], [1, "file-preview-description"], ["href", "javascript:void(0)", 1, "file-preview-title", 3, "title"], ["class", "file-preview-size", 4, "ngIf"], [1, "file-preview-actions"], ["class", "ngx-checkmark-wrapper", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "ngx-close-icon-wrapper", 3, "title", "click"], [1, "ngx-close-icon"], ["class", "file-upload-error-wrapper", "href", "javascipt:void(0)", 3, "title", 4, "ngIf"], [4, "ngIf"], [1, "img-preview-thumbnail"], [3, "src", "click"], [1, "other-preview-thumbnail", 3, "ngClass"], [1, "file-preview-size"], [1, "ngx-checkmark-wrapper"], [1, "ngx-checkmark"], [3, "click"], ["href", "javascipt:void(0)", 1, "file-upload-error-wrapper", 3, "title"], [1, "file-upload-progress-bar-wrapper"], [1, "file-upload-progress-bar", 3, "ngStyle"], [1, "file-upload-percentage-wrapper"], [1, "file-upload-percentage"]], template: function FilePreviewItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FilePreviewItemComponent_div_0_Template, 17, 13, "div", 0);
        ɵɵtemplate(1, FilePreviewItemComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.fileItem);
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c2, ctx.fileItem, ctx.uploadProgress));
    } }, directives: [NgIf, NgTemplateOutlet, NgClass, CloseIconComponent, RefreshIconComponent, NgStyle], styles: ["[_nghost-%COMP%]{border-bottom:1px solid #ebeef1;display:block;max-width:440px;padding:20px 16px;position:relative}.visually-hidden[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}.file-preview-wrapper[_ngcontent-%COMP%]{display:flex;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]{cursor:pointer;position:relative;z-index:2}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .img-preview-thumbnail[_ngcontent-%COMP%]{height:36px;width:36px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .img-preview-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;border-radius:6px;height:100%;object-fit:cover;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail[_ngcontent-%COMP%]{align-items:center;background:#706fd3;border-radius:4px;color:#fff;display:flex;font-size:12px;font-weight:700;height:36px;justify-content:center;overflow:hidden;white-space:nowrap;width:36px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.pdf[_ngcontent-%COMP%]{background:#e4394e}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.doc[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.docx[_ngcontent-%COMP%]{background:#2196f3}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.xls[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.xlsx[_ngcontent-%COMP%]{background:#4caf50}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.ppt[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.txt[_ngcontent-%COMP%]{background:#ff9800}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .thumbnail-backdrop[_ngcontent-%COMP%]{background:rgba(43,56,71,.2);border-radius:6px;height:100%;left:0;pointer-events:none;position:absolute;top:0;transition:all .1s ease-in-out;visibility:hidden;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]:hover   .thumbnail-backdrop[_ngcontent-%COMP%]{visibility:visible}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]:active   .thumbnail-backdrop[_ngcontent-%COMP%]{background:rgba(43,56,71,.4);visibility:visible}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]{align-items:flex-start;color:#74809d;display:flex;flex:1;flex-direction:column;overflow:hidden;padding-left:16px;padding-right:16px;position:relative;z-index:2}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-title[_ngcontent-%COMP%]{color:#74809d;cursor:default;font-weight:700;text-decoration:none;width:90%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-size[_ngcontent-%COMP%]{color:#979fb8;font-size:12px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]{align-items:center;display:flex;font-size:10px;position:relative;z-index:3}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]{background:#43d084;border-radius:50%;cursor:pointer;font-size:22px;height:20px;position:relative;width:20px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]   .ngx-checkmark[_ngcontent-%COMP%]{height:19px;left:0;position:absolute;top:0;width:19px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]   .ngx-checkmark[_ngcontent-%COMP%]:after{border:1px solid #fff;border-width:0 3px 3px 0;content:\"\";display:block;height:7px;left:7px;position:absolute;top:4px;transform:rotate(45deg);width:3px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-close-icon-wrapper[_ngcontent-%COMP%]{border-radius:50%;cursor:pointer;margin-left:5px;padding:3px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-percentage-wrapper[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-progress-bar-wrapper[_ngcontent-%COMP%]{bottom:0;height:95%;left:0;margin:auto;position:absolute;top:0;width:100%;z-index:1}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-progress-bar[_ngcontent-%COMP%]{background:#eef1fa;border-radius:6px;height:95%;transition:width .3s ease-in;width:0}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-percentage[_ngcontent-%COMP%]{color:#c2cdda;font-size:19px;padding-right:10%;padding-top:5%;text-align:right}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-error-wrapper[_ngcontent-%COMP%]{background:rgba(254,84,111,.06);bottom:0;height:95%;left:0;margin:auto;position:absolute;top:0;width:100%;z-index:1}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilePreviewItemComponent, [{
        type: Component,
        args: [{
                selector: 'file-preview-item',
                templateUrl: './file-preview-item.component.html',
                styleUrls: ['./file-preview-item.component.scss']
            }]
    }], function () { return [{ type: FilePickerService }]; }, { removeFile: [{
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

function FilePreviewContainerComponent_preview_lightbox_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "preview-lightbox", 2);
    ɵɵlistener("previewClose", function FilePreviewContainerComponent_preview_lightbox_0_Template_preview_lightbox_previewClose_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.closeLightbox(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("file", ctx_r0.lightboxFile);
} }
function FilePreviewContainerComponent_file_preview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "file-preview-item", 3);
    ɵɵlistener("removeFile", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_removeFile_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.removeFile.next($event); })("uploadSuccess", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_uploadSuccess_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r7 = ɵɵnextContext(); return ctx_r7.uploadSuccess.next($event); })("uploadFail", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_uploadFail_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r8 = ɵɵnextContext(); return ctx_r8.uploadFail.next($event); })("imageClicked", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_imageClicked_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r9 = ɵɵnextContext(); return ctx_r9.openLightbox($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("fileItem", file_r4)("itemTemplate", ctx_r1.itemTemplate)("adapter", ctx_r1.adapter)("captions", ctx_r1.captions)("enableAutoUpload", ctx_r1.enableAutoUpload);
} }
class FilePreviewContainerComponent {
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
FilePreviewContainerComponent.ɵcmp = ɵɵdefineComponent({ type: FilePreviewContainerComponent, selectors: [["file-preview-container"]], inputs: { previewFiles: "previewFiles", itemTemplate: "itemTemplate", enableAutoUpload: "enableAutoUpload", adapter: "adapter", captions: "captions" }, outputs: { removeFile: "removeFile", uploadSuccess: "uploadSuccess", uploadFail: "uploadFail" }, decls: 2, vars: 2, consts: [[3, "file", "previewClose", 4, "ngIf"], [3, "fileItem", "itemTemplate", "adapter", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", "imageClicked", 4, "ngFor", "ngForOf"], [3, "file", "previewClose"], [3, "fileItem", "itemTemplate", "adapter", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", "imageClicked"]], template: function FilePreviewContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, FilePreviewContainerComponent_preview_lightbox_0_Template, 1, 1, "preview-lightbox", 0);
        ɵɵtemplate(1, FilePreviewContainerComponent_file_preview_item_1_Template, 1, 5, "file-preview-item", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.lightboxFile);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.previewFiles);
    } }, directives: [NgIf, NgForOf, PreviewLightboxComponent, FilePreviewItemComponent], styles: ["[_nghost-%COMP%]{background:#fafbfd;display:flex;flex-direction:column;justify-content:flex-start;width:100%}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilePreviewContainerComponent, [{
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

function FilePickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function FilePickerComponent_div_0_Template_div_click_0_listener() { ɵɵrestoreView(_r5); ɵɵnextContext(); const _r1 = ɵɵreference(2); return _r1.click(); });
    ɵɵelementStart(1, "file-drop", 7);
    ɵɵlistener("onFileDrop", function FilePickerComponent_div_0_Template_file_drop_onFileDrop_1_listener($event) { ɵɵrestoreView(_r5); const ctx_r6 = ɵɵnextContext(); return ctx_r6.dropped($event); });
    ɵɵprojection(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("customstyle", "custom-drag")("captions", ctx_r0.captions);
} }
function FilePickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "div", 9);
    ɵɵelementStart(2, "img", 10);
    ɵɵlistener("load", function FilePickerComponent_div_3_Template_img_load_2_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.cropperImgLoaded($event); });
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 11);
    ɵɵelementStart(4, "button", 12);
    ɵɵlistener("click", function FilePickerComponent_div_3_Template_button_click_4_listener() { ɵɵrestoreView(_r8); const ctx_r9 = ɵɵnextContext(); return ctx_r9.onCropSubmit(); });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 13);
    ɵɵlistener("click", function FilePickerComponent_div_3_Template_button_click_6_listener() { ɵɵrestoreView(_r8); const ctx_r10 = ɵɵnextContext(); return ctx_r10.closeCropper({ file: ctx_r10.currentCropperFile, fileName: ctx_r10.currentCropperFile.name }); });
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("src", ctx_r2.safeCropImgUrl, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.captions == null ? null : ctx_r2.captions.cropper == null ? null : ctx_r2.captions.cropper.crop, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.captions == null ? null : ctx_r2.captions.cropper == null ? null : ctx_r2.captions.cropper.cancel, " ");
} }
function FilePickerComponent_file_preview_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "file-preview-container", 14);
    ɵɵlistener("removeFile", function FilePickerComponent_file_preview_container_5_Template_file_preview_container_removeFile_0_listener($event) { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(); return ctx_r11.removeFile($event); })("uploadSuccess", function FilePickerComponent_file_preview_container_5_Template_file_preview_container_uploadSuccess_0_listener($event) { ɵɵrestoreView(_r12); const ctx_r13 = ɵɵnextContext(); return ctx_r13.onUploadSuccess($event); })("uploadFail", function FilePickerComponent_file_preview_container_5_Template_file_preview_container_uploadFail_0_listener($event) { ɵɵrestoreView(_r12); const ctx_r14 = ɵɵnextContext(); return ctx_r14.onUploadFail($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("previewFiles", ctx_r3.files)("adapter", ctx_r3.adapter)("itemTemplate", ctx_r3.itemTemplate)("captions", ctx_r3.captions)("enableAutoUpload", ctx_r3.enableAutoUpload);
} }
const _c0$3 = [[["", 8, "dropzonetemplate"]]];
const _c1$1 = function (a0) { return { "visually-hidden": a0 }; };
const _c2$1 = [".dropzoneTemplate"];
class FilePickerComponent {
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
FilePickerComponent.ɵfac = function FilePickerComponent_Factory(t) { return new (t || FilePickerComponent)(ɵɵdirectiveInject(FilePickerService), ɵɵdirectiveInject(ElementRef)); };
FilePickerComponent.ɵcmp = ɵɵdefineComponent({ type: FilePickerComponent, selectors: [["ngx-awesome-uploader"]], inputs: { customValidator: "customValidator", enableCropper: "enableCropper", showeDragDropZone: "showeDragDropZone", showPreviewContainer: "showPreviewContainer", itemTemplate: "itemTemplate", uploadType: "uploadType", fileMaxSize: "fileMaxSize", fileMaxCount: "fileMaxCount", totalMaxSize: "totalMaxSize", accept: "accept", fileExtensions: "fileExtensions", cropperOptions: "cropperOptions", croppedCanvasOptions: "croppedCanvasOptions", adapter: "adapter", dropzoneTemplate: "dropzoneTemplate", captions: "captions", enableAutoUpload: "enableAutoUpload" }, outputs: { uploadSuccess: "uploadSuccess", uploadFail: "uploadFail", removeSuccess: "removeSuccess", validationError: "validationError", fileAdded: "fileAdded", fileRemoved: "fileRemoved" }, ngContentSelectors: _c2$1, decls: 6, vars: 8, consts: [["class", "file-drop-wrapper", 3, "click", 4, "ngIf"], ["type", "file", "name", "file[]", "id", "fileInput", 1, "file-input", 3, "multiple", "accept", "click", "change"], ["fileInput", ""], ["class", "cropperJsOverlay", 4, "ngIf"], [1, "files-preview-wrapper", 3, "ngClass"], [3, "previewFiles", "adapter", "itemTemplate", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", 4, "ngIf"], [1, "file-drop-wrapper", 3, "click"], [3, "customstyle", "captions", "onFileDrop"], [1, "cropperJsOverlay"], [1, "cropperJsBox"], ["id", "cropper-img", 3, "src", "load"], [1, "cropper-actions"], ["type", "button", 1, "cropSubmit", 3, "click"], ["type", "button", 1, "cropCancel", 3, "click"], [3, "previewFiles", "adapter", "itemTemplate", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail"]], template: function FilePickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c0$3);
        ɵɵtemplate(0, FilePickerComponent_div_0_Template, 3, 2, "div", 0);
        ɵɵelementStart(1, "input", 1, 2);
        ɵɵlistener("click", function FilePickerComponent_Template_input_click_1_listener() { ɵɵrestoreView(_r15); const _r1 = ɵɵreference(2); return _r1.value = null; })("change", function FilePickerComponent_Template_input_change_1_listener() { ɵɵrestoreView(_r15); const _r1 = ɵɵreference(2); return ctx.onChange(_r1.files); });
        ɵɵelementEnd();
        ɵɵtemplate(3, FilePickerComponent_div_3_Template, 8, 3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵtemplate(5, FilePickerComponent_file_preview_container_5_Template, 1, 5, "file-preview-container", 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.showeDragDropZone);
        ɵɵadvance(1);
        ɵɵproperty("multiple", ctx.uploadType === "multi" ? "multiple" : "")("accept", ctx.accept);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.currentCropperFile);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c1$1, !ctx.showPreviewContainer));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.files);
    } }, directives: [NgIf, NgClass, FileComponent, FilePreviewContainerComponent], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{align-items:center;border-radius:6px;display:flex;flex-direction:column;height:100%;max-width:440px;overflow:auto}.files-preview-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%}#cropper-img[_ngcontent-%COMP%]{display:none;max-width:60vw}#cropper-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.file-drop-wrapper[_ngcontent-%COMP%]{background:#fafbfd;padding-top:20px;width:100%}.preview-container[_ngcontent-%COMP%]{display:flex}.cropperJsOverlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.32);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:999}.cropperJsBox[_ngcontent-%COMP%], .cropperJsOverlay[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.cropperJsBox[_ngcontent-%COMP%]{flex-direction:column;max-height:calc(100vh - 88px);max-width:90vw}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]{display:flex}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;border-radius:6px;cursor:pointer;margin:5px;padding:12px 25px}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]   .cropSubmit[_ngcontent-%COMP%]{background:#16a085;color:#fff} .cropper img{max-height:300px!important}#images[_ngcontent-%COMP%]{display:flex;justify-content:center;overflow-x:auto;width:500px}#images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-items:flex-end;display:flex;flex:0 0 100px;flex-direction:column;margin:0 2px}#fileInput[_ngcontent-%COMP%]{display:none}.uploader-submit-btn[_ngcontent-%COMP%]{background:#ffd740;border:0;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);color:rgba(0,0,0,.87);cursor:pointer;font-size:15px;line-height:36px;margin-top:12px;padding:0 16px}button[_ngcontent-%COMP%]:disabled{background:#dcdcdc;color:rgba(0,0,0,.26)}.visually-hidden[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilePickerComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-awesome-uploader',
                templateUrl: './file-picker.component.html',
                styleUrls: ['./file-picker.component.scss']
            }]
    }], function () { return [{ type: FilePickerService }, { type: ElementRef }]; }, { uploadSuccess: [{
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

class FileDropModule {
}
FileDropModule.ɵmod = ɵɵdefineNgModule({ type: FileDropModule, bootstrap: [FileComponent] });
FileDropModule.ɵinj = ɵɵdefineInjector({ factory: function FileDropModule_Factory(t) { return new (t || FileDropModule)(); }, providers: [], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FileDropModule, { declarations: [FileComponent,
        CloudIconComponent], imports: [CommonModule], exports: [FileComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FileDropModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FileComponent,
                    CloudIconComponent
                ],
                exports: [FileComponent],
                imports: [CommonModule],
                providers: [],
                bootstrap: [FileComponent],
            }]
    }], null, null); })();

class FilePickerModule {
}
FilePickerModule.ɵmod = ɵɵdefineNgModule({ type: FilePickerModule });
FilePickerModule.ɵinj = ɵɵdefineInjector({ factory: function FilePickerModule_Factory(t) { return new (t || FilePickerModule)(); }, providers: [FilePickerService], imports: [[
            CommonModule,
            FileDropModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FilePickerModule, { declarations: [FilePickerComponent,
        FilePreviewContainerComponent,
        FilePreviewItemComponent,
        PreviewLightboxComponent,
        RefreshIconComponent,
        CloseIconComponent], imports: [CommonModule,
        FileDropModule], exports: [FilePickerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilePickerModule, [{
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

/*
 * Public API Surface of file-picker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FilePickerAdapter, FilePickerComponent, FilePickerModule, FilePickerService, FileValidationTypes, UploadStatus };
//# sourceMappingURL=ngx-awesome-uploader.js.map
