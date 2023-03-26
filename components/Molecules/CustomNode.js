import { memo } from 'react';

const sourceHandleStyleA = { left: 50 };
const sourceHandleStyleB = {
  right: 10,
  left: 'auto',
};

const CustomNode = ({ data, xPos, yPos }) => {
  return (
    <></>
    // <div style={{
    //   border: "1px solid #555",
    //   padding: "10px",
    //   width: "200px",
    //   borderRadius: "5px"
    // }}>
    //   <Handle type="target" position={Position.Top} />
    //   <div>
    //     <div>
    //       Label: <strong>{data.label}</strong>
    //     </div>
    //     <div>
    //       Position:{' '}
    //       <strong>
    //         {xPos.toFixed(2)},{yPos.toFixed(2)}
    //       </strong>
    //     </div>
    //   </div>

    //   <Handle
    //     type="source"
    //     position={Position.Bottom}
    //     id="a"
    //     style={sourceHandleStyleA}
    //   />
    //   <Handle
    //     type="source"
    //     position={Position.Bottom}
    //     id="b"
    //     style={sourceHandleStyleB}
    //   />
    // </div>
  );
};

export default memo(CustomNode);
