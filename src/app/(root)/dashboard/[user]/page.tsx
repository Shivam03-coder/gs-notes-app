import React from "react";

const User = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-green-700 aspect-video rounded-xl" />
        <div className="bg-red-700 aspect-video rounded-xl" />
        <div className="bg-yellow-700 aspect-video rounded-xl" />
      </div>
      <div className="bg-blue-700 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
};

export default User;
