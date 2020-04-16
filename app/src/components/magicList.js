import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import MagicCard from './magicCard'
import {fetchData} from '../store/actions/cardActions'
import Loader from 'react-loader-spinner'

function MagicList(props) {
    useEffect(()=> {
        props.fetchData();
    }, [])


    return(
        <div className="cardList">
            {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
            {props.cards.map( item => (
                <MagicCard key={item.id} name={item.name} image={item.imageURL} cost={item.manaCost} text={item.text} power={item.power} toughness={item.toughness} />

            ))}
        </div>
        
    )

}

const mapStateToProps = state => {
    console.log(state)
    return{
        cards: state.magic.data,
        isFetching: state.magic.isFetching,
        error: state.magic.error
    }
}
export default connect(
    mapStateToProps,
    {fetchData}
)(MagicList);
    