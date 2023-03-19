import CertificationsData from '../../data/certifications.json';

const Certifications = () => {
    return (
        <div className="bg-white h-full w-4/12 rounded-2xl  border-2">
            <p className="text-xl font-semibold text-[#582270] mt-3 ml-4">Sertifikalar</p>
            <div className="w-full h-0.5 bg-gray-200 mt-3"></div>

            <div className="h-full w-full flex pb-[4.5rem] flex-col justify-center p-4">

                {CertificationsData.slice(0,2).map((certification,index) => (
                    <div key={index} className="h-16 w-full  rounded-xl flex flex-row space-x-3">
                        <div className="w-4/6 h-14 bg-[#582270] rounded-2xl ">
                            <p className="text-white text-md font-medium pl-3 flex items-center w-full h-full">{certification.certification_name}</p>
                        </div>
                        <div className="w-2/6 h-14 bg-[#582270] rounded-2xl ">
                            <p className="text-white text-md text-center justify-center font-medium flex items-center w-full h-full">{certification.certification_date}</p>
                        </div>

                    </div>
                ))}




            </div>

        </div>
    );


}

export default Certifications;