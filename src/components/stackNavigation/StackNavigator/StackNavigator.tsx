import React, { Children, useEffect, useMemo, useRef } from 'react';
import { useLocation } from '../../../react-router';
import { ScreenStack, ScreenStackProps } from '../ScreenStack';
import { filterMatchingChildren } from './util/filterMatchingChildren';
import { injectModalContainers } from './util/injectModalContainer';
import { useIsRouteActive } from '../../../hooks/useIsRouteActive';
import { getMarginInsets } from '../../../util/getMarginInsets';
import { useTabBarInsets } from '../../../hooks/useTabBarInsets';
import { StackNavigatorRootPathProvider } from '../../../context/StackNavigatorRootPathProvider';

export interface StackNavigatorProps extends Omit<ScreenStackProps, 'children'> {
    children: Array<JSX.Element> | JSX.Element;
    path?: string;
}

export function StackNavigator(props: StackNavigatorProps): JSX.Element {
    const { path, children, style, ...others } = props;
    const { pathname } = useLocation();
    const basePath = path ?? '';
    const isRouteActive = useIsRouteActive(basePath, false);
    const prevChildrenRef = useRef<Array<JSX.Element>>([]);
    const tabBarInsets = useTabBarInsets();
    const marginInsets = getMarginInsets(tabBarInsets, false, true);

    const childrenToRender = useMemo(() => {
        let arrayOfChildren = Children.toArray(children) as Array<JSX.Element>;
        arrayOfChildren = filterMatchingChildren(arrayOfChildren, pathname);
        arrayOfChildren = injectModalContainers(arrayOfChildren);
        return arrayOfChildren;
    }, [children, pathname]);

    const finalStyle = useMemo(() => {
        return [
            style,
            {
                flex: 1,
                ...marginInsets
            }
        ];
    }, [style, marginInsets]);

    useEffect(() => {
        if (isRouteActive) {
            prevChildrenRef.current = childrenToRender;
        }
    }, [childrenToRender, isRouteActive]);

    return (
        <StackNavigatorRootPathProvider initialValue={basePath}>
            <ScreenStack style={finalStyle} {...others}>
                {isRouteActive ? childrenToRender : prevChildrenRef.current}
            </ScreenStack>
        </StackNavigatorRootPathProvider>
    );
}
