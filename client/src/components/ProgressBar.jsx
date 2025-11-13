
import React, { useEffect, useState } from "react";

const ProgressBar = ({ completed, total }) => {
    const [progress, setProgress] = useState(0);
    const percentage = Math.round((completed / total) * 100);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress(percentage);
        }, 200); 
        return () => clearTimeout(timeout);
    }, [percentage]);

    return (
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
            <div
                className="h-full rounded-full bg-linear-to-r from-orange-500 to-teal-400 transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default function TodayProgress() {
    const completed = 3;
    const total = 5;
    const percentage = Math.round((completed / total) * 100);

    return (
        <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 ">Today's Progress</h2>
                    <p className="text-xs text-gray-500">
                        {completed} of {total} words reviewed
                    </p>
                </div>
                <p className="text-orange-500 font-bold text-lg">{percentage}%</p>
            </div>

           
            <ProgressBar completed={completed} total={total} />
        </div>
    );
}
