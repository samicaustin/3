const express = require('express');
const router = express.Router();
const Media = require('./mediaModel');

// SHOW ROUTE
router.get('/', async (req, res) => {
    try {
        const foundAllMedia = await Media.find();
        console.log(foundAllMedia);
        res.render('show.ejs', {
            media: foundAllMedia
        })
    } catch (err) {
        console.log(`get route hit`)
    }
});

// NEW ROUTE
router.get('/new', (req, res) => {
    console.log('new page');
    res.render('new.ejs')
})

// CREATE ROUTE
router.post('/', async (req, res) => {
    try {
        await Media.create(req.body);
        res.redirect('/secret');
    } catch(err){
        console.log(err)
    }
})

// EDIT ROUTE
router.get('/:id/edit', async (req,res) => {
    try {
        res.render('edit.ejs');
    } catch (err) {
        console.log(err)
    }
  })

// UPDATE ROUTE
router.put('/:id', async (req,res) => {
  try {
    const mediaToEdit = await Media.findByIdAndUpdate({});

    res.redirect('/secret');
  } catch (err) {
      console.log(err)
  }
})

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try {
        const mediaToDelete = await Media.findByIdAndDelete({});
        res.redirect('/secret');
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;