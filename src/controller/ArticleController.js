const ArticleService = require('../service/ArticleService');
const response = require('../utils/response');
class ArticleController {
  /**
   * 获得管理员列表分页数据
   * @param {Context} ctx
   */
  getArticleList(req, res) {
    const { limit, page } = req.body;
    ArticleService.getArticleListPage({ limit, page })
      .then((result) => {
        res.json(response.success(result, 'success', 200));
      })
      .catch((err) => {
        res.json(response.error(err.code, null, err.errno));
      });
  }

  /**
   * 新增数据
   * @param {Context} ctx
   */
  async addArticle(req, res) {
    const { body: Article } = req;
    const isArticle = await ArticleService.getArticleByName(Article.account);

    if (isArticle.length) {
      res.json(
        response.error(`新增用户${isArticle[0].account}已存在！`, null, 200),
      );
      return;
    }
    ArticleService.addArticleInfo([
      Math.floor(Math.random() * 10000 - 1),
      Article.account,
      Article.password,
      Article.email,
      Article.weight,
    ])
      .then(() => {
        res.json(response.success(null, 'success', 200));
      })
      .catch((err) => {
        res.json(response.error(err.code, null, err.errno));
      });
  }

  /**
   * 更新数据
   * @param {Context} ctx
   */
  updateArticle(req, res) {
    const { body: Article } = req;
    ArticleService.updateArticle(Article)
      .then((result) => {
        res.json(response.success(null, 'success', 200));
      })
      .catch((err) => {
        res.json(response.error(err.code, null, err.errno));
      });
  }

  /**
   * 删除数据
   * @param {Context} ctx
   */
  deleteArticle(req, res) {
    const { id } = req.body;
    ArticleService.delArticle(id)
      .then(() => {
        res.json(response.success(null, 'success', 200));
      })
      .catch((err) => {
        res.json(response.error(err.code, null, err.errno));
      });
  }

  /**
   * 模糊查询管理员信息
   * @param ctx 上下文
   */
  getArticleDim(req, res) {
    const { account } = req.query;
    ArticleService.getArticleByAccount(account)
      .then((result) => {
        res.json(response.success(result, 'success', 200));
      })
      .catch((err) => {
        res.json(response.error(err.code, null, err.errno));
      });
  }

  /**
   * 修改管理员登录权限
   * @param ctx 上下文
   */
  editArticleInfo(req, res) {
    const { body } = req;
    ArticleService.editArticleInfo(body)
      .then((result) => {
        res.json(response.success(null, 'success', 200));
      })
      .catch((err) => {
        res.json(response.error(err.code, null, err.errno));
      });
  }
}
module.exports = new ArticleController();
