const { pagingQuery, Article } = require('../mapping/sqlmap');
const connectionQuery = require('../utils/connectionQuery');
class ArticleService {
  /**
   * 分页查询管理员数据
   * @param page 页数
   * @param limit 条数
   * @returns
   */
  getArticleListPage(data) {
    return connectionQuery(
      pagingQuery(Number(data.page), Number(data.limit), 'article'),
    );
  }

  //根据传入账号查询指定数据
  getArticleByName(account) {
    return connectionQuery(Article.articleNameQuery(account));
  }

  //新增后台管理员数据
  addArticleInfo(data) {
    return connectionQuery(Article.articleAdd(data));
  }

  //删除指定后台管理员数据
  delArticle(id) {
    return connectionQuery(Article.articleDel(id));
  }
  /**
   * 根据传入的查询条件查询数据
   * @param {string} account 传入查询条件
   * @returns
   */
  getArticleByAccount(account) {
    return connectionQuery(Article.articleByAccount(account));
  }

  /**
   * 更新指定管理员信息
   * @param id 管理员id
   * @param data 管理员更新数据集合
   * @returns
   */
  updateArticle(data) {
    return connectionQuery(Article.articleUpdate(data));
  }

  /**
   * 修改管理员权限
   * @param id 管理员id
   * @param data 修改数据
   * @returns
   */
  editArticleInfo(data) {
    return connectionQuery(Article.articleUpdateActive(data));
  }
}
module.exports = new ArticleService();
