import React from 'react';
import { Row, Col } from 'antd';
import { ContainerRoot, CreatePostCard } from 'components';

const Home = () => (
    <ContainerRoot>
        <Row>
            <Col span={7}></Col>
            <Col span={10}>
                <div className={'post-width margin-auto'}>
                    <CreatePostCard />
                </div>
            </Col>
            <Col span={7}></Col>
        </Row>
    </ContainerRoot>
);

export default Home;