# 自动驾驶恶意场景生成
## 说明文档**v0.1.0**
### create 2023/4/4
### update 2023/4/4
* 注：下文部分图片与实际应用当前版本不一致，原因是编写使用文档后更改了软件的标题名，不影响实际使用
---
##  目录
### <a href="#1">1. 应用场景及软件形式</a>
### <a href="#2">2. 导航栏</a>
### <a href="#3">3. 主页</a>
### <a href="#4">4. 外置设备拍摄</a>
### <a href="#5">5. 上传照片</a>
### <a href="#6">6. 设置</a>
### <a href="#7">7. 帮助</a>
### <a href="#8">8. 数据库（测试版）</a>
---
## <div id=1></div> 1. 应用场景及软件形式
### 1.1. 应用场景
本软件用于生成自动驾驶恶意场景，可以通过连接外置设备或上传场景图片的方式实现批量场景生成
### 1.2. 软件形式
软件采用web客户端的形式，免安装，可本地部署。部署方法见
## <div id=2></div> 2. 导航栏
<div style="display:flex">
<img style="height:150px" src="/home/mob/project-x/doc/导航栏.png"></img>  
 &#128512软件左侧常驻导航栏，展示软件的应用列表。软件功能如下：主页、外置设备拍摄、上传照片、设置、帮助、数据库（测试版）。  点击导航栏应用列表下面的字段，会转到对应的应用。
</div>  

## <div id=3></div> 3. 主页
<img style="height:200px" src="/home/mob/project-x/doc/主页.png"></img>  
主页是应用的默认界面，列出了应用列表的所有应用以及简单描述。点击对应字段可以跳转到对应应用的界面。
## <div id=4></div> 4. 外置设备拍摄
### 4.1. 应用功能
* 外置设备为带有服务功能的摄像头等，如下图我们提供的安装在微型电脑(orange pi)上的摄像头所示。安装服务程序后，可以接入我们的软件使用。接入方法为在"设置/设备url"中填入设备的服务地址，详见<a href="#4_3">4.3. 自定义外置设备</a>。
### 4.2. 使用方法
* 点击左侧导航栏应用列表下的“外置设备拍摄”，点击**拍摄按钮**，等待设备上传图片及服务启动，即可在应用上方**图片列表**中看到原图及生成
* 拍摄按钮的左边是**模型选择器**，点击可以更换场景生成风格
* 场景生成后，会自动在页面下方显示场景生成的基本信息，如图片名称、模型名称以及场景评分等
* 本应用的使用方法可见下图简单描述
<img style="height:200px" src="/home/mob/project-x/doc/外置设备拍摄简介.png"></img>
### 4.3. 自定义外置设备
* 本应用调用外置设备的流程如下：  
    1. 获取外置设备服务地址，如"http://xx.xx.xx/device/api/"
    2. 向外置设备发送拍摄请求，请求url如"/get-image
    3. 外置设备接受请求，拍摄照片，并根据请求参数向服务器发起生成场景请求
* 外置设备需要接受的请求及参数：   
    **请求url："/get-image"**  
    **请求参数：**  
    1. brightness : int 
    2. model_name : str
* 外置设备需要发起的请求及参数：  
**请求url：""http://123.125.240.150:29014/post-image""**  
    **请求参数：**     
    1. brightness : int 
    2. model_name : str
    3. image: image(以base64格式发送)
* 典型的外置设备服务如下：  
    1. 编程环境及依赖模块：python3, flask, flask_cors, request
    2. 程序主体
    ```python
        from flask import *
        import video
        from flask_cors import *
        import requests
        import base64
        app = Flask(__name__)
        CORS(app, supports_credentials=True)
        server = "http://192.168.137.39:8000/"

        @app.route("/api/get-image")
        def get_image():
            brightness = request.args.get('brightness')
            model_name = request.args.get('model_name')
            image_name = video.capture()
            with open(f"src/{image_name}", "rb") as f:
                data = base64.b64encode(f.read())
                data = data.decode("ascii")
                requests.post("http://123.125.240.150:29014/post-image", data={'image':data, 'brightness': brightness, 'model_name': model_name})
            return "200"

        @app.route("/src/<image_name>", methods=['GET'])
        def get_image_stream(image_name):
            return send_file(f"./src/{image_name}")

        app.run("192.168.137.39", 8000)
    ```
## <div id=5></div> 5. 上传照片
### 5.1. 应用功能
此应用可指定上传本机的照片并进行场景生成，主要用于模型的测试
### 5.2. 使用方法
点击页面中间的**上传图片**按钮，会弹出文件资源管理器的选择框，选择需要生成场景的图片，并等待服务生成场景。页面的其它内容与<a href="#4">4. 外置设备拍摄</a>基本一致，如有需要，请参考上节。
<img style="height:300px" src="/home/mob/project-x/doc/上传图片.png"></img>
## <div id=6></div> 6. 设置
### 6.1. 应用功能
此应用用于设置场景的输出参数，以达到更好的评分效果。此外也可设置外置设备的服务地址（url）以及设置默认的场景生成模型。
### 6.2. 使用方法
在设置页面下，共有下列条目可以设置调整：  
1. **场景输出亮度** -- 拖动滑动条
2. **场景输出尺寸** -- 拖动滑动条
3. **过曝光优化** -- 点击开关
4. **设备url** -- 填写设备服务地址，或留空使用默认的外置设备
5. **默认模型** -- 点击右边倒三角选择模型
<img style="height:200px" src="/home/mob/project-x/doc/设置.png"></img>
## <div id=7></div> 7. 帮助
### 7.1. 应用功能
此页面用于显示帮助文档
### 7.2. 使用方法
<img style="height:200px" src="/home/mob/project-x/doc/帮助.png"></img>
略。
## <div id=8></div> 8. 数据库（测试版）
* 注：该应用为测试版，功能并不完全
### 8.1. 应用功能
此应用用于收集和存储所有生成的场景，并根据场景风格进行分类。
### 8.2. 使用方法
1. **应用顶栏**用于选择对应风格的场景数据库    
2. 顶栏下方“**下载全部**”按钮，用于下载当前数据库的所有图片
3. 按钮下方显示当前数据库**所有图片**
4. **应用底部**用于显示图片分页选择
<img style="height:200px" src="/home/mob/project-x/doc/数据库.png"></img>