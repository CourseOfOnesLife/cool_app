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
        <div className="max-2xl:overflow-hidden w-screen bg-[#F8F3EB] h-screen  px-10 space-y-8">
            {/* Top Section */}
            <div className="rounded-2xl w-full h-1/4  flex space-x-5 flex-row ">
                <ProfilePicComponent />
                <ExamsComponent />
                <OrganizationsComponent />
            </div>
            {/* Middle Section */}
            <div className="rounded-2xl w-full h-1/4 flex flex-row space-x-5">
                <CertificationsComponent />
                <ExperienceComponent />
                <LanguagesComponent />


            </div>
            {/* Bottom Section */}
            <div className="rounded-2xl w-full h-1/4  flex flex-row space-x-5">
                {/* Double Section personality and badges */}
                <div className="h-full w-4/12 rounded-2xl space-y-3 ">
                    <BadgesComponent />
                    <PersonalityComponent />
                </div>
                <ProjectsComponent />

                <SkillsComponent />

               

            </div>


        </div>
    );
}

export default Profile;