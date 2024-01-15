const Sidebar = ({ headings, handleScroll }) => {
  return (
    <div className="sidebar">
      <ul>
        {headings.map((heading, index) => (
          <li key={index} onClick={() => handleScroll(index)}>
            {heading}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
