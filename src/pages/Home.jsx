import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QuoteSections from "../components/QuoteSections";
import ChiefSection from "../components/ChiefSection";

export default function Home (){
    return(
        <div>
            <HeroSection />
            <ImproveSkills/>
            <QuoteSections />
            <ChiefSection/>
        </div>
    )
}