const router = require("express").Router();
const { Blog } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    Blog.findAll({
      where: {
        user_id: req.session.user_id
      }
    })
      .then(blogData => {
        const posts = blogData.map((blog) => blog.get({ plain: true }));
        
        res.render("post", {
          layout: "dashboard",
          posts
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

  router.get("/create", withAuth, (req, res) => {
    res.render("createpost", {
      layout: "dashboard"
    });
  });
  
  router.get("/edit/:id", withAuth, (req, res) => {
    Blog.findByPk(req.params.id)
      .then(blogData => {
        if (blogData) {
          const post = blogData.get({ plain: true });
          
          res.render("editpost", {
            layout: "dashboard",
            post
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
module.exports = router;