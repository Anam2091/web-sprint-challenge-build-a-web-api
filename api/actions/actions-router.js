server.get('/api/actions',(req,res)=>{
    res.status(200).send([])

})

server.get('/api/actions/:id',(req,res)=>{
    const id = req.body.id;
    res.status(200).send({id})
})

server.post('/api/actions',(req,res)=>{
    const action= req.action
    res.status(200).send(action)
})


// Write your "actions" router here!
