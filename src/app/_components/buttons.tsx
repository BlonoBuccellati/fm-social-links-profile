"use client";

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
          onClick={() => (window.location.href = button.url)}
          className="font bold h-[45px] w-full rounded-lg bg-gray-700 text-sm hover:cursor-pointer hover:bg-lime-300 hover:text-gray-700"
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default ApplicationButtons;
