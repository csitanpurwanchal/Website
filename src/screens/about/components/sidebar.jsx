// Sidebar component
const Sidebar = ({ children, headings, handleScroll, highlightedIndex }) => {
  return (
    <div className="entireSidebarSection">
      <div className="sidebar">
        <ul>
          {headings.map((heading, index) => (
            <li
              key={index}
              onClick={() => handleScroll(index)}
              className={highlightedIndex === index ? "highlighted" : ""}
            >
              {heading}
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
