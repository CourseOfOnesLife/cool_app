import ProjectsComponent from "./profile/projects";
import ExamsComponent from "./profile/exams";
import OrganizationsComponent from "./profile/organizations";
import ProfilePicComponent from "./profile/profilePic";
import CertificationsComponent from "./profile/certifications";
import ExperienceComponent from "./profile/experiences";
import LanguagesComponent from "./profile/languages";
import BadgesComponent from "./profile/badges";
import PersonalityComponent from "./profile/personality";
import SkillsComponent from "./profile/skills"


const Profile = () => {
    return (
        <div className="overflow-hidden  bg-[#F8F3EB] 
         z-10 top-0 grid grid-rows-16 grid-cols-16 h-full pb-5 w-full">

            <div className="col-start-1 col-end-17 row-start-1 row-end-17 h-full flex flex-col">
                {/* For X- Large Screens like Macbook fullscreen */}
                <div className="max-xl:hidden ">
                    <div className="px-8 py-2 flex flex-row gap-x-5 ">
                        <ProfilePicComponent />
                        <ExamsComponent />
                        <OrganizationsComponent />
                    </div>
                    <div className="px-8 py-2 flex flex-row gap-x-5 ">
                        <CertificationsComponent />
                        <ExperienceComponent />
                        <LanguagesComponent />
                    </div>

                    <div className="px-8 pt-2  flex flex-row gap-x-5 ">
                        <div className="flex flex-col space-y-3   w-4/12">
                            <BadgesComponent />
                            <PersonalityComponent />
                        </div>
                        <ProjectsComponent />
                        <SkillsComponent />
                    </div>
                </div>


                {/* For  Medium Screens like 4:3 Desktop screens and Most Wide Tablets*/}
                <div className="max-xl:block hidden ">
                    <div className="px-8 py-2 flex flex-row gap-x-5 ">
                        <ProfilePicComponent />
                        <ExamsComponent />

                    </div>
                    <div className="px-8 py-2 flex flex-row gap-x-5">
                        <CertificationsComponent />
                        <OrganizationsComponent />


                    </div>
                    <div className="px-8 pt-2  flex flex-row gap-x-5 ">
                        <div className="flex flex-col space-y-3  w-6/12">
                            <BadgesComponent />
                            <PersonalityComponent />
                        </div>
                        <ProjectsComponent />
                    </div>
                    <div className="px-8 py-2 flex flex-row gap-x-5 ">


                        <SkillsComponent />
                        <LanguagesComponent />
                    </div>


                    <div className="px-8 pt-2  flex flex-row gap-x-5">
                        <ExperienceComponent />

                    </div>
                </div>

            </div>


        </div>
    );
}

export default Profile;