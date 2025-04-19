---
title: "Snake Game"
subtitle: "#FPGA #Verilog"
description: "經典的貪吃蛇！<br>
  用 Verilog 開發的貪食蛇遊戲  
  <a class='underline' href='https://github.com/wzray07/FPGA_snake_game_contest' target='_blank'>Snake Game</a>
  "
icon: "3"

#collection: "projects"
pubDate: "2023"
heroImage: "/src/assets/adriana.jpg"
---

# Snake Game：用 Verilog 開發的貪食蛇遊戲！
<!-- FIXME: (放遊戲畫面(影片)) -->
> [vale5230-Snake-Game-in-FPGA](https://github.com/vale5230/Snake-Game-in-FPGA)

從開源的專案做修改，讓一款經典的遊戲不僅呈現在 FPGA 上，並為其增添更多功能

## Requirements

### 晶片請使用 Cyclone III EP3C10E144C8
### 介面
<Image src="/projects/interface.jpg" alt="interface" class="m-0 w-4/5 h-auto" />

###  遊戲畫面
<Image src="/projects/IMG_7019.jpeg" alt="game" class="m-0 w-4/5 h-auto" />

### Pin腳位:

<Image src="/projects/PIN-1.jpeg" alt="PIN" class="m-0 w-4/5 h-auto" />
<Image src="/projects/PIN-2.jpeg" alt="PIN" class="m-0 w-4/5 h-auto" />

## Usage

* 原有功能: 在 8x8 的 LED 全彩點矩陣上，隨機生成蛇的食物(會避開蛇的身體位置)、暫停功能、超過 8 分就將蛇的身體變色

* 1. 蛇吃到食物後會觸發蜂鳴器 beep 一聲(2023/12/30 新增)
* 2. 用七段顯示器 ~16-bits LED 顯示玩家遊玩時間 (2023/12/30 新增)
* 3. 將獲得的食物(分數)顯示在 16-bits LED 顯示:1-8 分藍色，9-16 綠色 (2023/01/02 新增)
* 4. 新增第二顆食物 (2024/01/02 新增)


<table>
  <tr>
    <th>操控功能</th>
    <th>控制元件</th>
    <th>備註</th>
  </tr>
  <tr>
    <td>上</td>
    <td>S1</td>
    <td>在 4 BITS SW</td>
  </tr>
  <tr>
    <td>下</td>
    <td>S2</td>
    <td>在 4 BITS SW</td>
  </tr>
  <tr>
    <td>左</td>
    <td>S3</td>
    <td>在 4 BITS SW</td>
  </tr>
  <tr>
    <td>右</td>
    <td>S4</td>
    <td>在 4 BITS SW</td>
  </tr>
  <tr>
    <td>暫停</td>
    <td>紅色第 3 號</td>
    <td>在 8 DIPSW</td>
  </tr>
</table>


## DEMO 影片
二食物版：https://drive.google.com/file/d/1FG_OmrJjJJQXoYmiKrja0zRQJEnsirNF/view?usp=drive_link 

單食物版：https://drive.google.com/file/d/1TcYCFDjPnZM70Npev91WXcD38mgQD3mq/view?usp=drivesdk