module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: 'Keep',
    includes: {
      css: ['page'],
      js: ['page']
    }
  });
};