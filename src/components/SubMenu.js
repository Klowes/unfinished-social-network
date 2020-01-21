import React from 'react';
import { Menu } from 'antd';
import 'styles/SubMenu.less';

const ASubMenu = Menu.SubMenu;

const SubMenu = ({ title, ...otherProps }) => (
    <ASubMenu
        {...otherProps}
        title={
            <span className={'SubMenu-title'}>
                {title}
            </span>
        }
    />
);

export default SubMenu;