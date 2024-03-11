const getHome = (req, res) => {
  res.status(200).send(`<h1>To Do List</h1>`);
};
const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Ok",
  });
};

module.exports = { getHome, getHealth };
