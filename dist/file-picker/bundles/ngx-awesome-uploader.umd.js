(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/platform-browser'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-awesome-uploader', ['exports', '@angular/core', 'rxjs', '@angular/platform-browser', 'rxjs/operators', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-awesome-uploader'] = {}, global.ng.core, global.rxjs, global.ng.platformBrowser, global.rxjs.operators, global.ng.common));
}(this, (function (exports, i0, rxjs, i1, operators, i2) { 'use strict';

    var FilePickerService = /** @class */ (function () {
        function FilePickerService(sanitizer) {
            this.sanitizer = sanitizer;
        }
        FilePickerService.prototype.mockUploadFile = function (formData) {
            var event = new CustomEvent('customevent', {
                detail: {
                    type: 'UploadProgreess'
                }
            });
            return rxjs.of(event.detail);
        };
        FilePickerService.prototype.createSafeUrl = function (file) {
            try {
                var url = window.URL.createObjectURL(file);
                var safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
                return safeUrl;
            }
            catch (er) {
                console.log(er);
            }
        };
        return FilePickerService;
    }());
    FilePickerService.ɵfac = function FilePickerService_Factory(t) { return new (t || FilePickerService)(i0.ɵɵinject(i1.DomSanitizer)); };
    FilePickerService.ɵprov = i0.ɵɵdefineInjectable({ token: FilePickerService, factory: FilePickerService.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilePickerService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1.DomSanitizer }]; }, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
        var IMAGE_TYPES = ['PNG', 'JPG', 'JPEG', 'BMP', 'WEBP', 'JFIF', 'TIFF'];
        return IMAGE_TYPES.includes(fileType.toUpperCase());
    }

    (function (FileValidationTypes) {
        FileValidationTypes["fileMaxSize"] = "FILE_MAX_SIZE";
        FileValidationTypes["fileMaxCount"] = "FILE_MAX_COUNT";
        FileValidationTypes["totalMaxSize"] = "TOTAL_MAX_SIZE";
        FileValidationTypes["extensions"] = "EXTENSIONS";
        FileValidationTypes["uploadType"] = "UPLOAD_TYPE";
        FileValidationTypes["customValidator"] = "CUSTOM_VALIDATOR";
    })(exports.FileValidationTypes || (exports.FileValidationTypes = {}));

    var DefaultCaptions = {
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

    var DEFAULT_CROPPER_OPTIONS = {
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
    var UploadFile = /** @class */ (function () {
        function UploadFile(relativePath, fileEntry) {
            this.relativePath = relativePath;
            this.fileEntry = fileEntry;
        }
        return UploadFile;
    }());

    var UploadEvent = /** @class */ (function () {
        function UploadEvent(files) {
            this.files = files;
        }
        return UploadEvent;
    }());

    var CloudIconComponent = /** @class */ (function () {
        function CloudIconComponent() {
        }
        CloudIconComponent.prototype.ngOnInit = function () {
        };
        return CloudIconComponent;
    }());
    CloudIconComponent.ɵfac = function CloudIconComponent_Factory(t) { return new (t || CloudIconComponent)(); };
    CloudIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CloudIconComponent, selectors: [["cloud-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "42px", "height", "42px", 1, "svg-icon"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"]], template: function CloudIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
            }
        }, styles: ["[_nghost-%COMP%]{align-items:center;display:flex;justify-content:center;margin-bottom:.4em}.svg-icon[_ngcontent-%COMP%]{fill:#95a5a6}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CloudIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cloud-icon',
                        templateUrl: './cloud-icon.component.html',
                        styleUrls: ['./cloud-icon.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    function FileComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.title, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.or, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r1.captions == null ? null : ctx_r1.captions.dropzone == null ? null : ctx_r1.captions.dropzone.browse, " ");
        }
    }
    var _c0 = ["*"];
    var FileComponent = /** @class */ (function () {
        function FileComponent(zone, renderer) {
            var _this = this;
            this.zone = zone;
            this.renderer = renderer;
            this.customstyle = null;
            this.disableIf = false;
            this.onFileDrop = new i0.EventEmitter();
            this.onFileOver = new i0.EventEmitter();
            this.onFileLeave = new i0.EventEmitter();
            this.stack = [];
            this.files = [];
            this.dragoverflag = false;
            this.globalDisable = false;
            this.numOfActiveReadEntries = 0;
            if (!this.customstyle) {
                this.customstyle = 'drop-zone';
            }
            this.globalStart = this.renderer.listen('document', 'dragstart', function (evt) {
                _this.globalDisable = true;
            });
            this.globalEnd = this.renderer.listen('document', 'dragend', function (evt) {
                _this.globalDisable = false;
            });
        }
        FileComponent.prototype.onDragOver = function (event) {
            if (!this.globalDisable && !this.disableIf) {
                if (!this.dragoverflag) {
                    this.dragoverflag = true;
                    this.onFileOver.emit(event);
                }
                this.preventAndStop(event);
            }
        };
        FileComponent.prototype.onDragLeave = function (event) {
            if (!this.globalDisable && !this.disableIf) {
                if (this.dragoverflag) {
                    this.dragoverflag = false;
                    this.onFileLeave.emit(event);
                }
                this.preventAndStop(event);
            }
        };
        FileComponent.prototype.dropFiles = function (event) {
            var _this = this;
            if (!this.globalDisable && !this.disableIf) {
                this.dragoverflag = false;
                event.dataTransfer.dropEffect = 'copy';
                var length = void 0;
                if (event.dataTransfer.items) {
                    length = event.dataTransfer.items.length;
                }
                else {
                    length = event.dataTransfer.files.length;
                }
                var _loop_1 = function (i) {
                    var entry = void 0;
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
                        var file_1 = event.dataTransfer.files[i];
                        if (file_1) {
                            var fakeFileEntry = {
                                name: file_1.name,
                                isDirectory: false,
                                isFile: true,
                                file: function (callback) {
                                    callback(file_1);
                                }
                            };
                            var toUpload = new UploadFile(fakeFileEntry.name, fakeFileEntry);
                            this_1.addToQueue(toUpload);
                        }
                    }
                    else {
                        if (entry.isFile) {
                            var toUpload = new UploadFile(entry.name, entry);
                            this_1.addToQueue(toUpload);
                        }
                        else if (entry.isDirectory) {
                            this_1.traverseFileTree(entry, entry.name);
                        }
                    }
                };
                var this_1 = this;
                for (var i = 0; i < length; i++) {
                    _loop_1(i);
                }
                this.preventAndStop(event);
                var timerObservable = rxjs.timer(200, 200);
                this.subscription = timerObservable.subscribe(function (t) {
                    if (_this.files.length > 0 && _this.numOfActiveReadEntries === 0) {
                        _this.onFileDrop.emit(new UploadEvent(_this.files));
                        _this.files = [];
                    }
                });
            }
        };
        FileComponent.prototype.traverseFileTree = function (item, path) {
            var _this = this;
            if (item.isFile) {
                var toUpload = new UploadFile(path, item);
                this.files.push(toUpload);
                this.zone.run(function () {
                    _this.popToStack();
                });
            }
            else {
                this.pushToStack(path);
                path = path + '/';
                var dirReader_1 = item.createReader();
                var entries_1 = [];
                var thisObj_1 = this;
                var readEntries_1 = function () {
                    thisObj_1.numOfActiveReadEntries++;
                    dirReader_1.readEntries(function (res) {
                        if (!res.length) {
                            // add empty folders
                            if (entries_1.length === 0) {
                                var toUpload_1 = new UploadFile(path, item);
                                thisObj_1.zone.run(function () {
                                    thisObj_1.addToQueue(toUpload_1);
                                });
                            }
                            else {
                                var _loop_2 = function (i) {
                                    thisObj_1.zone.run(function () {
                                        thisObj_1.traverseFileTree(entries_1[i], path + entries_1[i].name);
                                    });
                                };
                                for (var i = 0; i < entries_1.length; i++) {
                                    _loop_2(i);
                                }
                            }
                            thisObj_1.zone.run(function () {
                                thisObj_1.popToStack();
                            });
                        }
                        else {
                            // continue with the reading
                            entries_1 = entries_1.concat(res);
                            readEntries_1();
                        }
                        thisObj_1.numOfActiveReadEntries--;
                    });
                };
                readEntries_1();
            }
        };
        FileComponent.prototype.addToQueue = function (item) {
            this.files.push(item);
        };
        FileComponent.prototype.pushToStack = function (str) {
            this.stack.push(str);
        };
        FileComponent.prototype.popToStack = function () {
            var value = this.stack.pop();
        };
        FileComponent.prototype.clearQueue = function () {
            this.files = [];
        };
        FileComponent.prototype.preventAndStop = function (event) {
            event.stopPropagation();
            event.preventDefault();
        };
        FileComponent.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            this.globalStart();
            this.globalEnd();
        };
        return FileComponent;
    }());
    FileComponent.ɵfac = function FileComponent_Factory(t) { return new (t || FileComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    FileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FileComponent, selectors: [["file-drop"]], inputs: { captions: "captions", customstyle: "customstyle", disableIf: "disableIf" }, outputs: { onFileDrop: "onFileDrop", onFileOver: "onFileOver", onFileLeave: "onFileLeave" }, ngContentSelectors: _c0, decls: 5, vars: 4, consts: [["id", "dropZone", 3, "className", "drop", "dragover", "dragleave"], [1, "custom-dropzone"], ["ref", ""], ["class", "content", 4, "ngIf"], [1, "content"], [1, "cloud-icon"], [1, "content-top-text"], [1, "content-center-text"], ["type", "button", 1, "file-browse-button"]], template: function FileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("drop", function FileComponent_Template_div_drop_0_listener($event) { return ctx.dropFiles($event); })("dragover", function FileComponent_Template_div_dragover_0_listener($event) { return ctx.onDragOver($event); })("dragleave", function FileComponent_Template_div_dragleave_0_listener($event) { return ctx.onDragLeave($event); });
                i0.ɵɵelementStart(1, "div", 1, 2);
                i0.ɵɵprojection(3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, FileComponent_div_4_Template, 8, 3, "div", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(2);
                i0.ɵɵclassProp("over", ctx.dragoverflag);
                i0.ɵɵproperty("className", ctx.customstyle);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", (_r0.children == null ? null : _r0.children.length) == 0);
            }
        }, directives: [i2.NgIf, CloudIconComponent], styles: ["[_nghost-%COMP%]{display:block;padding:0 16px;width:100%}#dropZone[_ngcontent-%COMP%]{background:#fff;border:2px dashed #ecf0f1;border-radius:6px;margin:auto;max-width:440px;padding:56px 0}.file-browse-button[_ngcontent-%COMP%]{background:#7f8c8d;border:0;border-radius:6px;color:#fff;cursor:pointer;font-size:14px;font-weight:700;outline:0;padding:12px 18px}.content[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center}.over[_ngcontent-%COMP%]{background-color:hsla(0,0%,57.6%,.5)}.content-top-text[_ngcontent-%COMP%]{color:#5b5b7b;font-size:18px;font-weight:700}.content-center-text[_ngcontent-%COMP%]{color:#90a0bc;font-size:14px;margin:12px 0}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FileComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'file-drop',
                        templateUrl: './file-drop.component.html',
                        styleUrls: ['./file-drop.component.scss']
                    }]
            }], function () { return [{ type: i0.NgZone }, { type: i0.Renderer2 }]; }, { captions: [{
                    type: i0.Input
                }], customstyle: [{
                    type: i0.Input
                }], disableIf: [{
                    type: i0.Input
                }], onFileDrop: [{
                    type: i0.Output
                }], onFileOver: [{
                    type: i0.Output
                }], onFileLeave: [{
                    type: i0.Output
                }] });
    })();

    var CloseIconComponent = /** @class */ (function () {
        function CloseIconComponent() {
        }
        CloseIconComponent.prototype.ngOnInit = function () {
        };
        return CloseIconComponent;
    }());
    CloseIconComponent.ɵfac = function CloseIconComponent_Factory(t) { return new (t || CloseIconComponent)(); };
    CloseIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CloseIconComponent, selectors: [["close-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]], template: function CloseIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
            }
        }, styles: ["[_nghost-%COMP%]{cursor:pointer;display:block}svg[_ngcontent-%COMP%]{fill:#95a5a6}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CloseIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'close-icon',
                        templateUrl: './close-icon.component.html',
                        styleUrls: ['./close-icon.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var _c0$1 = function (a0) { return { "visibility": a0 }; };
    var PreviewLightboxComponent = /** @class */ (function () {
        function PreviewLightboxComponent(sanitizer) {
            this.sanitizer = sanitizer;
            this.previewClose = new i0.EventEmitter();
        }
        PreviewLightboxComponent.prototype.ngOnInit = function () {
            this.getSafeUrl(this.file.file);
        };
        PreviewLightboxComponent.prototype.getSafeUrl = function (file) {
            var url = window.URL.createObjectURL(file);
            this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        };
        PreviewLightboxComponent.prototype.onClose = function (event) {
            this.previewClose.next();
        };
        return PreviewLightboxComponent;
    }());
    PreviewLightboxComponent.ɵfac = function PreviewLightboxComponent_Factory(t) { return new (t || PreviewLightboxComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    PreviewLightboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PreviewLightboxComponent, selectors: [["preview-lightbox"]], inputs: { file: "file" }, outputs: { previewClose: "previewClose" }, decls: 6, vars: 4, consts: [[1, "ng-modal-backdrop", 3, "click"], [1, "ng-modal-content"], [1, "close-icon-wrapper", 3, "click"], [1, "lightbox-item"], [3, "src", "ngStyle", "load"]], template: function PreviewLightboxComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("src", ctx.safeUrl, i0.ɵɵsanitizeUrl)("ngStyle", i0.ɵɵpureFunction1(2, _c0$1, ctx.loaded ? "visible" : "hidden"));
            }
        }, directives: [CloseIconComponent, i2.NgStyle], styles: ["[_nghost-%COMP%]{align-items:center;display:flex;flex-direction:column;height:100vh;justify-content:center;overflow:auto;overflow:hidden;width:100vw}.ng-modal-backdrop[_ngcontent-%COMP%], [_nghost-%COMP%]{left:0;position:fixed;top:0;z-index:1040}.ng-modal-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.288);bottom:0;right:0}.ng-modal-content[_ngcontent-%COMP%]{align-items:center;color:rgba(0,0,0,.87);display:flex;justify-content:center;z-index:1041}.ng-modal-content[_ngcontent-%COMP%]   .close-icon-wrapper[_ngcontent-%COMP%]{font-size:20px;position:absolute;right:20px;top:20px}.ng-modal-content[_ngcontent-%COMP%]   .lightbox-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:contain;-webkit-animation-duration:.2s;-webkit-animation-name:zoomIn;animation-duration:.2s;animation-name:zoomIn;height:auto;max-height:calc(100vh - 30px);max-width:calc(100vw - 30px);object-fit:contain;width:100%}@-webkit-keyframes zoomIn{0%{opacity:0;transform:scale3d(.9,.9,.9)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.9,.9,.9)}50%{opacity:1}}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PreviewLightboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'preview-lightbox',
                        templateUrl: './preview-lightbox.component.html',
                        styleUrls: ['./preview-lightbox.component.scss']
                    }]
            }], function () { return [{ type: i1.DomSanitizer }]; }, { file: [{
                    type: i0.Input
                }], previewClose: [{
                    type: i0.Output
                }] });
    })();

    (function (UploadStatus) {
        UploadStatus["UPLOADED"] = "UPLOADED";
        UploadStatus["IN_PROGRESS"] = "IN PROGRESS";
        UploadStatus["ERROR"] = "ERROR";
    })(exports.UploadStatus || (exports.UploadStatus = {}));
    var FilePickerAdapter = /** @class */ (function () {
        function FilePickerAdapter() {
        }
        return FilePickerAdapter;
    }());

    var RefreshIconComponent = /** @class */ (function () {
        function RefreshIconComponent() {
        }
        return RefreshIconComponent;
    }());
    RefreshIconComponent.ɵfac = function RefreshIconComponent_Factory(t) { return new (t || RefreshIconComponent)(); };
    RefreshIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RefreshIconComponent, selectors: [["refresh-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"]], template: function RefreshIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelement(2, "path", 2);
                i0.ɵɵelementEnd();
            }
        }, styles: ["[_nghost-%COMP%]{cursor:pointer;display:block}svg[_ngcontent-%COMP%]{fill:#95a5a6}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RefreshIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'refresh-icon',
                        templateUrl: './refresh-icon.component.html',
                        styleUrls: ['./refresh-icon.component.scss']
                    }]
            }], null, null);
    })();

    function FilePreviewItemComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵelementStart(1, "img", 18);
            i0.ɵɵlistener("click", function FilePreviewItemComponent_div_0_div_2_Template_img_click_1_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.imageClicked.next(ctx_r9.fileItem); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("src", ctx_r2.safeUrl, i0.ɵɵsanitizeUrl);
        }
    }
    function FilePreviewItemComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngClass", ctx_r3.fileItem.fileName.split(".").pop());
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r3.fileType, " ");
        }
    }
    function FilePreviewItemComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r4.niceBytes(ctx_r4.fileItem.file == null ? null : ctx_r4.fileItem.file.size));
        }
    }
    function FilePreviewItemComponent_div_0_div_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 21);
            i0.ɵɵelement(1, "span", 22);
            i0.ɵɵelementEnd();
        }
    }
    function FilePreviewItemComponent_div_0_refresh_icon_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "refresh-icon", 23);
            i0.ɵɵlistener("click", function FilePreviewItemComponent_div_0_refresh_icon_12_Template_refresh_icon_click_0_listener() { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onRetry(); });
            i0.ɵɵelementEnd();
        }
    }
    function FilePreviewItemComponent_div_0_a_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "a", 24);
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", ctx_r7.captions == null ? null : ctx_r7.captions.previewCard == null ? null : ctx_r7.captions.previewCard.uploadError);
        }
    }
    var _c0$2 = function (a0) { return { "width": a0 }; };
    function FilePreviewItemComponent_div_0_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 25);
            i0.ɵɵelement(2, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 27);
            i0.ɵɵelementStart(4, "div", 28);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0$2, ctx_r8.uploadProgress + "%"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx_r8.uploadProgress, " %");
        }
    }
    var _c1 = function (a0) { return { "visually-hidden": a0 }; };
    function FilePreviewItemComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵtemplate(2, FilePreviewItemComponent_div_0_div_2_Template, 2, 1, "div", 4);
            i0.ɵɵtemplate(3, FilePreviewItemComponent_div_0_div_3_Template, 2, 2, "div", 5);
            i0.ɵɵelement(4, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 7);
            i0.ɵɵelementStart(6, "a", 8);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, FilePreviewItemComponent_div_0_div_9_Template, 2, 1, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 10);
            i0.ɵɵtemplate(11, FilePreviewItemComponent_div_0_div_11_Template, 2, 0, "div", 11);
            i0.ɵɵtemplate(12, FilePreviewItemComponent_div_0_refresh_icon_12_Template, 1, 0, "refresh-icon", 12);
            i0.ɵɵelementStart(13, "a", 13);
            i0.ɵɵlistener("click", function FilePreviewItemComponent_div_0_Template_a_click_13_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onRemove(ctx_r13.fileItem); });
            i0.ɵɵelement(14, "close-icon", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, FilePreviewItemComponent_div_0_a_15_Template, 1, 1, "a", 15);
            i0.ɵɵtemplate(16, FilePreviewItemComponent_div_0_ng_container_16_Template, 6, 4, "ng-container", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c1, ctx_r0.itemTemplate));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.isImageFile && (ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.isImageFile || !(ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx_r0.fileItem.fileName);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.fileItem.fileName);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r0.uploadError && !ctx_r0.uploadProgress && (ctx_r0.fileItem == null ? null : ctx_r0.fileItem.file));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.uploadError);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r0.captions == null ? null : ctx_r0.captions.previewCard == null ? null : ctx_r0.captions.previewCard.remove);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.uploadError && !ctx_r0.uploadProgress);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.uploadProgress);
        }
    }
    function FilePreviewItemComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c2 = function (a0, a1) { return { fileItem: a0, uploadProgress: a1 }; };
    var FilePreviewItemComponent = /** @class */ (function () {
        function FilePreviewItemComponent(fileService) {
            this.fileService = fileService;
            this.removeFile = new i0.EventEmitter();
            this.uploadSuccess = new i0.EventEmitter();
            this.uploadFail = new i0.EventEmitter();
            this.imageClicked = new i0.EventEmitter();
        }
        FilePreviewItemComponent.prototype.ngOnInit = function () {
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
        };
        FilePreviewItemComponent.prototype.getSafeUrl = function (file) {
            return this.fileService.createSafeUrl(file);
        };
        /** Converts bytes to nice size */
        FilePreviewItemComponent.prototype.niceBytes = function (x) {
            var units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var l = 0;
            var n = parseInt(x, 10) || 0;
            while (n >= 1024 && ++l) {
                n = n / 1024;
            }
            // include a decimal point and a tenths-place digit if presenting
            // less than ten of KB or greater units
            return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
        };
        /** Retry file upload when upload was unsuccessfull */
        FilePreviewItemComponent.prototype.onRetry = function () {
            this._uploadFile(this.fileItem);
        };
        FilePreviewItemComponent.prototype.onRemove = function (fileItem) {
            this._uploadUnsubscribe();
            this.removeFile.next(Object.assign(Object.assign({}, fileItem), { uploadResponse: this.uploadResponse }));
        };
        FilePreviewItemComponent.prototype._uploadFile = function (fileItem) {
            var _this = this;
            if (!this.enableAutoUpload) {
                return;
            }
            if (this.adapter) {
                this._uploadSubscription =
                    this.adapter.uploadFile(fileItem)
                        .subscribe(function (res) {
                        if (res && res.status === exports.UploadStatus.UPLOADED) {
                            _this._onUploadSuccess(res.body, fileItem);
                            _this.uploadProgress = undefined;
                        }
                        if (res && res.status === exports.UploadStatus.IN_PROGRESS) {
                            _this.uploadProgress = res.progress;
                        }
                        if (res && res.status === exports.UploadStatus.ERROR) {
                            _this.uploadError = true;
                            _this.uploadFail.next(res.body);
                            _this.uploadProgress = undefined;
                        }
                    }, function (er) {
                        _this.uploadError = true;
                        _this.uploadFail.next(er);
                        _this.uploadProgress = undefined;
                    });
            }
            else {
                console.warn('no adapter was provided');
            }
        };
        /** Emits event when file upload api returns success  */
        FilePreviewItemComponent.prototype._onUploadSuccess = function (uploadResponse, fileItem) {
            this.uploadResponse = uploadResponse;
            this.fileItem.uploadResponse = uploadResponse;
            this.uploadSuccess.next(Object.assign(Object.assign({}, fileItem), { uploadResponse: uploadResponse }));
        };
        /** Cancel upload. Cancels request  */
        FilePreviewItemComponent.prototype._uploadUnsubscribe = function () {
            if (this._uploadSubscription) {
                this._uploadSubscription.unsubscribe();
            }
        };
        return FilePreviewItemComponent;
    }());
    FilePreviewItemComponent.ɵfac = function FilePreviewItemComponent_Factory(t) { return new (t || FilePreviewItemComponent)(i0.ɵɵdirectiveInject(FilePickerService)); };
    FilePreviewItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilePreviewItemComponent, selectors: [["file-preview-item"]], inputs: { fileItem: "fileItem", adapter: "adapter", itemTemplate: "itemTemplate", captions: "captions", enableAutoUpload: "enableAutoUpload" }, outputs: { removeFile: "removeFile", uploadSuccess: "uploadSuccess", uploadFail: "uploadFail", imageClicked: "imageClicked" }, decls: 2, vars: 6, consts: [["class", "file-preview-wrapper", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "file-preview-wrapper", 3, "ngClass"], [1, "file-preview-thumbnail"], ["class", "img-preview-thumbnail", 4, "ngIf"], ["class", "other-preview-thumbnail", 3, "ngClass", 4, "ngIf"], [1, "thumbnail-backdrop"], [1, "file-preview-description"], ["href", "javascript:void(0)", 1, "file-preview-title", 3, "title"], ["class", "file-preview-size", 4, "ngIf"], [1, "file-preview-actions"], ["class", "ngx-checkmark-wrapper", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "ngx-close-icon-wrapper", 3, "title", "click"], [1, "ngx-close-icon"], ["class", "file-upload-error-wrapper", "href", "javascipt:void(0)", 3, "title", 4, "ngIf"], [4, "ngIf"], [1, "img-preview-thumbnail"], [3, "src", "click"], [1, "other-preview-thumbnail", 3, "ngClass"], [1, "file-preview-size"], [1, "ngx-checkmark-wrapper"], [1, "ngx-checkmark"], [3, "click"], ["href", "javascipt:void(0)", 1, "file-upload-error-wrapper", 3, "title"], [1, "file-upload-progress-bar-wrapper"], [1, "file-upload-progress-bar", 3, "ngStyle"], [1, "file-upload-percentage-wrapper"], [1, "file-upload-percentage"]], template: function FilePreviewItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FilePreviewItemComponent_div_0_Template, 17, 13, "div", 0);
                i0.ɵɵtemplate(1, FilePreviewItemComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.fileItem);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngTemplateOutlet", ctx.itemTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c2, ctx.fileItem, ctx.uploadProgress));
            }
        }, directives: [i2.NgIf, i2.NgTemplateOutlet, i2.NgClass, CloseIconComponent, RefreshIconComponent, i2.NgStyle], styles: ["[_nghost-%COMP%]{border-bottom:1px solid #ebeef1;display:block;max-width:440px;padding:20px 16px;position:relative}.visually-hidden[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}.file-preview-wrapper[_ngcontent-%COMP%]{display:flex;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]{cursor:pointer;position:relative;z-index:2}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .img-preview-thumbnail[_ngcontent-%COMP%]{height:36px;width:36px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .img-preview-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;border-radius:6px;height:100%;object-fit:cover;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail[_ngcontent-%COMP%]{align-items:center;background:#706fd3;border-radius:4px;color:#fff;display:flex;font-size:12px;font-weight:700;height:36px;justify-content:center;overflow:hidden;white-space:nowrap;width:36px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.pdf[_ngcontent-%COMP%]{background:#e4394e}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.doc[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.docx[_ngcontent-%COMP%]{background:#2196f3}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.xls[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.xlsx[_ngcontent-%COMP%]{background:#4caf50}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.ppt[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .other-preview-thumbnail.txt[_ngcontent-%COMP%]{background:#ff9800}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]   .thumbnail-backdrop[_ngcontent-%COMP%]{background:rgba(43,56,71,.2);border-radius:6px;height:100%;left:0;pointer-events:none;position:absolute;top:0;transition:all .1s ease-in-out;visibility:hidden;width:100%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]:hover   .thumbnail-backdrop[_ngcontent-%COMP%]{visibility:visible}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-thumbnail[_ngcontent-%COMP%]:active   .thumbnail-backdrop[_ngcontent-%COMP%]{background:rgba(43,56,71,.4);visibility:visible}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]{align-items:flex-start;color:#74809d;display:flex;flex:1;flex-direction:column;overflow:hidden;padding-left:16px;padding-right:16px;position:relative;z-index:2}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-title[_ngcontent-%COMP%]{color:#74809d;cursor:default;font-weight:700;text-decoration:none;width:90%}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-description[_ngcontent-%COMP%]   .file-preview-size[_ngcontent-%COMP%]{color:#979fb8;font-size:12px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]{align-items:center;display:flex;font-size:10px;position:relative;z-index:3}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]{background:#43d084;border-radius:50%;cursor:pointer;font-size:22px;height:20px;position:relative;width:20px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]   .ngx-checkmark[_ngcontent-%COMP%]{height:19px;left:0;position:absolute;top:0;width:19px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-checkmark-wrapper[_ngcontent-%COMP%]   .ngx-checkmark[_ngcontent-%COMP%]:after{border:1px solid #fff;border-width:0 3px 3px 0;content:\"\";display:block;height:7px;left:7px;position:absolute;top:4px;transform:rotate(45deg);width:3px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-preview-actions[_ngcontent-%COMP%]   .ngx-close-icon-wrapper[_ngcontent-%COMP%]{border-radius:50%;cursor:pointer;margin-left:5px;padding:3px}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-percentage-wrapper[_ngcontent-%COMP%], .file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-progress-bar-wrapper[_ngcontent-%COMP%]{bottom:0;height:95%;left:0;margin:auto;position:absolute;top:0;width:100%;z-index:1}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-progress-bar[_ngcontent-%COMP%]{background:#eef1fa;border-radius:6px;height:95%;transition:width .3s ease-in;width:0}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-percentage[_ngcontent-%COMP%]{color:#c2cdda;font-size:19px;padding-right:10%;padding-top:5%;text-align:right}.file-preview-wrapper[_ngcontent-%COMP%]   .file-upload-error-wrapper[_ngcontent-%COMP%]{background:rgba(254,84,111,.06);bottom:0;height:95%;left:0;margin:auto;position:absolute;top:0;width:100%;z-index:1}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilePreviewItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'file-preview-item',
                        templateUrl: './file-preview-item.component.html',
                        styleUrls: ['./file-preview-item.component.scss']
                    }]
            }], function () { return [{ type: FilePickerService }]; }, { removeFile: [{
                    type: i0.Output
                }], uploadSuccess: [{
                    type: i0.Output
                }], uploadFail: [{
                    type: i0.Output
                }], imageClicked: [{
                    type: i0.Output
                }], fileItem: [{
                    type: i0.Input
                }], adapter: [{
                    type: i0.Input
                }], itemTemplate: [{
                    type: i0.Input
                }], captions: [{
                    type: i0.Input
                }], enableAutoUpload: [{
                    type: i0.Input
                }] });
    })();

    function FilePreviewContainerComponent_preview_lightbox_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "preview-lightbox", 2);
            i0.ɵɵlistener("previewClose", function FilePreviewContainerComponent_preview_lightbox_0_Template_preview_lightbox_previewClose_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.closeLightbox(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("file", ctx_r0.lightboxFile);
        }
    }
    function FilePreviewContainerComponent_file_preview_item_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "file-preview-item", 3);
            i0.ɵɵlistener("removeFile", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_removeFile_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.removeFile.next($event); })("uploadSuccess", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_uploadSuccess_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.uploadSuccess.next($event); })("uploadFail", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_uploadFail_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.uploadFail.next($event); })("imageClicked", function FilePreviewContainerComponent_file_preview_item_1_Template_file_preview_item_imageClicked_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.openLightbox($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var file_r4 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("fileItem", file_r4)("itemTemplate", ctx_r1.itemTemplate)("adapter", ctx_r1.adapter)("captions", ctx_r1.captions)("enableAutoUpload", ctx_r1.enableAutoUpload);
        }
    }
    var FilePreviewContainerComponent = /** @class */ (function () {
        function FilePreviewContainerComponent() {
            this.removeFile = new i0.EventEmitter();
            this.uploadSuccess = new i0.EventEmitter();
            this.uploadFail = new i0.EventEmitter();
        }
        FilePreviewContainerComponent.prototype.ngOnInit = function () {
        };
        FilePreviewContainerComponent.prototype.openLightbox = function (file) {
            this.lightboxFile = file;
        };
        FilePreviewContainerComponent.prototype.closeLightbox = function () {
            this.lightboxFile = undefined;
        };
        return FilePreviewContainerComponent;
    }());
    FilePreviewContainerComponent.ɵfac = function FilePreviewContainerComponent_Factory(t) { return new (t || FilePreviewContainerComponent)(); };
    FilePreviewContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilePreviewContainerComponent, selectors: [["file-preview-container"]], inputs: { previewFiles: "previewFiles", itemTemplate: "itemTemplate", enableAutoUpload: "enableAutoUpload", adapter: "adapter", captions: "captions" }, outputs: { removeFile: "removeFile", uploadSuccess: "uploadSuccess", uploadFail: "uploadFail" }, decls: 2, vars: 2, consts: [[3, "file", "previewClose", 4, "ngIf"], [3, "fileItem", "itemTemplate", "adapter", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", "imageClicked", 4, "ngFor", "ngForOf"], [3, "file", "previewClose"], [3, "fileItem", "itemTemplate", "adapter", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", "imageClicked"]], template: function FilePreviewContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, FilePreviewContainerComponent_preview_lightbox_0_Template, 1, 1, "preview-lightbox", 0);
                i0.ɵɵtemplate(1, FilePreviewContainerComponent_file_preview_item_1_Template, 1, 5, "file-preview-item", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.lightboxFile);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.previewFiles);
            }
        }, directives: [i2.NgIf, i2.NgForOf, PreviewLightboxComponent, FilePreviewItemComponent], styles: ["[_nghost-%COMP%]{background:#fafbfd;display:flex;flex-direction:column;justify-content:flex-start;width:100%}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilePreviewContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'file-preview-container',
                        templateUrl: './file-preview-container.component.html',
                        styleUrls: ['./file-preview-container.component.scss']
                    }]
            }], function () { return []; }, { previewFiles: [{
                    type: i0.Input
                }], itemTemplate: [{
                    type: i0.Input
                }], enableAutoUpload: [{
                    type: i0.Input
                }], removeFile: [{
                    type: i0.Output
                }], uploadSuccess: [{
                    type: i0.Output
                }], uploadFail: [{
                    type: i0.Output
                }], adapter: [{
                    type: i0.Input
                }], captions: [{
                    type: i0.Input
                }] });
    })();

    function FilePickerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵlistener("click", function FilePickerComponent_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5_1); i0.ɵɵnextContext(); var _r1 = i0.ɵɵreference(2); return _r1.click(); });
            i0.ɵɵelementStart(1, "file-drop", 7);
            i0.ɵɵlistener("onFileDrop", function FilePickerComponent_div_0_Template_file_drop_onFileDrop_1_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.dropped($event); });
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("customstyle", "custom-drag")("captions", ctx_r0.captions);
        }
    }
    function FilePickerComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 8);
            i0.ɵɵelementStart(1, "div", 9);
            i0.ɵɵelementStart(2, "img", 10);
            i0.ɵɵlistener("load", function FilePickerComponent_div_3_Template_img_load_2_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.cropperImgLoaded($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 11);
            i0.ɵɵelementStart(4, "button", 12);
            i0.ɵɵlistener("click", function FilePickerComponent_div_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onCropSubmit(); });
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 13);
            i0.ɵɵlistener("click", function FilePickerComponent_div_3_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.closeCropper({ file: ctx_r10.currentCropperFile, fileName: ctx_r10.currentCropperFile.name }); });
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx_r2.safeCropImgUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.captions == null ? null : ctx_r2.captions.cropper == null ? null : ctx_r2.captions.cropper.crop, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.captions == null ? null : ctx_r2.captions.cropper == null ? null : ctx_r2.captions.cropper.cancel, " ");
        }
    }
    function FilePickerComponent_file_preview_container_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "file-preview-container", 14);
            i0.ɵɵlistener("removeFile", function FilePickerComponent_file_preview_container_5_Template_file_preview_container_removeFile_0_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.removeFile($event); })("uploadSuccess", function FilePickerComponent_file_preview_container_5_Template_file_preview_container_uploadSuccess_0_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onUploadSuccess($event); })("uploadFail", function FilePickerComponent_file_preview_container_5_Template_file_preview_container_uploadFail_0_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onUploadFail($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("previewFiles", ctx_r3.files)("adapter", ctx_r3.adapter)("itemTemplate", ctx_r3.itemTemplate)("captions", ctx_r3.captions)("enableAutoUpload", ctx_r3.enableAutoUpload);
        }
    }
    var _c0$3 = [[["", 8, "dropzonetemplate"]]];
    var _c1$1 = function (a0) { return { "visually-hidden": a0 }; };
    var _c2$1 = [".dropzoneTemplate"];
    var FilePickerComponent = /** @class */ (function () {
        function FilePickerComponent(fileService, elementRef) {
            this.fileService = fileService;
            this.elementRef = elementRef;
            /** Emitted when file upload via api successfully. Emitted for every file */
            this.uploadSuccess = new i0.EventEmitter();
            /** Emitted when file upload via api failed. Emitted for every file */
            this.uploadFail = new i0.EventEmitter();
            /** Emitted when file is removed via api successfully. Emitted for every file */
            this.removeSuccess = new i0.EventEmitter();
            /** Emitted on file validation fail */
            this.validationError = new i0.EventEmitter();
            /** Emitted when file is added and passed validations. Not uploaded yet */
            this.fileAdded = new i0.EventEmitter();
            /** Emitted when file is removed from fileList */
            this.fileRemoved = new i0.EventEmitter();
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
            this._cropClosed$ = new rxjs.Subject();
            this._onDestroy$ = new rxjs.Subject();
        }
        FilePickerComponent.prototype.ngOnInit = function () {
            this._setCropperOptions();
            this._listenToCropClose();
        };
        FilePickerComponent.prototype.ngOnDestroy = function () {
            this._onDestroy$.next();
            this._onDestroy$.complete();
        };
        /** On input file selected */
        FilePickerComponent.prototype.onChange = function (event) {
            var files = Array.from(event);
            this.handleFiles(files).subscribe();
        };
        /** On file dropped */
        FilePickerComponent.prototype.dropped = function (event) {
            var e_1, _a;
            var _this = this;
            var files = event.files;
            var filesForUpload = [];
            try {
                for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var droppedFile = files_1_1.value;
                    // Is it a file?
                    if (droppedFile.fileEntry.isFile) {
                        var fileEntry = droppedFile.fileEntry;
                        fileEntry.file(function (file) {
                            filesForUpload.push(file);
                        });
                    }
                    else {
                        // It was a directory (empty directories are added, otherwise only files)
                        var fileEntry = droppedFile.fileEntry;
                        // console.log(droppedFile.relativePath, fileEntry);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            setTimeout(function () { return _this.handleFiles(filesForUpload).subscribe(); });
        };
        /** Emits event when file upload api returns success  */
        FilePickerComponent.prototype.onUploadSuccess = function (fileItem) {
            this.uploadSuccess.next(fileItem);
        };
        /** Emits event when file upload api returns success  */
        FilePickerComponent.prototype.onUploadFail = function (er) {
            this.uploadFail.next(er);
        };
        /** Emits event when file remove api returns success  */
        FilePickerComponent.prototype.onRemoveSuccess = function (fileItem) {
            this.removeSuccess.next(fileItem);
            this.removeFileFromList(fileItem);
        };
        FilePickerComponent.prototype.getSafeUrl = function (file) {
            return this.fileService.createSafeUrl(file);
        };
        /** Removes file from UI and sends api */
        FilePickerComponent.prototype.removeFile = function (fileItem) {
            var _this = this;
            if (!this.enableAutoUpload) {
                this.removeFileFromList(fileItem);
                return;
            }
            if (this.adapter) {
                this.adapter.removeFile(fileItem).subscribe(function (res) {
                    _this.onRemoveSuccess(fileItem);
                });
            }
            else {
                console.warn('no adapter was provided');
            }
        };
        /** Listen when Cropper is closed and open new cropper if next image exists */
        FilePickerComponent.prototype._listenToCropClose = function () {
            var _this = this;
            this._cropClosed$
                .pipe(operators.takeUntil(this._onDestroy$))
                .subscribe(function (res) {
                var croppedIndex = _this.filesForCropper.findIndex(function (item) { return item.name === res.fileName; });
                var nextFile = croppedIndex !== -1
                    ? _this.filesForCropper[croppedIndex + 1]
                    : undefined;
                _this.filesForCropper = __spread(_this.filesForCropper).filter(function (item) { return item.name !== res.fileName; });
                if (nextFile) {
                    _this.openCropper(nextFile);
                }
            });
        };
        /** Sets custom cropper options if avaiable */
        FilePickerComponent.prototype._setCropperOptions = function () {
            if (!this.cropperOptions) {
                this._setDefaultCropperOptions();
            }
        };
        /** Sets manual cropper options if no custom options are avaiable */
        FilePickerComponent.prototype._setDefaultCropperOptions = function () {
            this.cropperOptions = DEFAULT_CROPPER_OPTIONS;
        };
        /** Handles input and drag/drop files */
        FilePickerComponent.prototype.handleFiles = function (files) {
            var _this = this;
            if (!this.isValidMaxFileCount(files)) {
                return rxjs.of(null);
            }
            var isValidUploadSync = files.every(function (item) { return _this._validateFileSync(item); });
            var asyncFunctions = files.map(function (item) { return _this._validateFileAsync(item); });
            return rxjs.combineLatest(__spread(asyncFunctions)).pipe(operators.map(function (res) {
                var isValidUploadAsync = res.every(function (result) { return result === true; });
                if (!isValidUploadSync || !isValidUploadAsync) {
                    return;
                }
                files.forEach(function (file, index) {
                    _this.handleInputFile(file, index);
                });
            }));
        };
        /** Validates synchronous validations */
        FilePickerComponent.prototype._validateFileSync = function (file) {
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
        };
        /** Validates asynchronous validations */
        FilePickerComponent.prototype._validateFileAsync = function (file) {
            var _this = this;
            if (!this.customValidator) {
                return rxjs.of(true);
            }
            return this.customValidator(file).pipe(operators.tap(function (res) {
                if (!res) {
                    _this.validationError.next({
                        file: file,
                        error: exports.FileValidationTypes.customValidator
                    });
                }
            }));
        };
        /** Handles input and drag&drop files */
        FilePickerComponent.prototype.handleInputFile = function (file, index) {
            var type = GET_FILE_CATEGORY_TYPE(file.type);
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
        };
        /** Validates if upload type is single so another file cannot be added */
        FilePickerComponent.prototype.isValidUploadType = function (file) {
            if (this.uploadType === 'single' && this.files.length > 0) {
                this.validationError.next({
                    file: file,
                    error: exports.FileValidationTypes.uploadType
                });
                return false;
            }
            else {
                return true;
            }
        };
        /** Validates max file count */
        FilePickerComponent.prototype.isValidMaxFileCount = function (files) {
            if (!this.fileMaxCount || this.fileMaxCount >= this.files.length + files.length) {
                return true;
            }
            else {
                this.validationError.next({
                    file: null,
                    error: exports.FileValidationTypes.fileMaxCount
                });
                return false;
            }
        };
        /** Add file to file list after succesfull validation */
        FilePickerComponent.prototype.pushFile = function (file, fileName) {
            if (fileName === void 0) { fileName = file.name; }
            this.files.push({ file: file, fileName: fileName });
            this.fileAdded.next({ file: file, fileName: fileName });
        };
        /** Opens cropper for image crop */
        FilePickerComponent.prototype.openCropper = function (file) {
            if (window.CROPPER || typeof Cropper !== 'undefined') {
                this.safeCropImgUrl = this.fileService.createSafeUrl(file);
                this.currentCropperFile = file;
            }
            else {
                console.warn("please import cropperjs script and styles to use cropper feature or disable it by setting [enableCropper]='false'");
                return;
            }
        };
        /** On img load event */
        FilePickerComponent.prototype.cropperImgLoaded = function (e) {
            var image = document.getElementById('cropper-img');
            this.cropper = new Cropper(image, this.cropperOptions);
        };
        /** Close or cancel cropper */
        FilePickerComponent.prototype.closeCropper = function (filePreview) {
            var _this = this;
            this.currentCropperFile = undefined;
            this.cropper = undefined;
            setTimeout(function () { return _this._cropClosed$.next(filePreview); }, 200);
        };
        /** Removes files from files list */
        FilePickerComponent.prototype.removeFileFromList = function (file) {
            this.files = this.files.filter(function (f) { return f.fileName !== file.fileName; });
            this.fileRemoved.next(file);
        };
        /** Validates file extension */
        FilePickerComponent.prototype.isValidExtension = function (file, fileName) {
            if (!this.fileExtensions) {
                return true;
            }
            var extension = fileName.split('.').pop();
            var fileExtensions = this.fileExtensions.map(function (ext) { return ext.toLowerCase(); });
            if (fileExtensions.indexOf(extension.toLowerCase()) === -1) {
                this.validationError.next({ file: file, error: exports.FileValidationTypes.extensions });
                return false;
            }
            return true;
        };
        /** Validates selected file size and total file size */
        FilePickerComponent.prototype.isValidSize = function (file, size) {
            /** Validating selected file size */
            var res = BITS_TO_MB(size);
            var isValidFileSize;
            var isValidTotalFileSize;
            if (!this.fileMaxSize || (this.fileMaxSize && res < this.fileMaxSize)) {
                isValidFileSize = true;
            }
            else {
                this.validationError.next({
                    file: file,
                    error: exports.FileValidationTypes.fileMaxSize
                });
            }
            /** Validating Total Files Size */
            var totalBits = this.files
                .map(function (f) { return f.file ? f.file.size : 0; })
                .reduce(function (acc, curr) { return acc + curr; }, 0);
            if (!this.totalMaxSize ||
                (this.totalMaxSize &&
                    BITS_TO_MB(totalBits + file.size) < this.totalMaxSize)) {
                isValidTotalFileSize = true;
            }
            else {
                this.validationError.next({
                    file: file,
                    error: exports.FileValidationTypes.totalMaxSize
                });
            }
            return !!isValidFileSize && isValidTotalFileSize;
        };
        /** when crop button submitted */
        FilePickerComponent.prototype.onCropSubmit = function () {
            this.cropper
                .getCroppedCanvas(this.croppedCanvasOptions)
                .toBlob(this._blobFallBack.bind(this), 'image/png');
        };
        /** After crop submit */
        FilePickerComponent.prototype._blobFallBack = function (blob) {
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
        };
        return FilePickerComponent;
    }());
    FilePickerComponent.ɵfac = function FilePickerComponent_Factory(t) { return new (t || FilePickerComponent)(i0.ɵɵdirectiveInject(FilePickerService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    FilePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilePickerComponent, selectors: [["ngx-awesome-uploader"]], inputs: { customValidator: "customValidator", enableCropper: "enableCropper", showeDragDropZone: "showeDragDropZone", showPreviewContainer: "showPreviewContainer", itemTemplate: "itemTemplate", uploadType: "uploadType", fileMaxSize: "fileMaxSize", fileMaxCount: "fileMaxCount", totalMaxSize: "totalMaxSize", accept: "accept", fileExtensions: "fileExtensions", cropperOptions: "cropperOptions", croppedCanvasOptions: "croppedCanvasOptions", adapter: "adapter", dropzoneTemplate: "dropzoneTemplate", captions: "captions", enableAutoUpload: "enableAutoUpload" }, outputs: { uploadSuccess: "uploadSuccess", uploadFail: "uploadFail", removeSuccess: "removeSuccess", validationError: "validationError", fileAdded: "fileAdded", fileRemoved: "fileRemoved" }, ngContentSelectors: _c2$1, decls: 6, vars: 8, consts: [["class", "file-drop-wrapper", 3, "click", 4, "ngIf"], ["type", "file", "name", "file[]", "id", "fileInput", 1, "file-input", 3, "multiple", "accept", "click", "change"], ["fileInput", ""], ["class", "cropperJsOverlay", 4, "ngIf"], [1, "files-preview-wrapper", 3, "ngClass"], [3, "previewFiles", "adapter", "itemTemplate", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail", 4, "ngIf"], [1, "file-drop-wrapper", 3, "click"], [3, "customstyle", "captions", "onFileDrop"], [1, "cropperJsOverlay"], [1, "cropperJsBox"], ["id", "cropper-img", 3, "src", "load"], [1, "cropper-actions"], ["type", "button", 1, "cropSubmit", 3, "click"], ["type", "button", 1, "cropCancel", 3, "click"], [3, "previewFiles", "adapter", "itemTemplate", "captions", "enableAutoUpload", "removeFile", "uploadSuccess", "uploadFail"]], template: function FilePickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r15_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵprojectionDef(_c0$3);
                i0.ɵɵtemplate(0, FilePickerComponent_div_0_Template, 3, 2, "div", 0);
                i0.ɵɵelementStart(1, "input", 1, 2);
                i0.ɵɵlistener("click", function FilePickerComponent_Template_input_click_1_listener() { i0.ɵɵrestoreView(_r15_1); var _r1 = i0.ɵɵreference(2); return _r1.value = null; })("change", function FilePickerComponent_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r15_1); var _r1 = i0.ɵɵreference(2); return ctx.onChange(_r1.files); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, FilePickerComponent_div_3_Template, 8, 3, "div", 3);
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵtemplate(5, FilePickerComponent_file_preview_container_5_Template, 1, 5, "file-preview-container", 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.showeDragDropZone);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("multiple", ctx.uploadType === "multi" ? "multiple" : "")("accept", ctx.accept);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.currentCropperFile);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1$1, !ctx.showPreviewContainer));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.files);
            }
        }, directives: [i2.NgIf, i2.NgClass, FileComponent, FilePreviewContainerComponent], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{align-items:center;border-radius:6px;display:flex;flex-direction:column;height:100%;max-width:440px;overflow:auto}.files-preview-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%}#cropper-img[_ngcontent-%COMP%]{display:none;max-width:60vw}#cropper-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}.file-drop-wrapper[_ngcontent-%COMP%]{background:#fafbfd;padding-top:20px;width:100%}.preview-container[_ngcontent-%COMP%]{display:flex}.cropperJsOverlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.32);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:999}.cropperJsBox[_ngcontent-%COMP%], .cropperJsOverlay[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.cropperJsBox[_ngcontent-%COMP%]{flex-direction:column;max-height:calc(100vh - 88px);max-width:90vw}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]{display:flex}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;border-radius:6px;cursor:pointer;margin:5px;padding:12px 25px}.cropperJsBox[_ngcontent-%COMP%]   .cropper-actions[_ngcontent-%COMP%]   .cropSubmit[_ngcontent-%COMP%]{background:#16a085;color:#fff} .cropper img{max-height:300px!important}#images[_ngcontent-%COMP%]{display:flex;justify-content:center;overflow-x:auto;width:500px}#images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{align-items:flex-end;display:flex;flex:0 0 100px;flex-direction:column;margin:0 2px}#fileInput[_ngcontent-%COMP%]{display:none}.uploader-submit-btn[_ngcontent-%COMP%]{background:#ffd740;border:0;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);color:rgba(0,0,0,.87);cursor:pointer;font-size:15px;line-height:36px;margin-top:12px;padding:0 16px}button[_ngcontent-%COMP%]:disabled{background:#dcdcdc;color:rgba(0,0,0,.26)}.visually-hidden[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilePickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-awesome-uploader',
                        templateUrl: './file-picker.component.html',
                        styleUrls: ['./file-picker.component.scss']
                    }]
            }], function () { return [{ type: FilePickerService }, { type: i0.ElementRef }]; }, { uploadSuccess: [{
                    type: i0.Output
                }], uploadFail: [{
                    type: i0.Output
                }], removeSuccess: [{
                    type: i0.Output
                }], validationError: [{
                    type: i0.Output
                }], fileAdded: [{
                    type: i0.Output
                }], fileRemoved: [{
                    type: i0.Output
                }], customValidator: [{
                    type: i0.Input
                }], enableCropper: [{
                    type: i0.Input
                }], showeDragDropZone: [{
                    type: i0.Input
                }], showPreviewContainer: [{
                    type: i0.Input
                }], itemTemplate: [{
                    type: i0.Input
                }], uploadType: [{
                    type: i0.Input
                }], fileMaxSize: [{
                    type: i0.Input
                }], fileMaxCount: [{
                    type: i0.Input
                }], totalMaxSize: [{
                    type: i0.Input
                }], accept: [{
                    type: i0.Input
                }], fileExtensions: [{
                    type: i0.Input
                }], cropperOptions: [{
                    type: i0.Input
                }], croppedCanvasOptions: [{
                    type: i0.Input
                }], adapter: [{
                    type: i0.Input
                }], dropzoneTemplate: [{
                    type: i0.Input
                }], captions: [{
                    type: i0.Input
                }], enableAutoUpload: [{
                    type: i0.Input
                }] });
    })();

    var FileDropModule = /** @class */ (function () {
        function FileDropModule() {
        }
        return FileDropModule;
    }());
    FileDropModule.ɵmod = i0.ɵɵdefineNgModule({ type: FileDropModule, bootstrap: [FileComponent] });
    FileDropModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FileDropModule_Factory(t) { return new (t || FileDropModule)(); }, providers: [], imports: [[i2.CommonModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FileDropModule, { declarations: [FileComponent,
                CloudIconComponent], imports: [i2.CommonModule], exports: [FileComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FileDropModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FileComponent,
                            CloudIconComponent
                        ],
                        exports: [FileComponent],
                        imports: [i2.CommonModule],
                        providers: [],
                        bootstrap: [FileComponent],
                    }]
            }], null, null);
    })();

    var FilePickerModule = /** @class */ (function () {
        function FilePickerModule() {
        }
        return FilePickerModule;
    }());
    FilePickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: FilePickerModule });
    FilePickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FilePickerModule_Factory(t) { return new (t || FilePickerModule)(); }, providers: [FilePickerService], imports: [[
                i2.CommonModule,
                FileDropModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilePickerModule, { declarations: [FilePickerComponent,
                FilePreviewContainerComponent,
                FilePreviewItemComponent,
                PreviewLightboxComponent,
                RefreshIconComponent,
                CloseIconComponent], imports: [i2.CommonModule,
                FileDropModule], exports: [FilePickerComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FilePickerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
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
            }], null, null);
    })();

    /*
     * Public API Surface of file-picker
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FilePickerAdapter = FilePickerAdapter;
    exports.FilePickerComponent = FilePickerComponent;
    exports.FilePickerModule = FilePickerModule;
    exports.FilePickerService = FilePickerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-awesome-uploader.umd.js.map
