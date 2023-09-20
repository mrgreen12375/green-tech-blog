const router = require("express").Router();
const { Blog, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: Comment }],
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Blog.create({ ...req.body, user_id: req.session.user_id });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, (req, res) => {

  Blog.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(rows => {
      if (rows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {

  Blog.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(rows => {
      if (rows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;