import React from "react";

// components
import CardTree from "components/Cards/CardTree";

// layout for page
import Admin from "layouts/Admin.js";
import CardContainer from "components/Cards/CardContainer";

const Tree = () => {
  const orgChart = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="flex">
        <div className="w-full lg:w-12/12 px-4">
          <CardContainer>
           
          </CardContainer>
        </div>
      </div>
    </>
  );
}

export default Tree;

Tree.layout = Admin;
