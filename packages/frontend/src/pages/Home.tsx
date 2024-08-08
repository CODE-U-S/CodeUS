import JoinUs from '../components/codeus/JoinUs.tsx';
import MemberList from '../components/codeus/MemberList';
import AboutUs from "../components/codeus/AboutUs.tsx";
import CoreValues from '../components/codeus/CoreValues';
import MembarQuotes from '../components/codeus/MemberQuotes';
import ProjectResults from '../components/codeus/ProjectResults';

const Home = (): JSX.Element => {
  return (
    <div>
      <JoinUs /> {/*지원하기*/}
      <CoreValues/> {/*핵심가치*/}
      <MemberList /> {/*동아리 부원 소개*/}
      <AboutUs /> {/*동아리 소개*/}
      <ProjectResults /> {/*프로젝트 결과물*/}
      <MembarQuotes /> {/*멤버들의 한마디*/}
    </div>
  );
};

export default Home;
