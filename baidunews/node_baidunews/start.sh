#!/bin/bash
echo "脚本开始运行，启动服务……"
pm2 start ./bin/www

#设定cpu最大占用率
maxCpuPrec=95

while [ true ]
do
    #得到pid
    pid=`ps -e|grep '[0-9].node./'|awk '{print $1}'`
    #判断node进程是否存在
    if [ ! $pid ]
    then
        echo "nodejs进程未找到,程序退出！"
        break
    fi
    #得到cpu占用率，取得整数
    cpu=`ps -p $pid -o pcpu|grep -v CPU|cut -d . -f 1|awk '{print $1}'`
    #判断是否重启node服务
    echo 'cpu='$cpu
    if [ "$cpu" -gt "$maxCpuPrec" ]
    then
        echo "cpu占用率已大于95%，nodejs服务需要重启！"
        pm2 restart all
    else
        echo "nodejs服务正常，20s后重新检测～"
    fi
    echo "*****************************"
    #睡眠20秒之后进行
    sleep 20s   
done