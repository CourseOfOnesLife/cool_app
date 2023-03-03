import { ReactComponent as ExamNotification } from "../../assets/ExamNotification.svg";
import { ReactComponent as EyeNotification } from "../../assets/EyeNotification.svg";

const Notifications = [
    {
        syntax: 'ileri-seviye-css-1',
        id: 1,
        icon: <ExamNotification />,
        content: 'exam',
    },
    {
        syntax: 'profile-view-count',
        id: 2,
        icon: <EyeNotification />,
        content: 'view'
    }
]



const ExamData = [
    {
        id: 1,
        syntax: 'ileri-seviye-css-1',
        title: 'İleri Seviye CSS',
        date: '12.12.2021',
        score: '78%',
        status: 'success',
    },
    {
        id: 2,
        syntax: 'javascript-1',
        title: 'Javascript',
        date: '12.12.2021',
        score: '92',
        status: 'success',
    }
]

const ProfileViewCount = [
    {
        syntax: 'profile-view-count',
        count: 50,
    }
]





const Finder = (table, syntax) => {
    return table.find((table_2) => table_2.syntax === syntax);
}








function Notification() {
    return (
        <div className="bg-white border-2 border-[#DFDCDC] w-full h-fit rounded-2xl">

            <div className="pt-3 pb-3 px-4 flex justify-between items-center">
                <h4 className="text-[#4F4F4F] font-medium text-md">Bildirimler</h4>
                <div className="rounded-full bg-[#73CE00] w-7 h-7 flex justify-center items-center text-white font-semibold">{Notifications.length}</div>
            </div>
            {/* Bu map fonksiyonu Bildirimleri teker teker 
            döndürürken bildirim tipine göre filtreleme 
            yapıp bu filtrelemeye göre çeşitli tablolardan 
            veri çekiyor ve stillendirmesini yapıyor. */}
            {Notifications.map((notification) => (
                <div key={notification.id}>
                    <div className="w-full h-0.5 bg-[#DFDCDC]" />
                    <div className=" py-1  w-full flex space-x-6 items-center">
                        <div className="pl-4">
                            {notification.icon}
                        </div>
                        <div className="w-full pt-2 pr-4 pb-1">
                            <div className="text-[0.9rem] text-start leading-tight h-14">
                                {/* Burada bildirimin content tipine göre filtreleme yaptıktan sonra gereken yerlerden veri çekme işlemi gerçekleşiyor */}


                                {notification.content === 'exam' && (
                                    <p>Son sınavın olan <span className="font-bold">{Finder(ExamData, notification.syntax).title}</span> <br /> sınavında
                                        <span className="font-bold text-[#73CE00]"> {Finder(ExamData, notification.syntax).score}
                                        </span> puan aldın. Profiline
                                        <br />eklemek ister misin?
                                    </p>


                                )}
                                {notification.content === 'view' && (
                                    <p>Profiline şu ana kadar <span className="font-bold text-[#582270]">{Finder(ProfileViewCount, notification.syntax).count} </span> kişi baktı. <br />
                                        Profilini güncelle ve <span className="font-bold">daha fazla kişiye</span> ulaş!</p>
                                )}


                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Notification;


