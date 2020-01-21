import React, { useMemo } from 'react';
import { useLocation } from "react-router-dom";
import { Tabs } from 'antd';
import * as routes from 'routes';
import * as containers from 'containers';

const { TabPane } = Tabs;

const RouteTabs = () => {
    const { pathname } = useLocation();
    const tabPanes = useMemo(
        () => Object.entries(routes).map(([key, route]) => (
            <TabPane
                tab={key}
                key={route}
            >
                {React.createElement(containers[key])}
            </TabPane>
        )),
        []
    );
    return (
        <Tabs
            activeKey={pathname}
            defaultActiveKey={pathname}
            tabBarStyle={{ display: 'none' }}
            destroyInactiveTabPane
        >
            {tabPanes}
        </Tabs>
    );
};

export default RouteTabs;