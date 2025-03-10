import { Purchase, ScheduleType } from "@/app/karyawan/types";
import { showTime } from "../../jadwal/Schedule";
import { format } from "date-fns";
import { id } from "date-fns/locale" 

interface History {
    id: number;
    purchase_date: string;
    customer_id: number;
    schedule_id: number;
    app_user_token: string;
    createdAt: string;
    updatedAt: string;
    purchases_details: Purchase[];
    schedule_details: ScheduleType;
}

interface Props {
    item: History;
}

interface InfoSectionProps {
    title: string;
    content: string;
    subContent?: string;
}

const formatDate = (dateString: string): string => {
    try {
        const date = new Date(dateString);
        return format(date, "dd MMMM yyyy, HH:mm", {locale: id})
    } catch (error) {
        console.error("Error formatting date:", error);
        return "Invalid Date";
    }
}

const InfoSection = ({ title, content, subContent }: InfoSectionProps) => (
    <div className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all duration-200">
        <div className="font-bold text-sky-600 text-lg mb-2">{title}</div>
        <div className="font-semibold text-gray-800 mb-1">{content}</div>
        {subContent && (
            <div className="font-medium text-gray-500 text-sm">{subContent}</div>
        )}
    </div>
);

const HistoryCard = ({ item }: Props) => {
    return (
        <div className="bg-gradient-to-b from-white to-sky-50/30 rounded-xl shadow-lg border border-gray-200 p-6 w-full transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <InfoSection
                    title="Tgl Order"
                    content={formatDate(item.purchase_date)}
                />
                <InfoSection
                    title="Stasiun Awal"
                    content={item.schedule_details.departured_location}
                    subContent={formatDate(item.schedule_details.departured_time)}
                />
                <InfoSection
                    title="Stasiun Akhir"
                    content={item.schedule_details.arrived_location}
                    subContent={formatDate(item.schedule_details.arrived_time)}
                />
                <InfoSection
                    title="Nama Kereta"
                    content={item.schedule_details.train_details?.name || "-"}
                />
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold text-sky-600">List Penumpang</h1>
                    <div className="h-px flex-1 bg-gradient-to-r from-sky-200 to-transparent"></div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-sky-50 to-blue-50">
                            <tr>
                                <th className="text-sky-700 text-sm font-bold py-4 px-6 text-left">Nama</th>
                                <th className="text-sky-700 text-sm font-bold py-4 px-6 text-left">NIK</th>
                                <th className="text-sky-700 text-sm font-bold py-4 px-6 text-left">Nomor</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {item.purchases_details.map((passenger, index) => (
                                <tr key={index} className="hover:bg-sky-50/30 transition-colors duration-150">
                                    <td className="py-4 px-6 text-sm text-gray-800">{passenger.passanger_name}</td>
                                    <td className="py-4 px-6 text-sm text-gray-800">{passenger.passanger_id}</td>
                                    <td className="py-4 px-6 text-sm text-gray-800">{passenger.seat_number}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HistoryCard;
