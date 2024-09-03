// 배너
import { useState, useEffect, useRef } from "react";
import gitLogo from "../../assets/joinus_icon/git-logo.svg";
import githubLogo from "../../assets/joinus_icon/github-logo.svg";
import reactLogo from "../../assets/joinus_icon/react-logo.svg";
import springLogo from "../../assets/joinus_icon/spring-logo.svg";

const JoinUs = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  // Ref 생성
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport를 기준으로 함
        threshold: 0.1 // 10% 이상 보일 때 실행
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const iconStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
  };

  return (
    <section
      ref={sectionRef}
      className="py-8 px-4 text-center bg-black relative"
      style={{
        background: "radial-gradient(ellipse at center, #171717 50%, #000 80%)",
        height: "50vh",
        overflow: "hidden"
      }}
    >
      <div className="relative" style={{ top: "10vh" }}>
        <h2 className="text-2xl mb-4 text-white">실무의 길로, 함께 나아가는 IT 동아리</h2>
        <p className="text-5xl font-extrabold mb-20 text-white">
          <span className="text-yellow-400">4</span>기 멤버를 찾습니다
        </p>
        <button className="mt-4">지원하기</button>
      </div>

      <div className="absolute bottom-20 left-10 flex gap-1" style={iconStyle}>
        <img src={gitLogo} alt="Git logo" className="h-32" />
        <img src={githubLogo} alt="GitHub logo" className="h-32" />
      </div>

      <div className="absolute bottom-20 right-10 flex gap-1" style={iconStyle}>
        <img src={springLogo} alt="Spring logo" className="h-32" />
        <img src={reactLogo} alt="React logo" className="h-32" />
      </div>
    </section>
  );
};

export default JoinUs;
