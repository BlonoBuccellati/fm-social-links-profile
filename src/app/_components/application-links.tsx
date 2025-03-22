"use client";

const links = [
  { name: "GitHub", url: "#" },
  { name: "Frontend Mentor", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
];

const ApplicationLinks = () => {
  return (
    <ul className="flex flex-col gap-4">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            className="font bold bg-Gray-700 hover:bg-Green hover:text-Gray-700 flex min-h-[45px] min-w-[279px] items-center justify-center rounded-lg font-bold transition-colors duration-500 hover:cursor-pointer md:min-w-76"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ApplicationLinks;
