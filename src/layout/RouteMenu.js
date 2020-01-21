import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { useLocation, useHistory } from "react-router-dom";
import { Avatar, RouteIcon } from 'components';
import * as routes from 'routes';
import 'styles/RouteMenu.less';

const { Item } = Menu;

const RouteMenu = () => {
    const { pathname } = useLocation();
    const { push } = useHistory();
    const items = useMemo(
        () => Object.entries(routes).map(([key, route]) => (
            <Item className={'RouteMenu-Item'} key={route} title={key}>
                {route === routes.Profile
                    ? <Avatar />
                    : <RouteIcon {...{ route }} />
                }
            </Item>
        )),
        []
    );
    return (
        <Menu
            className={'RouteMenu-Root'}
            theme={'dark'}
            mode={'horizontal'}
            defaultSelectedKeys={[pathname]}
            onSelect={({ key }) => push(key)}
        >
            {items}
        </Menu>
    )
};

export default RouteMenu;