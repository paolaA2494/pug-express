const { Router } = require('express');
const router = Router();

//Ruta inicial del archivo index.pug
router.get('/', (req, res)=>{
    res.render('index', { title: 'Express-Pug'});
})


//middleware para el login
router.get('/login', (req,res)=>{
    res.render('login', { error: false });
})

//Middleware para el dashboard
router.post('/signin', (req, res)=>{
    const user = req.body.email;
    const pass = req.body.password;

    if(user==='cmtecnica09@elpoli.edu.co' && pass==='123456'){
        res.render('dashboard',
        {title: 'Dashboard', 
        datos:{ 
            email:user, 
            alumnos:['Richerson Alonso Santaella',
           'Jose Antonio Adamis', 'Kevin Julian Hernández', 'Juan Pablo Durango']
        }
     });
    }
    else {
        res.render('login', {error: true})
    }
});

module.exports = router;