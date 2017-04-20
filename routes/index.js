var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title',
    name: "liche"
  };
  await ctx.render('index', {
    age: 30
  });
})
module.exports = router;
