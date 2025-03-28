import { KeretaType, ScheduleType } from "../types";
import DropSchedule from "./dropSchedule";
import EditSchedule from "./editSchedule";

type props = {
    schedule: ScheduleType;
};

const showTime = (date: string) => {
    const currentDate = new Date(date);
    return currentDate.toLocaleTimeString('id-ID', {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });
};

const Schedule = (myProp: props) => {
    return (
        <div className="flex flex-wrap w-full border rounded-md shadow-md my-2 bg-sky-50">
            <div className="w-full md:w-3/12 p-3 flex flex-col">
                <small className="text-xs font-semibold text-sky-700">Berangkat dari</small>
                <strong>{myProp.schedule.departured_location}</strong>
                <small className="text-xs font-semibold text-sky-700">Waktu keberangkatan</small>
                <strong>{showTime(myProp.schedule.departured_time)}</strong>
            </div>

            <div className="w-full md:w-3/12 p-3 flex flex-col">
                <small className="text-xs font-semibold text-sky-700">Tiba di</small>
                <strong>{myProp.schedule.arrived_location}</strong>
                <small className="text-xs font-semibold text-sky-700">Waktu kedatangan</small>
                <strong>{showTime(myProp.schedule.arrived_time)}</strong>
            </div>

            <div className="w-full md:w-4/12 p-3 flex flex-col">
                <small className="text-xs font-semibold text-sky-700">Unit Kereta</small>
                <strong>{myProp.schedule.train_details.name}</strong>
                <small className="text-xs font-semibold text-sky-700">Harga</small>
                <strong>
                    {myProp.schedule.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'IDR',
                    })}
                </strong>
            </div>

            <div className="w-full p-2 md:w-2/12 flex flex-col">
            <small className="text-sm font-semibold text-sky-700 pb-1">Option</small>
            <div className="flex gap-2 items-center">
                <EditSchedule schedule={myProp.schedule} /> 
                <DropSchedule schedule={myProp.schedule} />
            </div>
            </div>
        </div>
    );
};

export default Schedule;
