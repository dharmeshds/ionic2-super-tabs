import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var SuperTabButton = (function () {
    function SuperTabButton(_el) {
        this._el = _el;
        this.selected = false;
        this.select = new EventEmitter();
    }
    SuperTabButton.prototype.onClick = function () {
        this.select.emit(this);
    };
    SuperTabButton.prototype.getNativeElement = function () {
        return this._el.nativeElement;
    };
    SuperTabButton.decorators = [
        { type: Component, args: [{
                    selector: 'super-tab-button',
                    template: "\n    <ion-icon *ngIf=\"!!icon\" [name]=\"icon\" [color]=\"color\"></ion-icon>\n    <span class=\"title\" *ngIf=\"!!title\" ion-text [color]=\"color\">{{ title }}</span>\n    <ion-badge mode=\"md\" [color]=\"badgeColor\" *ngIf=\"badge > 0\">{{ badge }}</ion-badge>\n    <div class=\"button-effect\"></div>\n  ",
                    host: {
                        '[class.selected]': 'selected',
                        '(click)': 'onClick()',
                        '[class.title-only]': '!!title && !icon',
                        '[class.icon-only]': '!title && !!icon',
                        '[class.title-and-icon]': '!!title && !!icon',
                        'tappable': '',
                        'role': 'button'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    SuperTabButton.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    SuperTabButton.propDecorators = {
        'selected': [{ type: Input },],
        'title': [{ type: Input },],
        'icon': [{ type: Input },],
        'badge': [{ type: Input },],
        'badgeColor': [{ type: Input },],
        'color': [{ type: Input },],
        'select': [{ type: Output },],
    };
    return SuperTabButton;
}());
export { SuperTabButton };
//# sourceMappingURL=super-tab-button.js.map