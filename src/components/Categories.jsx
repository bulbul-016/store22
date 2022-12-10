import React from 'react';

function Categories({ items, onClickItems }) {
  const [activeItem, setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div>
      <div className="categories">
        <ul>
          <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>
            Все
          </li>

          {items &&
            items.map((name, index) => (
              <li
                onClick={() => onSelectItem(index)}
                className={activeItem === index ? 'active' : ''}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;

// class Categories extends React.Component {
//   state = {
//     activeItem : 3,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem : index,
//     });
//   };

//   render() {
//     const {items, onClickItems} = this.props;
//     console.log(this.state);
//     return (
//       <div>
//         <div className="categories">
//           <ul>
//             <li>Все</li>
//             {items.map((name, index) => (
//               <li className={this.state.activeItem === index ? 'active' : '' }
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}>
//                 {name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
