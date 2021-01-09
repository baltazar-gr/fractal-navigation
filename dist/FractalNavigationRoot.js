var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { FractalAppRoot } from '@bma98/fractal-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationRouter } from './react-router';
import { TabBarPositionProvider } from './context/TabBarPositionProvider';
import { TabBarHiddenProvider, TabBarInsetsProvider } from './context';
enableScreens();
export function FractalNavigationRoot(props) {
    var children = props.children, others = __rest(props, ["children"]);
    return (React.createElement(FractalAppRoot, __assign({}, others),
        React.createElement(NavigationRouter, null,
            React.createElement(SafeAreaProvider, null,
                React.createElement(TabBarPositionProvider, null,
                    React.createElement(TabBarHiddenProvider, null,
                        React.createElement(TabBarInsetsProvider, null, children)))))));
}
//# sourceMappingURL=FractalNavigationRoot.js.map