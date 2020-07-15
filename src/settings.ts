/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-07-15 11:50:39
 * @LastEditTime: 2020-07-15 18:25:23
 * @LastEditors: Duchin/梁达钦
 */
interface MSettings {
  // Overrides the default title 覆盖默认标题
  title: string;
  // Controls settings panel display 控件设置面板显示
  showSettings: boolean;
  // Controls tagsview display 控制tagsview显示
  showTagsView: boolean;
  showSidebarLogo: boolean;
  fixedHeader: boolean;
  errorLog: string[];
  sidebarTextTheme: boolean;
  // webpack-dev-server的端口号
  devServerPort: number;
  // 模拟服务器的端口号
  mockServerPort: number;
}
// You can customize below settings :)

const settings: MSettings = {
  title: 'Vue-ts-template',
  showSettings: true,
  showTagsView: true,
  showSidebarLogo: true,
  fixedHeader: false,
  errorLog: ['production'],
  sidebarTextTheme: true,
  devServerPort: 8090,
  mockServerPort: 9628
}

export default settings
