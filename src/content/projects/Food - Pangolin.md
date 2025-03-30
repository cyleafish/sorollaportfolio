---
title: 'Food Pangolin'
subtitle: "你訂我送"
description: "外送系統開發 <a class='underline' href='https://github.com/cyleafish/Food-Pangolin/tree/Final  ' target='_blank'>Food Pangolin</a>"
icon: '1'

# collection: "projects"
pubDate: '2024'
heroImage: "/src/assets/fran.jpg"
---
# Food Pangolin：外送系統
## 專案概述
以 MVC 架構設計的網路訂餐平台，涵蓋客戶、餐廳、外送與平台管理四大子系統，實現完整的線上訂餐、配送與管理流程。

## 技術應用
- 軟體架構： 採用 MVC 架構劃分模組，將業務邏輯、資料存取與前端視圖明確分離，提升專案擴展性與可維護性。
- 後端開發： 基於 Python Flask 框架進行後端邏輯設計與 API 整合，確保模組化與維護性。
- 前端設計： 使用 HTML5、CSS3（搭配自訂 style.css）及部分 JavaScript，實現響應式與直觀的使用者介面。
- 資料庫管理： 利用 MySQL 進行資料庫設計與查詢，確保資料的存取與一致性。
- 團隊合作： 使用 Git 進行版本控制，協助團隊進行程式碼整合與衝突解決，促進多人合作開發。

## MVC 專案架構
```
Food-Pangolin/
├── app/
│   ├── __init__.py       # 初始化 Flask
│   ├── controllers/
│   │   ├── customer_app.py
│   │   ├── restaurant_app.py
│   │   ├── delivery_app.py
│   │   ├── platform_app.py
│   │   └── auth_app.py
│   │
│   ├── dbUtils/
│   │   ├── login.py   # 統一的 function
│   │   ├── customer_dbUtils.py
│   │   ├── delivery_dbUtils.py
│   │   ├── platform_dbUtils.py
│   │   └── restaurant_dbUtils.py
│   │
│   ├── templates/ # html 檔案
│   │   ├── customer/
│   │   │   ├── car.html
│   │   │   ├── ...
│   │   │   └── reviews.html
│   │   ├── restaurant/
│   │   │   ├── add_menu.html
│   │   │   ├── ...
│   │   │   └── Restaurant_information.html
│   │   ├── delivery/
│   │   │   ├── deliver_home.html
│   │   │   ├── ...
│   │   │   └── register_deliver.html
│   │   └── platform/
│   │   │   ├── customer_payments.html
│   │   │   ├── ...
│   │   │   └── merchant_earnings.html
│   │   ├── login.html
│   │   └── register.html
│   │
│   └── static/
│       ├── css/
│       │   └── style.css
│       └── scripts.js
│       ├── img.jpg # 餐廳 menu 圖
│       ├── img.jpg
│       ├── ...
│
│
├── .gitignore
├── README.md
├── food_pangolin.sql     # 資料庫檔案
└── run.py                # 入口
```