import { PizzaBlock } from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';
import { Category } from '../../components/Category';
import { Sort } from '../../components/Sort';
import { useEffect, useState } from 'react';

export const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCatigory, setActiveCatigory] = useState(0);
    const [active, setActive] = useState({name: 'популярности', sortProperty: 'rating'});

    console.log(active, activeCatigory);

    useEffect(() => {
        setIsLoading(true);
        const order = active.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = active.sortProperty.replace('-', ''); 
        const category = activeCatigory > 0 ? `category=${activeCatigory}` : '' ;

        fetch(`https://635fa0523e8f65f283b7781a.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
        )
        .then(res => res.json())
        .then(arr => {
            setItems(arr);
            setIsLoading(false);
        });
        window.scrollTo(0, 0);
    }, [activeCatigory, active]);

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Category activeCatigory={activeCatigory} onClickCategory={(id) => setActiveCatigory(id)} pizzas={items} />
                    <Sort active={active} onChangeSort={(id) => setActive(id)} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                {
                    isLoading ? [...new Array(5)].map((_, index) => <Skeleton key={index} />) : (
                    items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                    )
                }
            
                </div>
            </div>
        </div>
    );
};
