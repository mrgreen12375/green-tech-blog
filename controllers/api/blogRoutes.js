const router = require("express").Router();
const { Blogs, Comments, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.user_id);
  Blogs.create({ ...body, user_id: req.session.user_id })
    .then(createBlog => {
      res.json(createBlog);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  console.log(req.body, req.params.id)
  Blogs.update(req.body, {
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
  console.log(req.body, req.params.id)
  Blogs.destroy({
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