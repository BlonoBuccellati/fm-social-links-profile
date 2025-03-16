const links = [
  { name: "GitHub", url: "#" },
  { name: "Frontend Mentor", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
];

const ApplicationButtons = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((button, index) => (
        <button
          key={index}
          className="h-[45px] w-full rounded-lg bg-gray-700 hover:cursor-pointer hover:bg-lime-300 hover:text-gray-700"
        >
          <a href={button.url} className="text-sm font-bold">
            {button.name}
          </a>
        </button>
      ))}
    </div>
  );
};

export default ApplicationButtons;
