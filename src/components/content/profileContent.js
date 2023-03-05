const profileContent = () => {
    return (
        <div className=" bg-white border-2 border-[#F1EDE7] h-64 w-full rounded-2xl pb-16 pt-8">
            <div className="flex flex-row  space-x-6  h-full items-center px-6 pb-6">
                <div className="bg-[#335708] h-full w-full rounded-2xl flex justify-center items-center text-lg text-center font-semibold text-[#86EE03] ">
                    Profilinde iletişim<br /> numarası eksik!
                </div>
                <div className="bg-[#E8E8E8] h-full w-full rounded-2xl flex justify-center items-center text-lg text-center font-semibold text-[#335708]">
                    Sınav bilgilerini <br />eklemeyi unutma!
                </div>
                <div className="bg-[#335708] h-full w-full rounded-2xl  flex justify-center items-center text-lg text-center font-semibold text-[#86EE03]">
                    Github hesabını<br /> eklemedin!
                </div>
                <div className="bg-[#E8E8E8] h-full w-full rounded-2xl  flex justify-center items-center text-lg text-center font-semibold text-[#335708]">
                    Github hesabını<br /> eklemedin!
                </div>
                <div className="bg-[#335708] h-full w-full rounded-2xl  flex justify-center items-center text-lg text-center font-semibold text-[#86EE03]">
                    Github hesabını<br /> eklemedin!
                </div>

            </div>
            <div className="w-full h-0.5 bg-[#F1EDE7]"></div>
            <p className=" text-[#335708] text-end pr-6 text-2xl font-bold py-3">Profiliniz %45 Tamamlandı</p>
        </div>
    );
}


export default profileContent;
