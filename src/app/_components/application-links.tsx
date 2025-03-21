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
    <ul className="flex w-full flex-col gap-4">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            className="font bold bg-Gray-700 hover:bg-Green hover:text-Gray-700 flex min-h-[45px] items-center justify-center rounded-lg font-bold hover:cursor-pointer"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ApplicationLinks;
