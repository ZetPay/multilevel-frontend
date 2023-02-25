import React from "react";

// components
import CardTree from "components/Cards/CardTree";

// layout for page
import Admin from "layouts/Admin.js";

const Tree = () => {
  return (
    <>
      <div className="flex">
        <div className="w-full lg:w-12/12 px-4">
          <p>Bonus P</p>
          <CardTree />
        </div>
      </div>
    </>
  );
}

export default Tree;

Tree.layout = Admin;
