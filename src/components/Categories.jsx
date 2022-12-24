import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory ,items, onClickCategory }) {
  

  return (
    <div>
      <div className="categories">
        <ul>
          <li onClick={() => onClickCategory(null)} className={activeCategory === null ? 'active' : ''}>
            Все
          </li>

          {items &&
            items.map((name, index) => (
              <li
                onClick={() => onClickCategory(index)}
                className={activeCategory === index ? 'active' : ''}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
})

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;

// class Categories extends React.Component {
//   state = {
//     activeCategory : 3,
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
