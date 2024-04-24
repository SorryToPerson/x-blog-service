//数据库连接池配置
const mysql = require('mysql2');
const pool = mysql.createPool({
  connectionLimit: 20, //最大连接数
  host: 'localhost', //ip地址
  user: 'root', //数据库用户名
  password: 'Abcd1234!', //数据库用户密码
  port: 3306, //数据库端口
  database: 'x_blog', //数据库表名称
  connectTimeout: 5000, //连接超时
});
const repool = () => {
  pool.on('connection', (connection) => {
    console.log('someone connected!', connection);
  });
};
module.exports = {
  pool,
  repool,
};
