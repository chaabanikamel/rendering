function SideMenu() {
  const categories = [
    {
      uniqueId: 1,
      title: "programing",
      c: (
        <div>
          <span>😉😎😎</span>
        </div>
      ),
    },
    {
      uniqueId: 2,
      title: "DaraScience",
      c: (
        <div>
        <img
          style={{ width: "100px" }}
          src="https://images.unsplash.com/photo-1689101298752-886c970ff200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      ),
    },
    {
      uniqueId: 3,
      title: "Technology",
      c: (
        <>
        <h1> Click me</h1>
        <span>🎁✨✨</span>
        </>
        
      ),
    }
  ];
  const categoriesList = categories.map((cat) => {
    return <TagButton key={cat.uniqueId} title={cat.title} >
      {cat.c}
      </TagButton>;
  });
  return (
    <div style={{ margin: "25px", border: "solid #1d9bf0 5px" }}>
      {categoriesList}
    </div>
  );
}

export default SideMenu;
