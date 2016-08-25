var settingFlag=false;                                                  //导航栏中'设置'的标志位
var settingPopFlag=false;                                               //隐藏的'设置'的标志位
var productFlag=false;                                                  //导航栏中'更多产品'的标志位
var productPopFlag=false;                                               //隐藏的'更多产品'的标志位

function productMouseOver(){                                            //鼠标悬停首航栏中的更多产品时
    productFlag=true;
    more0.style.display='block';
    bg0.style.backgroundColor="#f5f5f5";
    bg0.style.color="black";
    myList.style.display='none';
}

function productMouseOut(){                                             //鼠标离开首航栏中的更多产品时
    productFlag=false;
    if(productFlag==false && productPopFlag==false){
        more0.style.display='none';
        bg0.style.backgroundColor="#3399ff";
        bg0.style.color="white";
    }
    setTimeout(prodecutOutDelay,100);                                   //要等更多产品隐藏层先显示方可
}

function productPopMouseOver(){                                         //鼠标悬停更多产品的隐藏层时
    productPopFlag=true;
    more0.style.display='block';
    myList.style.display='none';
    bg0.style.backgroundColor="#f5f5f5";
    bg0.style.color="black";
}

function productPopMouseOut(){                                          //鼠标离开更多产品的隐藏层时
    productPopFlag=false;
    if(productFlag==false && productPopFlag==false){
        more0.style.display='none';
    }
}

function prodecutOutDelay(){
    if(productFlag==false && productPopFlag==false){
        myList.style.display='none';
    }
}


function settingMouseOver(){                                            //鼠标离开首航栏中的设置时
    settingFlag=true;
    myList.style.display='block';
    more0.style.display='none';

}

function settingPopMouseOver(){                                         //鼠标悬停设置的隐藏层时
    settingPopFlag=true;
    myList.style.display='block';
    more0.style.display='none';
}

function settingPopMouseOut(){                                          //鼠标离开设置的隐藏层时
    settingPopFlag=false;
    if(settingFlag==false && settingPopFlag==false){
        myList.style.display='none';
    }
}

function settingMouseOut(){                                             //鼠标离开首航栏中的设置时
    settingFlag=false;
    setTimeout(testDelay,100);
}

function testDelay(){
    if(settingFlag==false && settingPopFlag==false){
        myList.style.display='none';
    }
}

// function showMessageBox(wTitle,content,wWidth)
// {
//     var bWidth=parseInt(document.documentElement.scrollWidth);
//     var bHeight=parseInt(document.documentElement.scrollHeight);
//     var back=document.createElement("div");
//     back.id="back";
//     var styleStr="top:0px;left:0px;position:absolute;background:#666;width:"+bWidth+"px;height:"+bHeight+"px;opacity:0.40";
//     back.style.cssText=styleStr;
//     document.body.appendChild(back);
//     var mesW=document.createElement("div");
//     mesW.id="mesWindow";
//     mesW.className="mesWindow";
//     mesW.innerHTML="<div class='mesWindowTop'><table width='100%' height='100%'><tr><td>"+
//     wTitle+"</td><td style='width:1px;'>"+
//     "<input type='button' onclick='closeWindow();' title='关闭窗口' class='close' value='×' />"+
//     "</td></tr></table></div>"+
//     "<div class='mesWindowContent' id='mesWindowContent'>"+
//     content+"</div><div class='mesWindowBottom'></div>";
//     styleStr="left:"+(window.outerWidth-wWidth)/2+"px;top:"+(window.outerHeight)/4+"px;position:absolute;width:"+wWidth+"px;height:450px;";

//     mesW.style.cssText=styleStr;
//     document.body.appendChild(mesW);
// }
// //关闭窗口
// function closeWindow(){
//     if(document.getElementById('back')!=null)
//     {
//         document.getElementById('back').parentNode.removeChild(document.getElementById('back'));
//     }
//     if(document.getElementById('mesWindow')!=null)
//     {
//         document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
//     }

// }
// //测试弹出
// function testMessageBox(){
//     messContent="<div style='padding:20px 0 20px 0;text-align:center'>"+
//     "<input style='font-size:14px;height:35px;width:295px;' type='email' id='email' name='email' placeholder='手机/邮箱/用户名'><br/><br/>"+
//     "<input style='font-size:14px;height:35px;width:295px;' type='password' id='pwd' placeholder='密码'><br/><br/>"+
//     "<input type='checkbox' id='autologin'>下次自动登陆"+
//     "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
//     "<a href='忘记密码.html' id='fgtpwd' style='text-decoration:none;'>忘记密码?</a><br><br>"+
//     "<input type='submit' id='baid' style='width:295px;' value='登陆'><br><br>"+
//     "<a href='立即注册.html' id='register' style='text-decoration:none;'>"+
//     "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
//     "立即注册</a><br><br><br><br>"+
//     "<hr color='silver'><br>"+
//     "<span id='moreway'>可以用以下方式登陆"+
//     "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
//     "</span><br><br>"+
//     "<img src='QQ.png'>"+
//     "<img src='微博.png'>"+
//     "<img src='微信.png'>"+
//     "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
//     "</div>";
//     showMessageBox('登录百度账号',messContent,370);
// }
