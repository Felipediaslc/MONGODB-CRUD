require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT 
const mongoose = require('mongoose');
mongoose.connect(process.env.DATA_BASE);
const modelProdut = require('./models/user')
app.use(express.json())

app.post('/produtos', async (req,res)=> {
   try{
    let product = new modelProdut(req.body);
    const result = await product.save()
    res.send(result)
   } catch(err){
     console.log(err)
   }
})

app.get('/produtos', async (req,res)=> {
   try {
      const result = await modelProdut.find();
      res.send({result})
   } catch (err) {
      console.log(err);
   }
    });
    app.get('/produtos/:id', async (req,res)=> {
        try {
        const result = await modelProdut.findById(req.params.id);
        res.send({result})
        } catch (err) {
           console.log(err);
        }
        });
        app.delete('/produtos/:id', async (req,res)=> {
            try {
            const result = await modelProdut.findByIdAndRemove(req.params.id);
            res.send({result})
            } catch (err) {
               console.log(err);
            }
            });
            app.put('/produtos/:id', async (req,res)=> {
                try {
                const result = await modelProdut.findByIdAndUpdate(req.params.id, req.body, {new: false});
                res.send({result})
                } catch (err) {
                   console.log(err);
                }
                });

app.listen(PORT, ()=> {
 console.log(`listening on port: ${PORT}`);
})