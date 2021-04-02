import { FilePickerService } from './file-picker.service';
import { ElementRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { FilePreviewModel } from './file-preview.model';
import { ValidationError } from './validation-error.model';
import { FilePickerAdapter } from './file-picker.adapter';
import { UploadEvent } from './file-drop';
import { Observable } from 'rxjs';
import { UploaderCaptions } from './uploader-captions';
import { HttpErrorResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class FilePickerComponent implements OnInit, OnDestroy {
    private fileService;
    private elementRef;
    /** Emitted when file upload via api successfully. Emitted for every file */
    readonly uploadSuccess: EventEmitter<FilePreviewModel>;
    /** Emitted when file upload via api failed. Emitted for every file */
    readonly uploadFail: EventEmitter<HttpErrorResponse>;
    /** Emitted when file is removed via api successfully. Emitted for every file */
    readonly removeSuccess: EventEmitter<FilePreviewModel>;
    /** Emitted on file validation fail */
    readonly validationError: EventEmitter<ValidationError>;
    /** Emitted when file is added and passed validations. Not uploaded yet */
    readonly fileAdded: EventEmitter<FilePreviewModel>;
    /** Emitted when file is removed from fileList */
    readonly fileRemoved: EventEmitter<FilePreviewModel>;
    /** Custom validator function */
    customValidator: (file: File) => Observable<boolean>;
    /** Whether to enable cropper. Default: disabled */
    enableCropper: boolean;
    /** Whether to show default drag and drop zone. Default:true */
    showeDragDropZone: boolean;
    /** Whether to show default files preview container. Default: true */
    showPreviewContainer: boolean;
    /** Preview Item template */
    itemTemplate: TemplateRef<any>;
    /** Single or multiple. Default: multi */
    uploadType: string;
    /** Max size of selected file in MB. Default: no limit */
    fileMaxSize: number;
    /** Max count of file in multi-upload. Default: no limit */
    fileMaxCount: number;
    /** Total Max size limit of all files in MB. Default: no limit */
    totalMaxSize: number;
    /** Which file types to show on choose file dialog. Default: show all */
    accept: string;
    /** File extensions filter */
    fileExtensions: string[];
    /** Cropper options. */
    cropperOptions: object;
    /** Cropped canvas options. */
    croppedCanvasOptions: object;
    /** Custom api Adapter for uploading/removing files */
    adapter: FilePickerAdapter;
    /**  Custome template for dropzone */
    dropzoneTemplate: TemplateRef<any>;
    /** Custom captions input. Used for multi language support */
    captions: UploaderCaptions;
    /** captions object */
    /** Whether to auto upload file on file choose or not. Default: true */
    enableAutoUpload: boolean;
    cropper: any;
    files: FilePreviewModel[];
    /** Files array for cropper. Will be shown equentially if crop enabled */
    filesForCropper: File[];
    /** Current file to be shown in cropper */
    currentCropperFile: File;
    safeCropImgUrl: SafeResourceUrl;
    private _cropClosed$;
    private _onDestroy$;
    constructor(fileService: FilePickerService, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** On input file selected */
    onChange(event: File[]): void;
    /** On file dropped */
    dropped(event: UploadEvent): void;
    /** Emits event when file upload api returns success  */
    onUploadSuccess(fileItem: FilePreviewModel): void;
    /** Emits event when file upload api returns success  */
    onUploadFail(er: HttpErrorResponse): void;
    /** Emits event when file remove api returns success  */
    onRemoveSuccess(fileItem: FilePreviewModel): void;
    getSafeUrl(file: File): SafeResourceUrl;
    /** Removes file from UI and sends api */
    removeFile(fileItem: FilePreviewModel): void;
    /** Listen when Cropper is closed and open new cropper if next image exists */
    private _listenToCropClose;
    /** Sets custom cropper options if avaiable */
    private _setCropperOptions;
    /** Sets manual cropper options if no custom options are avaiable */
    private _setDefaultCropperOptions;
    /** Handles input and drag/drop files */
    handleFiles(files: File[]): Observable<void>;
    /** Validates synchronous validations */
    private _validateFileSync;
    /** Validates asynchronous validations */
    private _validateFileAsync;
    /** Handles input and drag&drop files */
    handleInputFile(file: File, index: any): void;
    /** Validates if upload type is single so another file cannot be added */
    isValidUploadType(file: any): boolean;
    /** Validates max file count */
    isValidMaxFileCount(files: File[]): boolean;
    /** Add file to file list after succesfull validation */
    pushFile(file: File, fileName?: string): void;
    /** Opens cropper for image crop */
    openCropper(file: File): void;
    /** On img load event */
    cropperImgLoaded(e: any): void;
    /** Close or cancel cropper */
    closeCropper(filePreview: FilePreviewModel): void;
    /** Removes files from files list */
    removeFileFromList(file: FilePreviewModel): void;
    /** Validates file extension */
    isValidExtension(file: File, fileName: string): boolean;
    /** Validates selected file size and total file size */
    isValidSize(file: File, size: number): boolean;
    /** when crop button submitted */
    onCropSubmit(): void;
    /** After crop submit */
    private _blobFallBack;
    static ɵfac: i0.ɵɵFactoryDef<FilePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FilePickerComponent, "ngx-awesome-uploader", never, { "customValidator": "customValidator"; "enableCropper": "enableCropper"; "showeDragDropZone": "showeDragDropZone"; "showPreviewContainer": "showPreviewContainer"; "itemTemplate": "itemTemplate"; "uploadType": "uploadType"; "fileMaxSize": "fileMaxSize"; "fileMaxCount": "fileMaxCount"; "totalMaxSize": "totalMaxSize"; "accept": "accept"; "fileExtensions": "fileExtensions"; "cropperOptions": "cropperOptions"; "croppedCanvasOptions": "croppedCanvasOptions"; "adapter": "adapter"; "dropzoneTemplate": "dropzoneTemplate"; "captions": "captions"; "enableAutoUpload": "enableAutoUpload"; }, { "uploadSuccess": "uploadSuccess"; "uploadFail": "uploadFail"; "removeSuccess": "removeSuccess"; "validationError": "validationError"; "fileAdded": "fileAdded"; "fileRemoved": "fileRemoved"; }, never, [".dropzoneTemplate"]>;
}
