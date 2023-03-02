import {ReactComponent as ExamNotification} from "../../assets/notification_Exam.svg";

function Notification() {
    return (
        <div className="bg-white border-2 border-[#DFDCDC] w-full h-fit rounded-2xl">

            <div className="pt-3 pb-3 px-4 flex justify-between items-center">
                <h4 className="text-[#4F4F4F] font-medium text-md">Bildirimler</h4>
                <div className="rounded-full bg-[#73CE00] w-7 h-7 flex justify-center items-center text-white font-semibold">4</div>
            </div>

            <div className="w-full h-0.5 bg-[#DFDCDC]"></div>


            <div className=" py-1  w-full flex space-x-6 items-center">
                <div className="pl-4">
                <ExamNotification />
                </div>
            <div className="w-full pt-2 pr-4 pb-1">
                <div className="text-[0.9rem] text-start leading-tight h-14">
                    <p>
                        Son sınavın olan <span className="font-semibold"> “İleri Seviye CSS”</span> <br /> sınavında
                        <span className="font-semibold text-[#73CE00]"> 78%</span> puan aldın.
                        Profiline <br />eklemek ister misin?
                    </p>


                </div>
            </div>
            </div>



        </div>
    )
}

export default Notification;