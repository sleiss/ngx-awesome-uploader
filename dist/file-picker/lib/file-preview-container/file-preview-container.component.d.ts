import { OnInit, EventEmitter, TemplateRef } from '@angular/core';
import { FilePreviewModel } from '../file-preview.model';
import { FilePickerAdapter } from '../file-picker.adapter';
import { UploaderCaptions } from '../uploader-captions';
import { HttpErrorResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class FilePreviewContainerComponent implements OnInit {
    previewFiles: FilePreviewModel[];
    itemTemplate: TemplateRef<any>;
    enableAutoUpload: boolean;
    readonly removeFile: EventEmitter<FilePreviewModel>;
    readonly uploadSuccess: EventEmitter<FilePreviewModel>;
    readonly uploadFail: EventEmitter<HttpErrorResponse>;
    lightboxFile: FilePreviewModel;
    adapter: FilePickerAdapter;
    captions: UploaderCaptions;
    constructor();
    ngOnInit(): void;
    openLightbox(file: FilePreviewModel): void;
    closeLightbox(): void;
    static ɵfac: i0.ɵɵFactoryDef<FilePreviewContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FilePreviewContainerComponent, "file-preview-container", never, { "previewFiles": "previewFiles"; "itemTemplate": "itemTemplate"; "enableAutoUpload": "enableAutoUpload"; "adapter": "adapter"; "captions": "captions"; }, { "removeFile": "removeFile"; "uploadSuccess": "uploadSuccess"; "uploadFail": "uploadFail"; }, never, never>;
}
