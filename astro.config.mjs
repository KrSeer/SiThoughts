import { defineConfig } from 'astro/config';

// 仓库是 SiThoughts 而不是 KrSeer.github.io，所以站点在子路径下：
//   https://krseer.github.io/SiThoughts/
// 以后绑定自定义域名时，把 base 删掉、site 改成你的域名。
export default defineConfig({
  site: 'https://krseer.github.io',
  base: '/SiThoughts',
});
