# panorama-viewer
Panorama image viewer 全景图查看器

由 Three.js 的几个 example 程序改写而来。详细见 Wiki。

我的一篇博客: [小米全景相机全景图查看器 - 简书](http://www.jianshu.com/p/5d43217758d8)

如果 GitHub 加载慢, 可以用这个: <http://tangzx.qiniudn.com/panorama/>.

## 使用方法

1.  加载本地全景图: 通过选择本地图片文件
2.  加载线上全景图: 通过输入图片 url
3.  通过 URL 指定预加载全景图:
    <http://tangzhixiong.com/panorama-viewer?src=http://7ximr7.com1.z0.glb.clouddn.com/38424910751_50221c2b8f_k.jpg&title=图片来自flickr>
4.  通过 URL 指定预加载多张全景图:
    <http://tangzhixiong.com/panorama-viewer?src=yellow-crane-tower.json>
    其中 json 文件的格式为:

    ```json
    {
        "title": "黄鹤楼 (Yellow Crane Tower)",
        "sites": {
            "site 1": "images/yellow-crane-tower/1_minified.jpg",
            "site 2": "images/yellow-crane-tower/2_minified.jpg",
            "site 3": "images/yellow-crane-tower/3_minified.jpg",
            "site 4": "images/yellow-crane-tower/4_minified.jpg",
            "site 5": "images/yellow-crane-tower/5_minified.jpg",
            "site 6": "images/yellow-crane-tower/6_minified.jpg",
            "site 7": "images/yellow-crane-tower/7_minified.jpg"
        }
    }
    ```

---

**THREE 自带的图**

![](texture.jpg)
![](https://rawgit.com/district10/panorama-viewer/gh-pages/texture.pgm.elsd.svg.marked.svg)

**仪器博物馆 1**

![](texture1.jpg){title="HDPano_00000013.jpg"}
![](https://rawgit.com/district10/panorama-viewer/gh-pages/texture1.pgm.elsd.svg.marked.svg)

**仪器博物馆 2**

![](texture2.jpg){title="HDPano_00000015.jpg"}
![](https://rawgit.com/district10/panorama-viewer/gh-pages/texture2.pgm.elsd.svg.marked.svg)

**仪器博物馆 1&2 匹配**

![](02_matches.jpg)

---

Tools:

-   [Image Eraser by Akshay Bhat](https://www.eraseimage.com/)

---

Notes:

-   [Spherical Projection](http://stemkoski.github.io/Three.js/Sphere-Project.html)
