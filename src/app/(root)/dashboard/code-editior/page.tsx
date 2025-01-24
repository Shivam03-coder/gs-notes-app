import InputCols from "@/components/_code-editior/input-cols";
import OutputCols from "@/components/_code-editior/output-cols";
import RunButton from "@/components/_code-editior/run-button";
import React from "react";

const CodeEditorPage = () => {
  return (
    <main className="page">
      <div className="grid grid-cols-2 place-items-center gap-5 p-2">
        <div className="col-span-full grid">
          <RunButton />
        </div>
        <InputCols />
        <OutputCols />
      </div>
    </main>
  );
};

export default CodeEditorPage;
