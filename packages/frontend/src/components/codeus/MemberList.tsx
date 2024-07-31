const MemberList = (): JSX.Element => {
  const members = [
    { name: 'John Doe', role: 'President' },
    { name: 'Jane Smith', role: 'Vice President' },
  ];

  return (
    <section className="py-8 px-4 text-center bg-purple-400">
      <h2 className="text-3xl font-bold mb-4">Our Members</h2>
      <div className="flex flex-wrap justify-center">
        {members.map((member, index) => (
          <div key={index} className="m-4 p-4 bg-blue-950 shadow-md rounded">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberList;
