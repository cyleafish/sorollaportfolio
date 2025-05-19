---
title: "BobyGame"
subtitle: "#OpenCV #Nginx "
description: "用身體來玩遊戲吧！<br>
  姿勢偵測遊戲平台  
  <a class='underline' href='https://github.com/Kaiwhat/BobyGamer/tree/BobyGame_final' target='_blank'>BobyGame</a>
  "
icon: "3"

#collection: "projects"
pubDate: "2024"
heroImage: "/src/assets/bobygame.png"
---

# BobyGame：偵測身體動作來玩遊戲
<!-- FIXME: (放遊戲畫面(影片)) -->
## 好玩 有趣 大爆炸！！
基於我們想玩互動式的遊戲(如 switch 的健身環)，但是我們太窮了，所以只能自己乖乖做，過程中發現一個遊戲太無聊了，所以多做了幾個遊戲增加趣味性，減肥讚！

## Concept Development

本專案結合 Mediapipe 與 OpenCV，基於 Python 開發一個利用肢體動作進行遊戲操控的系統。通過姿勢檢測技術，即時捕捉玩家的動作並將其轉換為遊戲中的操作指令，例如跳躍。此系統旨在提供更有趣的互動方式，實現肢體動作與數位遊戲的結合。



## How To Play?
- 遊玩 flappy bird：
    - 在瀏覽器輸入 `www.flappybird.leafish.xyz`
    - 遊玩方式：
        - 開啟鏡頭後向上跳，兩個肩膀的節點如果超過基準線，畫面中的鳥會跳一下
        - 不要撞到水管
        - //超過英雄榜的最高分可以輸入自己的名字到英雄榜

<Image src="/projects/bird.png" alt="bird" class="m-0  h-auto" />

- 遊玩 ping pong:
    - 在瀏覽器輸入 `www.pingpong.leafish.xyz`
    - 由手控制，手超過左邊的線，板子往左邊移動，手超過右邊的線，板子往右邊移動
    
| Player 1 | Player 2 |
| -------- | -------- |
| <Image src="/projects/ping1.png" alt="ping" class="m-0 w-4/5 h-auto" /> | <Image src="/projects/ping2.png" alt="ping" class="m-0  h-auto" /> |

