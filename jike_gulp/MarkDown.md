1. npm install 
2. 进入当前目录 执行： gulp
3. 打开build/index
4. build是打包过后的文件

问题：
1. 这次只对js进行了压缩，但是css还有图片都进行了md5 和路径替换，js功能在打包过后也能正常使用了
2. 加一个md5 的作用是为了区分版本？