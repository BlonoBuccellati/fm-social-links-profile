const links = [
  { name: 'GitHub', url: '#' },
  { name: 'Frontend Mentor', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'Instagram', url: '#' },
];

const ApplicationButtons = () => {
  return (
    <div className='flex flex-col gap-4'>
      {links.map((button, index) => (
        <button
          key={index}
          className='bg-gray-700 w-[279px] md:w-76 h-[45px] rounded-lg hover:cursor-pointer hover:bg-lime-300 hover:text-gray-700'
        >
          <a href={button.url} className='font-bold text-sm'>
            {button.name}
          </a>
        </button>
      ))}
    </div>
  );
};

export default ApplicationButtons;
