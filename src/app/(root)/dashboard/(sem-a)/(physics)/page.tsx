import RemainingSyllabusCard from "@/components/_sem-a/remaining-syllabus-card";
import SyllabusRadarChart from "@/components/_sem-a/syllabus-chart";
import TaskSubjectChart from "@/components/_sem-a/task-subj-chart";
import TimerTrackerCard from "@/components/_sem-a/time-tracker";
import React from "react";

const PhysicsPage = () => {
  return (
    <div className="page m-2 min-h-screen rounded-xl bg-secondary">
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* <PageHaeder /> */}
        <div className="grid gap-4 md:grid-cols-4">
          <TaskSubjectChart />
          <SyllabusRadarChart />
          <RemainingSyllabusCard />
          <TimerTrackerCard />
        </div>
      </div>
    </div>
  );
};


export default PhysicsPage