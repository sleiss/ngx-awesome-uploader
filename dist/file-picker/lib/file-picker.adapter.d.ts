import { FilePreviewModel } from './file-preview.model';
import { Observable } from 'rxjs';
export interface UploadResponse {
    body?: any;
    status: UploadStatus;
    progress?: number;
}
export declare enum UploadStatus {
    UPLOADED = "UPLOADED",
    IN_PROGRESS = "IN PROGRESS",
    ERROR = "ERROR"
}
export declare abstract class FilePickerAdapter {
    abstract uploadFile(fileItem: FilePreviewModel): Observable<UploadResponse>;
    abstract removeFile(fileItem: FilePreviewModel): Observable<any>;
}
