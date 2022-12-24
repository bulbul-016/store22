import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { types } from '@babel/core';

function ProductBlock({name, imageUrl, price, colors, sizes}) {
  const [activeColor, setActiveColor ] = React.useState(colors[0]);
  const availableColors = ['Белый', 'Черный', 'Синий']; 
  const availableSizes = ['S', 'M', 'L', 'XL']; 
  const [activeSize, setActiveSize ] = React.useState(sizes[0]);

  // console.log(name, colors );

  const onSelectColor = (index) => {
    setActiveColor(index);
  }

  const onSelectSize = (index) => {
    setActiveSize(index);
  }

  return (
    <div className="product-block">
      <img className="product-block__image" src={imageUrl} alt={name} />
      <h4 className="product-block__title">{name}</h4>
      <div className="product-block__selector">
        <ul>
          {availableColors.map((color, index) => (
            <li key={color}
                onClick={() => onSelectColor(index)} 

                className={classNames({
                active: activeColor === index,
                disabled: !colors.includes(index),
              })}>
              {color}</li>
          ))}
        </ul>
        <ul>
        {availableSizes.map((size, index) => (
            <li key={size}
                onClick={() => onSelectSize(index)} 

                className={classNames({
                active: activeSize === index, 
                disabled: !sizes.includes(size),
              })}>
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="product-block__bottom">
        <div className="product-block__price">{price} tg</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  )
}

ProductBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // colors: PropTypes.arrayOf([PropTypes.number]).isRequired,

};

ProductBlock.default = {
  colors: [],
};

export default ProductBlock