class StackOverFlowAPI {
   
    url = 'https://api.stackexchange.com/';


    
    getPosts(phrase, sort) {
        // /2.3/similar?order=desc&sort=votes&title=flex css html&site=stackoverflow
          return fetch(`${this.url}2.3/similar?order=desc&sort=${sort}&title=${phrase}&site=stackoverflow`)

            .then(this.handleErrors)
            .then(resp => resp.json())
    }


    // handleErrors(resp) {
    //     if (!resp.ok) {
    //         console.error(`Error: ${resp.status} - ${resp.statusText}`);
    //         console.log(resp); 
    //         throw new Error(`Request failed with status ${resp.status}: ${resp.statusText}`);
    //     }
    //     return resp;
    // }

    handleErrors(resp) {
        if(!resp.ok) {
            throw Error(resp.statusText);
        }

        return resp;
    }
}

export default StackOverFlowAPI