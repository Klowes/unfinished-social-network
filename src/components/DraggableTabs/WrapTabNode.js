import { DragSource, DropTarget } from 'react-dnd';

const cardTarget = {
    drop(props, monitor) {
        const dragKey = monitor.getItem().index;
        const hoverKey = props.index;
        if (dragKey === hoverKey)
            return;
        props.moveTabNode(dragKey, hoverKey);
        monitor.getItem().index = hoverKey;
    },
};

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        };
    }
};

const TabNode = ({ connectDragSource, connectDropTarget, children }) => (
    connectDragSource(connectDropTarget(children))
);


const WrapTabNode = DropTarget('DND_NODE', cardTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
}))(
    DragSource('DND_NODE', cardSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }))(TabNode)
);

export default WrapTabNode;