const user=require('../model/usermodel')

module.exports={

    showHome:(req,res)=>{
        // res.send('Hello, World!');
        res.render('index')
    }

}