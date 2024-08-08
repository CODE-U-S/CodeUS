import gitLogo from "../../assets/joinus_icon/git-logo.svg";
import githubLogo from "../../assets/joinus_icon/github-logo.svg";
import reactLogo from "../../assets/joinus_icon/react-logo.svg"
import springLogo from "../../assets/joinus_icon/spring-logo.svg"

const JoinUs = (): JSX.Element => {
    return (
        <section
            className="py-8 px-4 text-center bg-black relative"
            style={{
                background: "radial-gradient(ellipse at center, #171717 50%, #000 80%)",
                height: "50vh",
                overflow: "hidden"
            }}
        >
            <h2 className="text-2xl mb-4 text-white">실무의 길로, 함께 나아가는 IT 동아리</h2>
            <p className="text-4xl font-bold mb-20 text-white">
                <span className="text-yellow-400">4</span>기 멤버를 찾습니다
            </p>

            <button className="mt-4">
                지원하기
            </button>

            <div className="absolute bottom-20 left-10 flex gap-1">
                <img src={gitLogo} alt="Git logo" className="h-20"/>
                <img src={githubLogo} alt="GitHub logo" className="h-20"/>
            </div>

            <div className="absolute bottom-20 right-10 flex gap-1">
                <img src={springLogo} alt="GitHub logo" className="h-20"/>
                <img src={reactLogo} alt="Git logo" className="h-20"/>
            </div>

        </section>
    );
};

export default JoinUs;
