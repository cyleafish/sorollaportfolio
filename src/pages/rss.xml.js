import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const collections = ['blog', 'projects', 'working_experience', 'activity_experience'];
	let items = [];

	for (const collection of collections) {
		const data = await getCollection(collection);
		items = items.concat(
			data.map((item) => ({
				...item.data,
				link: `/${collection}/${item.id}/`,
			}))
		);
	}

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
