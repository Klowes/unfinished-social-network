import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { RouteMenu, RouteTabs } from 'layout';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Layout.Header>
                <div className={'logo'}></div>
                <RouteMenu />
            </Layout.Header>
            <Layout.Content>
                <RouteTabs />
            </Layout.Content>
        </Layout>
    </BrowserRouter>
);

export default App;