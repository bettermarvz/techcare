"use client";

import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";
import ArrowDown from "@/public/icon/ArrowDown.svg";
import ArrowUp from "@/public/icon/ArrowUp.svg";
import { HealthRecordList } from "@/app/types";
// import ExpandMore from "@/public/icons/expand-more.svg";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Dynamically import Line from react-chartjs-2
const LineChart = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Line),
  { ssr: false }
);


const BloodPressureChart = ({record}:{record:HealthRecordList})=>{

    const monthOrder: Record<string, number> = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const sorted = [...record].sort((a, b) => {
  if (a.year !== b.year) return a.year - b.year;
  return monthOrder[a.month] - monthOrder[b.month];
});
console.log(record, 'record')

const last6 = sorted.slice(-6);

const systolicData = last6.map(entry => entry.blood_pressure.systolic.value);
const diastolic = last6.map(entry => entry.blood_pressure.diastolic.value);
const labels = last6.map(entry => `${entry.month.slice(0, 3)}, ${entry.year}`);

const latestSystolic = systolicData.at(-1);
const latestDiastolic = diastolic.at(-1)

console.log(systolicData, 'systolicData')

  return (
    <>
      <div className="flex items-start mt-10 p-4 bg-[#F4F0FE] rounded-xl">
        <div className="w-[418px]">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-[rgb(7,38,53)] text-[18px] font-bold">
              Blood Pressure
            </h2>

            <button className="flex items-center justify-between w-[119px]">
              <span className="text-[14px] text-[#072635] font-light">
                Last 6 months
              </span>

              <Image src='/icon/expand_more_FILL0_wght300_GRAD0_opsz24.svg' alt="expand" height={6} width={11}/> 
            </button>
          </div>

          <div className="mt-[20px] w-full">
            <LineChart
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "Systolic",
                    data: systolicData,
                    backgroundColor: "#E66FD2",
                    borderColor: "#C26EB4",
                    borderWidth: 2,
                  },
                  {
                    label: "Diastolic",
                    data: diastolic,
                    backgroundColor: "#8C6FE6",
                    borderColor: "#7E6CAB",
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                  x: {
                    beginAtZero: true,
                  },
                  y: {
                    beginAtZero: false,
                    min: 60,
                  },
                },
                plugins:{
                    legend:{
                        display: false
                    }
                },
                elements:{
                    line:{
                        tension: 0.5
                    },
                    point:{
                        radius: 7,
                        borderColor: '#ffffff',
                        borderWidth: 1
                    }
                }
              }}
            />
          </div>
        </div>

        <div className="w-[208px] flex flex-col items-start justify-center ml-[39.05px]">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex items-center w-full">
              <span className="w-[14px] h-[14px] rounded-full bg-[#E66FD2] border border-[#FFFFFF]"></span>
              <span className="text-[#072635] ml-[4px] text-sm/[19px] font-bold">
                Systolic
              </span>
            </div>

            <h2 className="text-[#072635] text-[22px] font-bold mt-[8px]">
              {latestSystolic}
            </h2>

            <div className="flex items-center w-full mt-[8px]">
              <Image
                className="w-[10px] h-[5px]"
                width={10}
                height={5}
                src={ArrowUp}
                alt=""
              />
              <span className="text-[#072635] text-[14px] ml-[8px] font-light">
                Higher than Average
              </span>
            </div>

            <hr className="w-full h-[1px] mt-[16px] border-[#CBC8D4]" />

            <div className="flex items-center w-full mt-[19px]">
              <span className="w-[14px] h-[14px] rounded-full bg-[#8C6FE6] border border-[#FFFFFF]"></span>
              <span className="text-[#072635] ml-[4px] text-sm/[19px] font-bold">
                Diastolic
              </span>
            </div>
            <h2 className="text-[#072635] text-[22px] font-bold mt-[8px]">
             {latestDiastolic}
            </h2>

            <div className="flex items-center w-full mt-[8px]">
              <Image
                className="w-[10px] h-[5px]"
                width={10}
                height={5}
                src={ArrowDown}
                alt=""
              />
              <span className="text-[#072635] text-[14px] ml-[8px] font-light">
                Lower than Average
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BloodPressureChart;