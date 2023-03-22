import organizations from '../../data/organizations.json';

const OrganizationsComponent = () => {
    return (
        <div className="bg-white  h-full max-xl:w-6/12 w-3/12 rounded-2xl  border-2">
            <p className="text-xl font-semibold text-[#582270] mt-3 ml-4">Organizasyonlar</p>
            <div className="w-full h-0.5 bg-gray-200 mt-3"></div>
            <div className="p-4 w-full h-full flex-row pb-14 space-y-3">
                {organizations.slice(0, 3).map((organization) => (
                    <a key={organization.organization_id} href={organization.organization_url} className="w-full h-10 bg-[#582270] rounded-2xl flex flex-row ">
                        <p className="text-white font-semibold pl-5 flex items-center w-full h-full">{organization.organization_name} </p>
                        <div className="w-0.5 h-full bg-[#B748E9] mr-4" />
                        <div className="flex  h-full justify-end mr-4 items-center text-white font-semibold">{organization.organization_year} </div>
                    </a>
                ))}

            </div>
        </div>
    );
}

export default OrganizationsComponent;