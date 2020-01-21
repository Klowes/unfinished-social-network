import React, { useMemo } from 'react';
import { Icon } from 'antd';
import { useLocation } from "react-router-dom";
import * as routes from 'routes';
import 'styles/RouteIcon.less';

const typeByRoute = {
    [routes.Home]: 'home',
    [routes.Profile]: 'user',
    [routes.Tags]: 'number',
};

const supportsFilesByRoute = [
    routes.Home,
];

const RouteIcon = ({ route, ...otherProps }) => {
    const { pathname } = useLocation();
    const { type, supportsFilled } = useMemo(
        () => ({
            type: typeByRoute[route],
            supportsFilled: supportsFilesByRoute.find(r => r === route),
        }),
        [route]
    );
    const theme = useMemo(
        () => pathname === route && supportsFilled
            ? 'filled'
            : 'outlined',
        [pathname, route, supportsFilled]
    );
    return (
        <Icon
            {...otherProps}
            {...{ type, theme }}
            className={'RouteIcon-Root'}
            style={{
                marginRight: 0,
            }}
        />
    );
};

export default RouteIcon;
