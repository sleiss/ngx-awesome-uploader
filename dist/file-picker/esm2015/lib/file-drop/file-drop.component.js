import { Component, Input, Output, EventEmitter, NgZone, Renderer2 } from '@angular/core';
import { timer } from 'rxjs';
import { UploadFile } from './upload-file.model';
import { UploadEvent } from './upload-event.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/cloud-icon/cloud-icon.component";
function FileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "cloud-icon", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 8);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.title, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.or, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.browse, " ");
} }
const _c0 = ["*"];
export class FileComponent {
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
FileComponent.ɵfac = function FileComponent_Factory(t) { return new (t || FileComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.Renderer2)); };
FileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FileComponent, selectors: [["file-drop"]], inputs: { captions: "captions", customstyle: "customstyle", disableIf: "disableIf" }, outputs: { onFileDrop: "onFileDrop", onFileOver: "onFileOver", onFileLeave: "onFileLeave" }, ngContentSelectors: _c0, decls: 5, vars: 4, consts: [["id", "dropZone", 3, "className", "drop", "dragover", "dragleave"], [1, "custom-dropzone"], ["ref", ""], ["class", "content", 4, "ngIf"], [1, "content"], [1, "cloud-icon"], [1, "content-top-text"], [1, "content-center-text"], ["type", "button", 1, "file-browse-button"]], template: function FileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("drop", function FileComponent_Template_div_drop_0_listener($event) { return ctx.dropFiles($event); })("dragover", function FileComponent_Template_div_dragover_0_listener($event) { return ctx.onDragOver($event); })("dragleave", function FileComponent_Template_div_dragleave_0_listener($event) { return ctx.onDragLeave($event); });
        i0.ɵɵelementStart(1, "div", 1, 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, FileComponent_div_4_Template, 8, 3, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵclassProp("over", ctx.dragoverflag);
        i0.ɵɵproperty("className", ctx.customstyle);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", (_r0.children == null ? null : _r0.children.length) == 0);
    } }, directives: [i1.NgIf, i2.CloudIconComponent], styles: ["[_nghost-%COMP%]{display:block;padding:0 16px;width:100%}#dropZone[_ngcontent-%COMP%]{background:#fff;border:2px dashed #ecf0f1;border-radius:6px;margin:auto;max-width:440px;padding:56px 0}.file-browse-button[_ngcontent-%COMP%]{background:#7f8c8d;border:0;border-radius:6px;color:#fff;cursor:pointer;font-size:14px;font-weight:700;outline:0;padding:12px 18px}.content[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center}.over[_ngcontent-%COMP%]{background-color:hsla(0,0%,57.6%,.5)}.content-top-text[_ngcontent-%COMP%]{color:#5b5b7b;font-size:18px;font-weight:700}.content-center-text[_ngcontent-%COMP%]{color:#90a0bc;font-size:14px;margin:12px 0}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FileComponent, [{
        type: Component,
        args: [{
                selector: 'file-drop',
                templateUrl: './file-drop.component.html',
                styleUrls: ['./file-drop.component.scss']
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.Renderer2 }]; }, { captions: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kcm9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zbGVpc3MvcHJvamVjdHMvbm9kZS9uZ3gtYXdlc29tZS11cGxvYWRlci9wcm9qZWN0cy9maWxlLXBpY2tlci9zcmMvIiwic291cmNlcyI6WyJsaWIvZmlsZS1kcm9wL2ZpbGUtZHJvcC5jb21wb25lbnQudHMiLCJsaWIvZmlsZS1kcm9wL2ZpbGUtZHJvcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7SUNKL0MsOEJBQ1M7SUFBQSxnQ0FBNEM7SUFDM0MsOEJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQU07SUFDTiw4QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTtJQUNOLGlDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFTO0lBQ25CLGlCQUFNOzs7SUFSTSxlQUNGO0lBREUsMElBQ0Y7SUFFRSxlQUNGO0lBREUsdUlBQ0Y7SUFFRSxlQUNGO0lBREUsMklBQ0Y7OztBRE9kLE1BQU0sT0FBTyxhQUFhO0lBeUJ4QixZQUFvQixJQUFZLEVBQVUsUUFBbUI7UUFBekMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFyQjdELGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBRTNCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHWCxlQUFVLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFFeEUsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FB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LFVBQVU7a0JBRGhCLE1BQU07WUFHQSxXQUFXO2tCQURqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aW1lciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFVwbG9hZEZpbGUgfSBmcm9tICcuL3VwbG9hZC1maWxlLm1vZGVsJztcbmltcG9ydCB7IFVwbG9hZEV2ZW50IH0gZnJvbSAnLi91cGxvYWQtZXZlbnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgRmlsZVN5c3RlbUZpbGVFbnRyeSxcbiAgRmlsZVN5c3RlbUVudHJ5LFxuICBGaWxlU3lzdGVtRGlyZWN0b3J5RW50cnlcbn0gZnJvbSAnLi9kb20udHlwZXMnO1xuaW1wb3J0IHsgVXBsb2FkZXJDYXB0aW9ucyB9IGZyb20gJy4uL3VwbG9hZGVyLWNhcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmlsZS1kcm9wJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtZHJvcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtZHJvcC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBjYXB0aW9uczogVXBsb2FkZXJDYXB0aW9ucztcbiAgQElucHV0KClcbiAgY3VzdG9tc3R5bGU6IHN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVJZiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25GaWxlRHJvcDogRXZlbnRFbWl0dGVyPFVwbG9hZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25GaWxlT3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkZpbGVMZWF2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBzdGFjayA9IFtdO1xuICBmaWxlczogVXBsb2FkRmlsZVtdID0gW107XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBkcmFnb3ZlcmZsYWcgPSBmYWxzZTtcblxuICBnbG9iYWxEaXNhYmxlID0gZmFsc2U7XG4gIGdsb2JhbFN0YXJ0OiAoKSA9PiB2b2lkO1xuICBnbG9iYWxFbmQ6ICgpID0+IHZvaWQ7XG5cbiAgbnVtT2ZBY3RpdmVSZWFkRW50cmllcyA9IDA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBpZiAoIXRoaXMuY3VzdG9tc3R5bGUpIHtcbiAgICAgIHRoaXMuY3VzdG9tc3R5bGUgPSAnZHJvcC16b25lJztcbiAgICB9XG4gICAgdGhpcy5nbG9iYWxTdGFydCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdkcmFnc3RhcnQnLCBldnQgPT4ge1xuICAgICAgdGhpcy5nbG9iYWxEaXNhYmxlID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmdsb2JhbEVuZCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdkcmFnZW5kJywgZXZ0ID0+IHtcbiAgICAgIHRoaXMuZ2xvYmFsRGlzYWJsZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBvbkRyYWdPdmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5nbG9iYWxEaXNhYmxlICYmICF0aGlzLmRpc2FibGVJZikge1xuICAgICAgaWYgKCF0aGlzLmRyYWdvdmVyZmxhZykge1xuICAgICAgICB0aGlzLmRyYWdvdmVyZmxhZyA9IHRydWU7XG4gICAgICAgIHRoaXMub25GaWxlT3Zlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmVudEFuZFN0b3AoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZ2xvYmFsRGlzYWJsZSAmJiAhdGhpcy5kaXNhYmxlSWYpIHtcbiAgICAgIGlmICh0aGlzLmRyYWdvdmVyZmxhZykge1xuICAgICAgICB0aGlzLmRyYWdvdmVyZmxhZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRmlsZUxlYXZlLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZHJvcEZpbGVzKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZ2xvYmFsRGlzYWJsZSAmJiAhdGhpcy5kaXNhYmxlSWYpIHtcbiAgICAgIHRoaXMuZHJhZ292ZXJmbGFnID0gZmFsc2U7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgICAgIGxldCBsZW5ndGg7XG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XG4gICAgICAgIGxlbmd0aCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5pdGVtcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW5ndGggPSBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBlbnRyeTogRmlsZVN5c3RlbUVudHJ5O1xuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci5pdGVtc1tpXS53ZWJraXRHZXRBc0VudHJ5KSB7XG4gICAgICAgICAgICBlbnRyeSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5pdGVtc1tpXS53ZWJraXRHZXRBc0VudHJ5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNbaV0ud2Via2l0R2V0QXNFbnRyeSkge1xuICAgICAgICAgICAgZW50cnkgPSBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNbaV0ud2Via2l0R2V0QXNFbnRyeSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgY29uc3QgZmlsZTogRmlsZSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlc1tpXTtcbiAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgZmFrZUZpbGVFbnRyeTogRmlsZVN5c3RlbUZpbGVFbnRyeSA9IHtcbiAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICBpc0RpcmVjdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgIGlzRmlsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsZTogKGNhbGxiYWNrOiAoZmlsZWE6IEZpbGUpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmaWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHRvVXBsb2FkOiBVcGxvYWRGaWxlID0gbmV3IFVwbG9hZEZpbGUoXG4gICAgICAgICAgICAgIGZha2VGaWxlRW50cnkubmFtZSxcbiAgICAgICAgICAgICAgZmFrZUZpbGVFbnRyeVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9RdWV1ZSh0b1VwbG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvVXBsb2FkOiBVcGxvYWRGaWxlID0gbmV3IFVwbG9hZEZpbGUoZW50cnkubmFtZSwgZW50cnkpO1xuICAgICAgICAgICAgdGhpcy5hZGRUb1F1ZXVlKHRvVXBsb2FkKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgICAgICB0aGlzLnRyYXZlcnNlRmlsZVRyZWUoZW50cnksIGVudHJ5Lm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcblxuICAgICAgY29uc3QgdGltZXJPYnNlcnZhYmxlID0gdGltZXIoMjAwLCAyMDApO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aW1lck9ic2VydmFibGUuc3Vic2NyaWJlKHQgPT4ge1xuICAgICAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggPiAwICYmIHRoaXMubnVtT2ZBY3RpdmVSZWFkRW50cmllcyA9PT0gMCkge1xuICAgICAgICAgIHRoaXMub25GaWxlRHJvcC5lbWl0KG5ldyBVcGxvYWRFdmVudCh0aGlzLmZpbGVzKSk7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYXZlcnNlRmlsZVRyZWUoaXRlbTogRmlsZVN5c3RlbUVudHJ5LCBwYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAoaXRlbS5pc0ZpbGUpIHtcbiAgICAgIGNvbnN0IHRvVXBsb2FkOiBVcGxvYWRGaWxlID0gbmV3IFVwbG9hZEZpbGUocGF0aCwgaXRlbSk7XG4gICAgICB0aGlzLmZpbGVzLnB1c2godG9VcGxvYWQpO1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMucG9wVG9TdGFjaygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVzaFRvU3RhY2socGF0aCk7XG4gICAgICBwYXRoID0gcGF0aCArICcvJztcbiAgICAgIGNvbnN0IGRpclJlYWRlciA9IChpdGVtIGFzIEZpbGVTeXN0ZW1EaXJlY3RvcnlFbnRyeSkuY3JlYXRlUmVhZGVyKCk7XG4gICAgICBsZXQgZW50cmllcyA9IFtdO1xuICAgICAgY29uc3QgdGhpc09iaiA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IHJlYWRFbnRyaWVzID0gKCkgPT4ge1xuICAgICAgICB0aGlzT2JqLm51bU9mQWN0aXZlUmVhZEVudHJpZXMrKztcbiAgICAgICAgZGlyUmVhZGVyLnJlYWRFbnRyaWVzKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGFkZCBlbXB0eSBmb2xkZXJzXG4gICAgICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgY29uc3QgdG9VcGxvYWQ6IFVwbG9hZEZpbGUgPSBuZXcgVXBsb2FkRmlsZShwYXRoLCBpdGVtKTtcbiAgICAgICAgICAgICAgdGhpc09iai56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpc09iai5hZGRUb1F1ZXVlKHRvVXBsb2FkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzT2JqLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXNPYmoudHJhdmVyc2VGaWxlVHJlZShlbnRyaWVzW2ldLCBwYXRoICsgZW50cmllc1tpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc09iai56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXNPYmoucG9wVG9TdGFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIHdpdGggdGhlIHJlYWRpbmdcbiAgICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChyZXMpO1xuICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpc09iai5udW1PZkFjdGl2ZVJlYWRFbnRyaWVzLS07XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFRvUXVldWUoaXRlbTogVXBsb2FkRmlsZSkge1xuICAgIHRoaXMuZmlsZXMucHVzaChpdGVtKTtcbiAgfVxuXG4gIHB1c2hUb1N0YWNrKHN0cikge1xuICAgIHRoaXMuc3RhY2sucHVzaChzdHIpO1xuICB9XG5cbiAgcG9wVG9TdGFjaygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RhY2sucG9wKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyUXVldWUoKSB7XG4gICAgdGhpcy5maWxlcyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmV2ZW50QW5kU3RvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuZ2xvYmFsU3RhcnQoKTtcbiAgICB0aGlzLmdsb2JhbEVuZCgpO1xuICB9XG59XG4iLCI8ZGl2IGlkPVwiZHJvcFpvbmVcIiAgW2NsYXNzTmFtZV09XCJjdXN0b21zdHlsZVwiIFtjbGFzcy5vdmVyXT1cImRyYWdvdmVyZmxhZ1wiXG4gICAgKGRyb3ApPVwiZHJvcEZpbGVzKCRldmVudClcIlxuICAgIChkcmFnb3Zlcik9XCJvbkRyYWdPdmVyKCRldmVudClcIiAoZHJhZ2xlYXZlKT1cIm9uRHJhZ0xlYXZlKCRldmVudClcIj5cblxuICAgIDxkaXYgI3JlZiBjbGFzcz1cImN1c3RvbS1kcm9wem9uZVwiID5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiAqbmdJZj1cInJlZi5jaGlsZHJlbj8ubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICA8Y2xvdWQtaWNvbiBjbGFzcz1cImNsb3VkLWljb25cIj48L2Nsb3VkLWljb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXRvcC10ZXh0XCI+XG4gICAgICAgICAgICAgICAge3tjYXB0aW9ucz8uZHJvcHpvbmU/LnRpdGxlfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNlbnRlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAge3tjYXB0aW9ucz8uZHJvcHpvbmU/Lm9yfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmaWxlLWJyb3dzZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAge3tjYXB0aW9ucz8uZHJvcHpvbmU/LmJyb3dzZX19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=