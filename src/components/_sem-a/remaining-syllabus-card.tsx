"use client";

import { BookOpen } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const RemainingSyllabusCard = () => (
  <Card className="max-w-sm bg-white">
    <CardHeader className="flex justify-between items-center">
      <CardTitle className="text-primary">Remaining Syllabus</CardTitle>
      <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
        <BookOpen className="text-white w-4 h-4" />
      </button>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center justify-center py-6">
        <p className="text-4xl font-bold text-primary">42%</p>
        <p className="text-sm text-gray-600 mt-2">Total syllabus remaining</p>
      </div>
    </CardContent>
    <CardFooter>
      <div className="flex justify-between w-full gap-2">
        <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg w-full">
          <p className="text-sm text-gray-600">Mathematics</p>
          <p className="text-lg font-bold text-primary">35%</p>
        </div>
        <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg w-full">
          <p className="text-sm text-gray-600">Physics</p>
          <p className="text-lg font-bold text-primary">50%</p>
        </div>
        <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg w-full">
          <p className="text-sm text-gray-600">Chemistry</p>
          <p className="text-lg font-bold text-primary">45%</p>
        </div>
      </div>
    </CardFooter>
  </Card>
);

export default RemainingSyllabusCard;
