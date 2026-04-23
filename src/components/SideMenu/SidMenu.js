function SideMenu({ content }) {
  return (
    <div className="side-menu">
      <ul>
        {content.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
