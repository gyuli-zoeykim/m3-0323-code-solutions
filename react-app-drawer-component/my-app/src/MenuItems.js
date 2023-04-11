export default function MenuItems({ list, toggleList, selectList }) {

  const menuItems = list.map((loadItem, index) =>
    <li key={index} onClick={() => { toggleList(); selectList(loadItem);}}>{loadItem}</li>
  )
  return (
    <ul>{menuItems}</ul>
  );
}
