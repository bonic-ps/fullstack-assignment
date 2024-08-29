import React, {useState, useEffect, useRef} from 'react';
import { getAllCards, getCard, createCard } from '../../utilityFunction';
import Card from '../Card/Card';
import './main.css';

export default function Main(){

    const inputRef = useRef();
    const [allCards, setAllCards] = useState();
    const [filteredCard, setFilteredCard] = useState();


    useEffect(() => {
        console.log('rendering the main page...');

        async function fetchCards() {
            try {
                const result = await getAllCards();
                setAllCards(result);
            } catch (err) {
                console.log('couldnt get all the cards.'); 
            }
        }

        fetchCards();

    }, [])

    async function handleSearch(){
        console.log('handle search for one card..', inputRef.current.value);
        const title = inputRef.current.value;
        if(inputRef.current.value){
            try {
                const result = await getCard(title);
                console.log('respoonse from server',result)
                if (result.card) { 
                    setFilteredCard(result.card);
                } else {
                    setFilteredCard(null); // the value would be null not undefined.
                }
            } catch (error) {
                console.error('couldnt get the card:', error);
                // setFilteredCard(null); 
                 
            } finally {
                inputRef.current.value = '';
            }
        }
        else{
            console.log('couldnt find searched text...');
            inputRef.current.value = '';
            // setFilteredCard(undefined)
        }
    }

    return (
        <>
         <div className="main-conatiner">
            <div className="main-search-container-section">
                <div className='main-heading'>How can we help?</div>
                <div className="search-box-container" >
                    <input type="text" ref={inputRef} className='search-input' placeholder='Search'/>
                    <button onClick={handleSearch} className='search-btn'>Search</button>
                    {filteredCard || filteredCard === null ? <button className='search-btn' onClick={() => setFilteredCard(undefined)}>show all</button> : <span></span> }
                </div>
            </div>

            <div className="helpcenter-container">
                    {
                        filteredCard === undefined && allCards?.map(each =>{ return <Card key={each._id} data = {each}/>})
                    }
                    {
                        filteredCard === null ? (<p>No match found</p>) : (filteredCard && <Card data = {filteredCard} />)
                    }
            </div>
         </div>
        </>
    )
}