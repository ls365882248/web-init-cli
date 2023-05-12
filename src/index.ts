import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import os from 'os';

const program = new Command();

program
  .option('-x, --xiangqian', 'xiangqian')
  .option('-v, --version', 'cli version')
  .option('-d, --datagrand', 'to datagrand')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

const options = program.opts();
if (options.datagrand) {
  const homeDir =  os.homedir();
  const cPath = './datagrand';
  const target = path.resolve(homeDir, cPath);
  const stats = fs.statSync(target);
  if (!stats.isDirectory()) {
    console.error(`"datagrand" 不是一个有效的文件夹路径。`);
    process.exit(1);
  }
  
  // 更改当前工作目录
  process.chdir(target);
  // 打印新的当前工作目录
  console.log(`当前工作目录已更改为 "${target}"。`);
};

if(options.version) {
  fs.readFile('./package.json', 'utf8', (err, data) => {
    if (err) {
      console.error('读取 package.json 文件时出错：', err);
      return;
    }
    try {
      // 解析 JSON 数据
      const packageJson = JSON.parse(data);
      const version = packageJson.version;
      // 打印版本号
      console.log(version);
    } catch (error) {
      console.error('解析 package.json 文件时出错：', error);
    }
  });
}



if(options.xiangqian) {
  console.log("你在看啥呢？沙雕！")
}

if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);