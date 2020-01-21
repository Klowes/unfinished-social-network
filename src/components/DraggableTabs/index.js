import React, { useState, useCallback } from 'react';
import { Tabs } from 'antd';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import WrapTabNode from './WrapTabNode';

const DraggableTags = props => {
    const [order, setOrder] = useState([]);
    const moveTabNode = useCallback(
        (dragKey, hoverKey) => {
            const newOrder = order.slice();
            const { children } = props;

            React.Children.forEach(children, c => {
                if (newOrder.indexOf(c.key) === -1) {
                    newOrder.push(c.key);
                }
            });

            const dragIndex = newOrder.indexOf(dragKey);
            const hoverIndex = newOrder.indexOf(hoverKey);

            newOrder.splice(dragIndex, 1);
            newOrder.splice(hoverIndex, 0, dragKey);

            setOrder(newOrder);
        },
        [order, props]
    );
    const renderTabBar = useCallback(
        (props, DefaultTabBar) => (
            <DefaultTabBar {...props}>
                {node => (
                    <WrapTabNode
                        {...{ moveTabNode }}
                        key={node.key}
                        index={node.key}
                    >
                        {node}
                    </WrapTabNode>
                )}
            </DefaultTabBar>
        ),
        [moveTabNode]
    );
    const tabs = [];
    React.Children.forEach(props.children, c => {
        tabs.push(c);
    });

    const orderTabs = tabs.slice().sort((a, b) => {
        const orderA = order.indexOf(a.key);
        const orderB = order.indexOf(b.key);

        if (orderA !== -1 && orderB !== -1) {
            return orderA - orderB;
        }
        if (orderA !== -1) {
            return -1;
        }
        if (orderB !== -1) {
            return 1;
        }

        const ia = tabs.indexOf(a);
        const ib = tabs.indexOf(b);

        return ia - ib;
    });
    return (
        <DndProvider backend={HTML5Backend}>
            <Tabs
                {...props}
                {...{ renderTabBar }}
            >
                {orderTabs}
            </Tabs>
        </DndProvider>
    );
};

export default DraggableTags;