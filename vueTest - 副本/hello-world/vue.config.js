const webpack = require('webpack');

module.exports = {
//    publicPath: '../',
   devServer: {
        port:8088,
		// proxyTable: {
		//       '/api': {
		//         target: 'http://how2j.cn/study/',//��������õĽӿ������Ͷ˿ں� �����˼�http
		//         changeOrigin: true,//�����Ҫ����
		//         pathRewrite: {
		//           '^/api': '/'
		//                 //�������������ĵ�ַ��
		//                 //������������ǵ��ӿ�ʱֱ����api���� ������Ҫ��
		//                 //��'http://425.0.100.100:8888/user/add'��ֱ��д��/api/user/add������
		//         }
		//       }
		// 	}
    },
    lintOnSave: false,//�ر�EsLint�Զ�����Ű������
	configureWebpack: {//����jquery
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery",
		Popper: ['popper.js', 'default']
      })
    ],
  },
  
}