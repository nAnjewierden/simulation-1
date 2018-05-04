
module.exports = {
    get: (req, res) =>{
        console.log('hit it')
        res.status(200).send('it worked')
    }
}