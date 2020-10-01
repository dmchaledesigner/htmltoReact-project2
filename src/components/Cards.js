import React from 'react';

import Card from './Card';
import CardData from './Data/CardData';
import './Cards.css';



class Cards extends React.Component {

    constructor() {
        super()
        this.state = {
            cards: CardData,

        }

    }


    render() {

        let allCardData = this.state.cards;
        const allCards = allCardData.map((item, index) => {
            return <Card img={item.src} label={item.label} path={this.props.path} text={item.text} key={index} />
        })


        return (

            <div className='cards'>
                <h1>Check out these EPIC Destinations!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            {allCards}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }


}

export default Cards;