import RemainingSyllabusCard from "@/app/_components/sem-a/remaining-syllabus-card";
import SyllabusRadarChart from "@/app/_components/sem-a/syllabus-chart";
import TaskSubjectChart from "@/app/_components/sem-a/task-subj-chart";
import TimerTrackerCard from "@/app/_components/sem-a/time-tracker";
import React from "react";

const SemA = () => {
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

export default SemA;
