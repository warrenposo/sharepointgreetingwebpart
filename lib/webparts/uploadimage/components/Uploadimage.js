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
import styles from './Uploadimage.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var Uploadimage = /** @class */ (function (_super) {
    __extends(Uploadimage, _super);
    function Uploadimage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uploadimage.prototype.render = function () {
        var _a = this.props, description = _a.description, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        // Get the current hour
        var now = new Date();
        var hours = now.getHours();
        // Determine the greeting message based on the time
        var greetingMessage = hours >= 5 && hours < 12
            ? 'Good morning'
            : hours >= 12 && hours < 17
                ? 'Good afternoon'
                : hours >= 17 && hours < 22
                    ? 'Good evening'
                    : 'Good night';
        return (React.createElement("section", { className: "".concat(styles.uploadimage, " ").concat(hasTeamsContext ? styles.teams : '') },
            React.createElement("div", { className: styles.welcome },
                React.createElement("img", { alt: "", src: isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png'), className: styles.welcomeImage }),
                React.createElement("h2", null,
                    greetingMessage,
                    ", ",
                    escape(userDisplayName),
                    "!"),
                React.createElement("div", null, environmentMessage),
                React.createElement("div", null,
                    "Web part property value: ",
                    React.createElement("strong", null, escape(description))))));
    };
    return Uploadimage;
}(React.Component));
export default Uploadimage;
//# sourceMappingURL=Uploadimage.js.map