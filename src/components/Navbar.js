import { ReactComponent as Logo } from "../assets/logo.svg";


const Navbar = () => {
    return (
        <nav className="bg-[#F8F3EB]  col-start-1 col-end-13 row-start-1 row-end-3 flex flex-row justify-between items-center px-12">
            <div className="w-12">
                <Logo />
            </div>
            <div className="flex flex-row space-x-4">
                    <div>
                    <input type="radio" name="menu" id="1" className="peer hidden" defaultChecked/>
                    <label htmlFor="1" className="transition-all my-1 px-14 py-2 cursor-pointer flex items-center rounded-full peer-checked:font-semibold  peer-checked:text-[#F8F3EB] text-[#582270] font-medium text-sm border-[#582270] border-2 peer-checked:bg-[#582270]">Ana Sayfa</label>
                    </div>

                    <div>
                    <input type="radio" name="menu" id="2" className="peer hidden" />
                    <label htmlFor="2" className="transition-all my-1 px-14 py-2 cursor-pointer flex items-center rounded-full peer-checked:font-semibold peer-checked:text-[#F8F3EB] text-[#582270] font-medium text-sm border-[#582270] border-2  peer-checked:bg-[#582270]">Sınavlar</label>
                    </div>

                    <div>
                    <input type="radio" name="menu" id="3" className="peer hidden" />
                    <label  htmlFor="3" className="transition-all my-1 px-14 py-2 cursor-pointer flex items-center rounded-full peer-checked:font-semibold peer-checked:text-[#F8F3EB] text-[#582270] font-medium text-sm border-[#582270] border-2  peer-checked:bg-[#582270]">Profil</label>
                    </div>


            </div>
        </nav>
    )
}

export default Navbar;
