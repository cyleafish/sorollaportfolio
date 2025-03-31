import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  // 檢查 context.site 是否存在，如果不存在，手動設置為您的站點 URL
  const siteUrl = context.site || 'https://yourwebsite.com'; // 設置您的網站 URL
  
  const collections = ['blog', 'projects', 'working_experience', 'activity_experience', 'gallery'];
  let items = [];

  // 循環處理每個 collection，並將項目合併到 items 中
  for (const collection of collections) {
    const data = await getCollection(collection);
    items = items.concat(
      data.map((item) => ({
        title: item.data.title, // 使用項目的標題
        description: item.data.description || 'No description available', // 若沒有描述則使用預設文本
        link: `/${collection}/${item.id}/`, // 使用 collection 名稱來構建 URL
        pubDate: item.data.pubDate || new Date(), // 使用項目的發佈日期或當前日期
      }))
    );
  }

  // 返回 RSS feed，這裡的 site 設為 context.site 或手動設置的站點 URL
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: siteUrl, // 設定 site URL
    items, // 將所有收集的項目傳入
  });
}
