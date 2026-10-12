// function ListGroup() {
//   const items =[
//     'bwimp',
//     'doodle',
//     'flimflam',
//     'gobbledygook',
//     'hocuspocus'
//   ];

//     return (
//     <>
//       <h1>BIG LIST</h1>
//       <ul className="list-group">
//         <li className="list-group-item">An item</li> // currently this list is kind of useless since we hardcoded shit in here, but you can render a list dynamically.
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </>
//   );
// }
// export default ListGroup;
import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // this function is called a hook which is something you use to tap into react features. useState is a hook that allows you to add state to a functional component.
  console.log(items);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
