import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class FilePickerService {
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
FilePickerService.ɵfac = function FilePickerService_Factory(t) { return new (t || FilePickerService)(i0.ɵɵinject(i1.DomSanitizer)); };
FilePickerService.ɵprov = i0.ɵɵdefineInjectable({ token: FilePickerService, factory: FilePickerService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilePickerService, [{
        type: Injectable
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1waWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zbGVpc3MvcHJvamVjdHMvbm9kZS9uZ3gtYXdlc29tZS11cGxvYWRlci9wcm9qZWN0cy9maWxlLXBpY2tlci9zcmMvIiwic291cmNlcyI6WyJsaWIvZmlsZS1waWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBbUIsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRzFFLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFJLENBQUM7SUFDaEQsY0FBYyxDQUFDLFFBQVE7UUFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQzNDLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsaUJBQWlCO2FBQ3hCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLENBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxhQUFhLENBQUMsSUFBSTtRQUNoQixJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7O2tGQWxCVSxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlUGlja2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuICBtb2NrVXBsb2FkRmlsZShmb3JtRGF0YSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2N1c3RvbWV2ZW50Jywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHR5cGU6ICdVcGxvYWRQcm9ncmVlc3MnXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9mIChldmVudC5kZXRhaWwpO1xuICB9XG4gIGNyZWF0ZVNhZmVVcmwoZmlsZSk6IFNhZmVSZXNvdXJjZVVybCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgY29uc3Qgc2FmZVVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1cmwpO1xuICAgICAgcmV0dXJuIHNhZmVVcmw7XG4gICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==