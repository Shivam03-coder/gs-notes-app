import Header from "@/components/_code-editior/header";
import InputCols from "@/components/_code-editior/input-cols";
import OutputCols from "@/components/_code-editior/output-cols";
import React from "react";

const CodeEditorPage = () => {
  return (
    <main className="page">
      <div className="grid grid-cols-2 place-items-center gap-5 p-2">
        <Header />
        <InputCols />
        <OutputCols />
      </div>
    </main>
  );
};

export default CodeEditorPage;
