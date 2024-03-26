var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Uploadimage from './components/Uploadimage';
var UploadimageWebPart = /** @class */ (function (_super) {
    __extends(UploadimageWebPart, _super);
    function UploadimageWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    UploadimageWebPart.prototype.render = function () {
        var element = React.createElement(Uploadimage, {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName
        });
        ReactDom.render(element, this.domElement);
    };
    UploadimageWebPart.prototype.onInit = function () {
        var _this = this;
        return this._getEnvironmentMessage().then(function (message) {
            _this._environmentMessage = message;
        });
    };
    UploadimageWebPart.prototype._getEnvironmentMessage = function () {
        var now = new Date();
        var hour = now.getHours();
        if (hour >= 5 && hour < 12) {
            return 'Good morning';
        }
        else if (hour >= 12 && hour < 18) {
            return 'Good afternoon';
        }
        else {
            return 'Good night';
        }
    };
    return UploadimageWebPart;
}(BaseClientSideWebPart));
export default UploadimageWebPart;
//# sourceMappingURL=greetingWebpart.js.map