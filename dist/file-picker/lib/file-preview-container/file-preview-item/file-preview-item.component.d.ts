import { FilePickerService } from './../../file-picker.service';
import { FilePreviewModel } from './../../file-preview.model';
import { OnInit, EventEmitter, TemplateRef } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { FilePickerAdapter } from '../../file-picker.adapter';
import { UploaderCaptions } from '../../uploader-captions';
import * as i0 from "@angular/core";
export declare class FilePreviewItemComponent implements OnInit {
    private fileService;
    readonly removeFile: EventEmitter<FilePreviewModel>;
    readonly uploadSuccess: EventEmitter<FilePreviewModel>;
    readonly uploadFail: EventEmitter<HttpErrorResponse>;
    readonly imageClicked: EventEmitter<FilePreviewModel>;
    fileItem: FilePreviewModel;
    adapter: FilePickerAdapter;
    itemTemplate: TemplateRef<any>;
    captions: UploaderCaptions;
    enableAutoUpload: boolean;
    uploadProgress: number;
    isImageFile: boolean;
    fileType: string;
    safeUrl: SafeResourceUrl;
    uploadError: boolean;
    uploadResponse: any;
    private _uploadSubscription;
    constructor(fileService: FilePickerService);
    ngOnInit(): void;
    getSafeUrl(file: File | Blob): SafeResourceUrl;
    /** Converts bytes to nice size */
    niceBytes(x: any): string;
    /** Retry file upload when upload was unsuccessfull */
    onRetry(): void;
    onRemove(fileItem: FilePreviewModel): void;
    private _uploadFile;
    /** Emits event when file upload api returns success  */
    private _onUploadSuccess;
    /** Cancel upload. Cancels request  */
    private _uploadUnsubscribe;
    static ɵfac: i0.ɵɵFactoryDef<FilePreviewItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FilePreviewItemComponent, "file-preview-item", never, { "fileItem": "fileItem"; "adapter": "adapter"; "itemTemplate": "itemTemplate"; "captions": "captions"; "enableAutoUpload": "enableAutoUpload"; }, { "removeFile": "removeFile"; "uploadSuccess": "uploadSuccess"; "uploadFail": "uploadFail"; "imageClicked": "imageClicked"; }, never, never>;
}
