
const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, (req, res) => {
  
  Comment.create({ ...req.body, user_id: req.session.user_id  })
    .then(createComment => {
      res.json(createComment);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;