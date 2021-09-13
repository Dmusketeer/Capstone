const express = require('express');
const router = express.Router();
const createProjectController = require('../controllers/createProject');
const checkAuthOwner = require('../middlewares/AuthOwner');

router.get('/', (req, res) => {
    res.send('you are in project section');
});
router.post('/v1', checkAuthOwner, createProjectController.projectDetails)


app.post('/', upload.single('image'), (req, res, next) => {

    var obj = {
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});

module.exports = router;