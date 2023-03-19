import CustomNode from 'components/Molecules/CustomNode';
import Member from 'layouts/Member';
import React, { useCallback } from 'react'
import Tree from 'react-d3-tree';

const data = [
  {
  name : "Angga",
  children : [
    {
      name: "Ari",
      children: [
        {
          name : "Dandi",
          children: [
            {
              name : "Dani",
            },
            {
              name : "Ilham",
            }
          ]
        },
        {
          name : "Yanto",
        },
      ]
    },
    {
      name: "Yudi",
      children: [
        {
          name : "Iman",
        },
        {
          name : "Ferdi",
        }
      ]
    }
  ]
  }
]

const svgSquare = {
  shape: "rect",
  shapeProps: {
    width: 180,
    height: 40,
    x: 0,
    y: -20,
    color: "#ffffff"
  }
};

const test = {
  shape: "rect",
  shapeProps: {
    width: 0,
    height: 0,
    x: -20,
    y: 20,
    stroke: "#2F80ED"
  }
};

const nodeStyle = (
  <svg viewbox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
    <rect
      width="80"
      height="40"
      x="10"
      y="10"
      style="fill: skyblue; stroke: cadetblue; stroke-width: 2;"
    />
  </svg>
);

const treeStyle = {
  nodes: {
    node: {
      circle: <nodeStyle />,
      name: <nodeStyle />,
      attributes: <nodeStyle />
    }
  }
};

export default function Trees() {
    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Diagram Tree</h6>
                    {/* <button
                      className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:hidden"
                      type="button"
                    >
                      Settings
                    </button> */}
                  </div>
                </div>
                <div style={{height: 500}} className="flex px-4 lg:px-10 py-10 pt-0 bg-white h-100 border border-red-200">
                <Tree
                  data={data}
                  // nodeSvgShape={svgSquare}
                  nodeSvgShape={test}
                  pathFunc="step"
                  separation={{ siblings: 2, nonSiblings: 2 }}
                  orientation="vertical"
                  translate={{ x: 900, y: 100 }}
                  allowForeignObjects={true}
                  nodeLabelComponent={{
                    render: <CustomNode className="myLabelComponentInSvg" />,
                    foreignObjectWrapper: {
                      width: 220,
                      height: 200,
                      y: -50,
                      x: -100
                    }
                  }}
                  initialDepth={0.02}
                />
                </div>
              </div>
            </div>
        </div>
    )
}

Trees.layout = Member;
