import React from 'react';
import { ProductBlock, Categories, SortPopup, ProductLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchProducts } from '../redux/actions/products';


const categoryNames = ['Верхняя одежда', 'Нижняя одежда', 'Двойки', 'Платья', 'Обувь'];
const sortItem = [
  { name: 'популярности', type: 'popular' , order: 'desc'},
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ products }) => products.items);
  const isLoaded = useSelector(({ products }) => products.isLoaded);
  const { category, sortBy} = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchProducts(sortBy, category));  
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
        <SortPopup activeSortType= {sortBy.type} onClickSortType={onSelectSortType} items={sortItem} />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {isLoaded 
          ? items.map((obj) => <ProductBlock key={obj.id} isLoading ={true} {...obj} />)
          : Array(10)
          .fill(0)
          .map((_, index) => <ProductLoadingBlock key={index}/>)}
        
        
        {/* <Clothes
          source={'https://th.bing.com/th/id/OIP.g9IJupk8OSvp3AYOSwRgvQHaHa?pid=ImgDet&rs=1'}
          itsalt={'Shirt'}
          nameOfProduct={'Рубашка'}
          price={'от 14 400 tg'}
        />
        <Footwear
          source={'https://ae01.alicdn.com/kf/HTB1ySYvXLfsK1RjSszbq6AqBXXa7/-.jpg'}
          itsalt={'Обувь'}
          nameOfProduct={'Угги'}
          price={'от 25 500 tg'}
        />           

        <div className="product-block">
          <img
            className="product-block__image"
            src="https://pbs.twimg.com/media/FHDmAK3XsAsoX-s.jpg"
            alt="Кольцо Эды"
          />
          <h4 className="product-block__title">Кольцо Эды</h4>
          <div className="product-block__selector">
            <ul>
              <li className="active">Белый</li>
              <li>Розовый</li>
            </ul>
            <ul>
              <li className="active">16</li>
              <li>17</li>
              <li>Другой</li>
            </ul>
          </div>
          <div className="product-block__bottom">
            <div className="product-block__price">от 1900 tg</div>
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
        </div>{' '}

        <Hats
          source={
            'https://alimentola.info/uploads/posts/2021-09/thumbs/1632721868_32-alimentola-info-p-shapki-s-zastezhkoi-szadi-devushka-krasivo-33.jpg'
          }
          itsalt={'Шапка'}
          nameOfProduct={'Шапка зимняя'}
          price={'от 9900 tg'}
        />
        <Bags
          source={
            'https://cdn.shopify.com/s/files/1/1296/7715/products/IMG_4653_4c6305eb-7fe9-48a7-9881-74622d47dd8f.jpg?v=1628530873'
          }
          itsalt={'Сумка'}
          nameOfProduct={'Сумка PRADA'}
          price={'от 16 500 tg'}
        />
        
        <Clothes
          source={
            'https://static8.bosco.ru/upload/iblock/3aa/3aa5331902b6b2845049f38759c32495_502_660.jpg'
          }
          itsalt={'Пижама'}
          nameOfProduct={'Пижама'}
          price={'от 16 500 tg'}
        />
        <Clothes
          source={'http://kurtki-i-parki.ru/image/cache/catalog/1.1/IMG_1078-900x1200.jpeg'}
          itsalt={'Дубленка'}
          nameOfProduct={'Дубленка'}
          price={'от 35 000 tg'}
        />
       
        
        <Clothes
          source={'https://www.bebakids.ru/upload/iblock/m/026/221219_202_1.jpeg'}
          itsalt={'Джинсы'}
          nameOfProduct={'Джинсы'}
          price={'от 15 900 tg'}
        />
        
        <Clothes
          source={'https://i.pinimg.com/originals/1f/28/0d/1f280de44e1925ed7042a2330794a2e5.jpg'}
          itsalt={'Платье'}
          nameOfProduct={'Платье'}
          price={'от 27 500 tg'}
        /> */}
      </div>
    </div>
  );
}

export default Home;
