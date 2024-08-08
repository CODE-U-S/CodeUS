// 동아리 소개
const MemberList = (): JSX.Element => {
    const members = [
        { name: 'John Doe', role: 'President' },
        { name: 'Jane Smith', role: 'Vice President' },
    ];

    return (
        <section
            className="py-8 px-4 text-center bg-black"
            style={{ height: '50vh' }}
        >
            <h2 className="text-3xl font-bold mb-4 text-white">핵심가치</h2>
            <div className="flex flex-wrap justify-center items-center h-full">
                {members.map((member, index) => (
                    <div key={index} className="m-4 p-4 bg-blue-950 shadow-md rounded">
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        <p className="text-white">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MemberList;
