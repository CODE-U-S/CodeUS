import codeusLogo from '/codeus.svg';
import githubLogo from '../assets/logo_github.svg';
import instagramLogo from '../assets/logo_instagram.svg';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-neutral-900 text-white p-4 text-center w-full py-10 px-10 text-sm">
      <div className="flex items-center justify-between">
        {/* 왼쪽 로고 */}
        <img src={codeusLogo} alt="CodeUS Logo" className="h-8 w-auto" />

        {/* 중앙 텍스트 */}
        <div className="text-left flex-grow ml-20">
          <p>미림마이스터고등학교 전공자율동아리</p>
          <p className="mb-3">Email: codeus24@gmail.com</p>
          <p className="text-[#B5B5B5]">Copyright &copy; 2024 CODEUS Inc. All Rights Reserved</p>
        </div>


        {/* 오른쪽 연도 및 정보 */}
        <div className="text-right">
          <p className="text-xs">2024 Ver. Created By 1기</p>
          <hr className="my-3 w-60 border-white" />
          <div className="flex justify-end space-x-4 mt-2">
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="h-6 w-auto" />
            </a>
            <a href="https://github.com/CODE-U-S" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="h-5 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
