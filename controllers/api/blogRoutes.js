const router = require("express").Router();
const { Blogs, Comments, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  Blogs.create({ ...body, userId: req.session.userId })
    .then(newBlog => {
      res.json(newBlog);
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
    .then(addedBlog => {
      if (addedBlog > 0) {
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
    .then(deletedBlog => {
      if (deletedBlog > 0) {
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