const backend_url = "http://localhost:4000";

export async function getAllCards(){

    try{
        const result = await fetch(`${backend_url}/cards`, {
            method : 'GET',
            headers: {'Content-Type': 'application/json'},
        })

        const data = await result.json();
        return data.cards
    }
    catch(err){
        console.log('couldnt get all the cards from the server')
    }
}


export async function createCard(cardData){

    try{
        const result = await fetch(`${backend_url}/cards`, {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(cardData)
        })

        const data = result.json();
        return data
    }
    catch(err){
        console.log('couldnt create card try again')
    }
}


export async function getCard(title){

    try{
        const result = await fetch(`${backend_url}/cards/${title}`, {
            method : 'GET',
            headers: {'Content-Type': 'application/json'},
        })

        const data = result.json();
        return data
    }
    catch(err){
        console.log('couldnt get the card please try again later.')
    }
}