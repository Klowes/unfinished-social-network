import React from 'react';
import { Layout } from 'antd';
import 'styles/layout.less';

const ContainerRoot = ({ children, sider }) => sider
    ? (
        <Layout hasSider>
            {sider}
            <Layout.Content className={'padding-md'}>
                {children}
            </Layout.Content>
        </Layout>
    )
    : (
        <Layout.Content className={'padding-md'}>
            {children}
        </Layout.Content>
    )

ContainerRoot.defaultProps = {
    sider: null,
};

export default ContainerRoot;