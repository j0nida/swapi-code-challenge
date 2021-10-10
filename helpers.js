const axios = require('axios');
let arr=[];
    async function getData(url) {
        try
        {
            const response = await axios.get(url);
            let aData = arr.push(response.data.results)
            if (response.data.next !== null)
                await getData(response.data.next, aData)

            return arr.flat();
        } catch (err) {
            console.error(err);
        }
    }

module.exports= {getData}


