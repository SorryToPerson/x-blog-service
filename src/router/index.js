const AdminController = require('../controller/AdminController');
const ArticleController = require('../controller/ArticleController');
const express = require('express'); //导入express

const router = express.Router(); //创建路由对象
//分页查询后台管理员数据
router.post('/admin/queryAdminList', AdminController.getAdminList);
//新增管理员数据
router.post('/admin/addAdmin', AdminController.addAdmin);
//删除指定管理员数据
router.delete('/admin/deleteAdmin', AdminController.deleteAdmin);
//模糊查询管理员数据
router.get('/admin/getAdminDim', AdminController.getAdminDim);
//修改管理员信息
router.put('/admin/updateAdmin', AdminController.updateAdmin);

//分页查询后台管理员数据
router.post('/article/queryArticleList', ArticleController.getArticleList);
//新增管理员数据
router.post('/article/addArticle', ArticleController.addArticle);
//删除指定管理员数据
router.delete('/article/deleteArticle', ArticleController.deleteArticle);
//模糊查询管理员数据
router.get('/article/getArticleDim', ArticleController.getArticleDim);
//修改管理员信息
router.put('/article/updateArticle', ArticleController.updateArticle);

module.exports = router; //导出路由对象
