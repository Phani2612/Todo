const Express = require('express')

const App = Express()

App.use("/scripts" , Express.static("scripts"))

App.get('' , function(req,res)
{
    res.sendFile(__dirname+'/scripts/index.html')
})

App.listen(5000, function()
{
    console.log("Port running at 5000")
})