
module.exports = {
    get: (req, res) =>{
        const dbInstance = req.app.get('db')
        dbInstance.GetAll()
        .then((inventory) => res.status(200).send(inventory))
        .catch((err) => console.log(err))
        
    },
    post:(req, res) => {
        const dbInstance = req.app.get('db')
        const {name, price, imgUrl} = req.body
        console.log(name)
        dbInstance.Create_New([name, price, imgUrl])
        .then(() => res.status(200).send())
        .catch((err) => console.log(err))
    },
    delete: (req,res) =>{
        const dbInstance = req.app.get('db')
        const {params} = req
        dbInstance.delete_product(params.id)
        .then(() => res.status(200).send())
        .catch((err) => console.log(err))
    },
    put: (req, res) =>{
        
        console.log('update')
        const dbInstance = req.app.get('db')
        const {params, query} = req
        dbInstance.update_product([params.id, query.desc])
        .then(() => res.status(200).send())
        .catch((err) => console.log(err))
    }
}