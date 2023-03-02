function Poll() {
    return (
        <div className="w-full bg-white border-2 border-[#DFDCDC] h-81 rounded-2xl flex flex-col ">
            <div className="text-[#582270] font-semibold pt-3 pb-3 pl-3 text-md leading-tight  ">
                En çok kullandığınız <br />
                Front-end framework’ü hangisi?
            </div>
            
            <div className="w-full h-0.5 bg-[#DFDCDC] " />
            <div className="p-4 space-y-3 flex flex-col h-full w-full">
                <div className="bg-[#D03542] w-full h-10 rounded-full flex items-center pl-1.5">
                    <div className="rounded-full py-0.5 px-2 bg-[#B62E3A] flex items-center justify-center font-bold text-white">A</div>
                    <div className="font-bold text-white flex items-center relative justify-center w-full pr-8">
                        <p>Angular</p>
                    </div>


                </div>
                <div className="bg-[#FFAF00] w-full h-10 rounded-full flex items-center pl-1.5">
                    <div className="rounded-full py-0.5 px-2  bg-[#DE9902] flex items-center justify-center font-bold text-white">B</div>
                    <div className="font-bold text-white flex items-center relative justify-center w-full pr-8">
                        <p>Diğer</p>
                    </div>

                </div>
                <div className="bg-[#2F69C7] w-full h-10 rounded-full flex items-center pl-1.5">
                    <div className="rounded-full py-0.5 px-2  bg-[#295BAE] flex items-center justify-center font-bold text-white">C</div>
                    <div className="font-bold text-white flex items-center relative justify-center w-full pr-8">
                        <p>React</p>
                    </div>

                </div>
                <div className="bg-[#468629] w-full h-10 rounded-full flex items-center pl-1.5">
                    <div className="rounded-full py-0.5 px-2 bg-[#3B7122] flex items-center justify-center font-bold text-white">D</div>
                    <div className="font-bold text-white flex items-center relative justify-center w-full pr-8">
                        <p>Vue.js</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Poll;