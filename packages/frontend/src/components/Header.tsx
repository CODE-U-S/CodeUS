import arrowIcon from '../assets/arrow.svg'; // 이미지 경로를 import로 해결

const Header = (): JSX.Element => {
    return (
        <header className="bg-black text-white p-4 px-5 flex justify-between items-center w-full">
            <div className="flex items-center">
                <img src="/logo.svg" alt="CodeUS Logo" className="h-10 w-10 mr-3" />
                <h1 className="text-xl font-bold">CodeUS</h1>
            </div>
            <nav>
                <ul className="flex space-x-8">
                    <li><a href="#Introduce" className="hover:underline">Introduce</a></li>
                    <li><a href="#Project" className="hover:underline">Project</a></li>
                    <li><a href="#Support" className="hover:underline">Support</a></li>
                    <li className="flex items-center">
                        <img src={arrowIcon} alt="Arrow Icon" className="mr-2 h-3 w-4" />
                        <a href="#Blog" className="flex items-center hover:underline text-white">
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;