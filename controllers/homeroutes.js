const router = require("express").Router();
const { Blogs, Comments, User } = require("../models");

router.get("/", (req, res) => {
    Blogs.findAll({
    include: [User],
  })
    .then((blogData) => {
      const posts = blogData.map((post) => post.get({ plain: true }));

      res.render("posted", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


router.get("/blog/:id", (req, res) => {
  Blogs.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comments,
        include: [User],
      },
    ],
  })
    .then((blogData) => {
      if (blogData) {
        const post = blogData.get({ plain: true });

        res.render("homepage", { post });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.In) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;