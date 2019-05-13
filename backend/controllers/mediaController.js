const express = require('express');
const router = express.Router();
const Media = require('../mediaModel');


// ROUTES TO COMMUNICATE WITH FRONTEND!!!

// SHOW ALL ROUTE
router.get('/', async (req, res) => {
    try {
        const foundAllMedia = await Media.find();
        res.json({
            status: 200,
            data: foundAllMedia
        });
    } catch (err) {
        console.log(`get route hit`)
    }
});

// SHOW ONE ROUTE
router.get('/:id', async (req, res) => {
    try {
        const foundOneMedia = await Media.findById(req.params.id);
        res.json({
            status: 200,
            data: foundOneMedia
        });
    } catch (err) {
        console.log(`get route hit`)
    }
});

// CREATE ROUTE
router.post('/', async (req, res) => {
    try {
        if (req.body.approved === 'on') {
            req.body.approved  = true;
        } else {
            req.body.approved  = false;
        }
        const newMedia = await Media.create(req.body);
        res.json({
            status: 200,
            data: newMedia
        });
    } catch(err){
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

    res.json({
        status: 200,
        data: mediaToEdit
    });
  } catch (err) {
      console.log(err)
  }
});

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const mediaToDelete = await Media.findByIdAndRemove(req.params.id);
        res.json({
            status: 200,
            data: mediaToDelete
        });
    } catch(err) {
        console.log(err)
    }
});

module.exports = router;