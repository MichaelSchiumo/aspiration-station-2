import React from "react";
import "./Container.css";

const Container = () => {
  return (
    <div>
      <div class="grid grid-cols-12 gap-3 mt-10 px-20">
        <div class="col-span-4 text-center">1</div>
        <div class="col-span-4 text-center">1</div>
        <div class="col-span-4 text-center">1</div>
      </div>
    </div>
  );
};

export default Container;
