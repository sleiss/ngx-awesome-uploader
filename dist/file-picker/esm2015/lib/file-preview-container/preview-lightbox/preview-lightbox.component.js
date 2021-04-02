import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../icons/close-icon/close-icon.component";
import * as i3 from "@angular/common";
const _c0 = function (a0) { return { "visibility": a0 }; };
export class PreviewLightboxComponent {
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
PreviewLightboxComponent.ɵfac = function PreviewLightboxComponent_Factory(t) { return new (t || PreviewLightboxComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
PreviewLightboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PreviewLightboxComponent, selectors: [["preview-lightbox"]], inputs: { file: "file" }, outputs: { previewClose: "previewClose" }, decls: 6, vars: 4, consts: [[1, "ng-modal-backdrop", 3, "click"], [1, "ng-modal-content"], [1, "close-icon-wrapper", 3, "click"], [1, "lightbox-item"], [3, "src", "ngStyle", "load"]], template: function PreviewLightboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PreviewLightboxComponent_Template_div_click_0_listener($event) { return ctx.onClose($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵlistener("click", function PreviewLightboxComponent_Template_div_click_2_listener($event) { return ctx.onClose($event); });
        i0.ɵɵelement(3, "close-icon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "img", 4);
        i0.ɵɵlistener("load", function PreviewLightboxComponent_Template_img_load_5_listener() { return ctx.loaded = true; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("src", ctx.safeUrl, i0.ɵɵsanitizeUrl)("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx.loaded ? "visible" : "hidden"));
    } }, directives: [i2.CloseIconComponent, i3.NgStyle], styles: ["[_nghost-%COMP%]{align-items:center;display:flex;flex-direction:column;height:100vh;justify-content:center;overflow:auto;overflow:hidden;width:100vw}.ng-modal-backdrop[_ngcontent-%COMP%], [_nghost-%COMP%]{left:0;position:fixed;top:0;z-index:1040}.ng-modal-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.288);bottom:0;right:0}.ng-modal-content[_ngcontent-%COMP%]{align-items:center;color:rgba(0,0,0,.87);display:flex;justify-content:center;z-index:1041}.ng-modal-content[_ngcontent-%COMP%]   .close-icon-wrapper[_ngcontent-%COMP%]{font-size:20px;position:absolute;right:20px;top:20px}.ng-modal-content[_ngcontent-%COMP%]   .lightbox-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:contain;-webkit-animation-duration:.2s;-webkit-animation-name:zoomIn;animation-duration:.2s;animation-name:zoomIn;height:auto;max-height:calc(100vh - 30px);max-width:calc(100vw - 30px);object-fit:contain;width:100%}@-webkit-keyframes zoomIn{0%{opacity:0;transform:scale3d(.9,.9,.9)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.9,.9,.9)}50%{opacity:1}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PreviewLightboxComponent, [{
        type: Component,
        args: [{
                selector: 'preview-lightbox',
                templateUrl: './preview-lightbox.component.html',
                styleUrls: ['./preview-lightbox.component.scss']
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { file: [{
            type: Input
        }], previewClose: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1saWdodGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2xlaXNzL3Byb2plY3RzL25vZGUvbmd4LWF3ZXNvbWUtdXBsb2FkZXIvcHJvamVjdHMvZmlsZS1waWNrZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtcHJldmlldy1jb250YWluZXIvcHJldmlldy1saWdodGJveC9wcmV2aWV3LWxpZ2h0Ym94LmNvbXBvbmVudC50cyIsImxpYi9maWxlLXByZXZpZXctY29udGFpbmVyL3ByZXZpZXctbGlnaHRib3gvcHJldmlldy1saWdodGJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxZQUFZLEVBQW1CLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQU8xRSxNQUFNLE9BQU8sd0JBQXdCO0lBS25DLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFIakMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBR0gsQ0FBQztJQUVoRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBaUI7UUFDMUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxPQUFPLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0dBaEJVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDVHJDLDhCQUVNO1FBRnlCLHdHQUFTLG1CQUFlLElBQUM7UUFFeEQsaUJBQU07UUFFTiw4QkFDRTtRQUFBLDhCQUNJO1FBRDRCLHdHQUFTLG1CQUFlLElBQUM7UUFDckQsNkJBQXlCO1FBQzdCLGlCQUFNO1FBQ04sOEJBQ0U7UUFBQSw4QkFDRjtRQUR1Qiw2R0FBaUIsSUFBSSxJQUFDO1FBQTNDLGlCQUNGO1FBQUEsaUJBQU07UUFDUCxpQkFBTTs7UUFGRSxlQUFlO1FBQWYsbURBQWUsMEVBQUE7O2tEREFYLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7K0RBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbGVQcmV2aWV3TW9kZWwgfSBmcm9tICcuLi8uLi9maWxlLXByZXZpZXcubW9kZWwnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJldmlldy1saWdodGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmV2aWV3LWxpZ2h0Ym94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJldmlldy1saWdodGJveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByZXZpZXdMaWdodGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVQcmV2aWV3TW9kZWw7XG4gIEBPdXRwdXQoKSBwcmV2aWV3Q2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIGxvYWRlZDogYm9vbGVhbjtcbiAgc2FmZVVybDogU2FmZVJlc291cmNlVXJsO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldFNhZmVVcmwodGhpcy5maWxlLmZpbGUpO1xuICB9XG4gIGdldFNhZmVVcmwoZmlsZTogRmlsZSB8IEJsb2IpOiB2b2lkIHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICB0aGlzLnNhZmVVcmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodXJsKTtcbiAgfVxuICBvbkNsb3NlKGV2ZW50KTogdm9pZCB7XG4gICB0aGlzLnByZXZpZXdDbG9zZS5uZXh0KCk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm5nLW1vZGFsLWJhY2tkcm9wXCIgKGNsaWNrKT1cIm9uQ2xvc2UoJGV2ZW50KVwiPlxuXG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm5nLW1vZGFsLWNvbnRlbnRcIiA+XG4gIDxkaXYgY2xhc3M9XCJjbG9zZS1pY29uLXdyYXBwZXJcIiAoY2xpY2spPVwib25DbG9zZSgkZXZlbnQpXCI+XG4gICAgICA8Y2xvc2UtaWNvbj48L2Nsb3NlLWljb24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibGlnaHRib3gtaXRlbVwiID5cbiAgICA8aW1nIFtzcmNdPVwic2FmZVVybFwiIChsb2FkKT1cImxvYWRlZCA9IHRydWVcIiBbbmdTdHlsZV09XCJ7J3Zpc2liaWxpdHknOiBsb2FkZWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJ31cIj5cbiAgPC9kaXY+XG4gPC9kaXY+XG4iXX0=