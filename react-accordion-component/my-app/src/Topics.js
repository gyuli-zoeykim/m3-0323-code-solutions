export default function Topics ( {panel} ) {
  const sectionList = panel.map((loadPanel, index) =>
    <section key ={index} className = "section-list">
      <h3>{loadPanel.title}</h3>
      <p>{loadPanel.description}</p>
    </section>
  )

  return (
    sectionList
  );
}
