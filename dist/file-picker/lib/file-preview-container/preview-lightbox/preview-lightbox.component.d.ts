import { OnInit, EventEmitter } from '@angular/core';
import { FilePreviewModel } from '../../file-preview.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class PreviewLightboxComponent implements OnInit {
    private sanitizer;
    file: FilePreviewModel;
    previewClose: EventEmitter<void>;
    loaded: boolean;
    safeUrl: SafeResourceUrl;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    getSafeUrl(file: File | Blob): void;
    onClose(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PreviewLightboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PreviewLightboxComponent, "preview-lightbox", never, { "file": "file"; }, { "previewClose": "previewClose"; }, never, never>;
}
