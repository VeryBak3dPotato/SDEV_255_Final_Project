const home_index = (req, res) => {
    res.render("home/index", { title: "Home" });
};

module.exports = {
  home_index
};