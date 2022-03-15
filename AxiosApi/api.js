const axios = require('axios');

function getUser () {
    axios.get('http://localhost:5000/result')
        .then(response => {
            console.log(response.data.result_ok[0].English)
            var ing = response.data.result_ok[0].English
            return    
        })
        .catch(error => console.log(error))
}
getUser()