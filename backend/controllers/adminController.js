const express = require('express');
const router = express.Router();
const Media = require('../mediaModel');

// INDEX ROUTE
router.get('/', async (req, res) => {
    try {
        const foundAllMedia = await Media.find();
        res.render('show.ejs', {
            media: foundAllMedia
        })
    } catch (err) {
        console.log(err)
    }
});

// SHOW ROUTE
router.get('/:id', async (req, res) => {
    try {
        const foundOneMedia = await Media.findById(req.params.id);
        res.render('showone.ejs', {
            media: foundOneMedia
        })
    } catch (err) {
        console.log(err)
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
        if (req.body.approved === 'on') {
            req.body.approved  = true;
        } else {
            req.body.approved  = false;
        }
        const newMedia = await Media.create(req.body);

        console.log(newMedia);

        res.redirect('/admin');
    } catch(err){
        console.log(err)
    }
});

// EDIT ROUTE
router.get('/:id/edit', async (req,res) => {
    try {
        const editMedia = await Media.findById(req.params.id);
        res.render('edit.ejs', {
            media: editMedia
        });
    } catch (err) {
        console.log(err)
    }
});

// UPDATE ROUTE
router.put('/:id', async (req, res) => {
  try {
    if (req.body.approved === 'on') {
        req.body.approved  = true;
    } else {
        req.body.approved  = false;
    }
    const mediaToEdit = await Media.findByIdAndUpdate(req.params.id, req.body, {new: true});
   
    mediaToEdit.save();
    console.log(mediaToEdit, "UPDATED!");
    res.redirect('/admin');
  } catch (err) {
      console.log(err)
  }
});

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const mediaToDelete = await Media.findByIdAndRemove(req.params.id);
        console.log(mediaToDelete);
        res.redirect('/admin');
    } catch(err) {
        console.log(err)
    }
});

module.exports = router;