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
          className="font bold bg-Gray-700 hover:bg-Green hover:text-Gray-700 h-[45px] w-full rounded-lg text-sm hover:cursor-pointer"
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default ApplicationButtons;
