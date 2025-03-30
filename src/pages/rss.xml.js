import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}

export async function GET(context) {
	const projects = await getCollection('projects');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: projects.map((projects) => ({
			...projects.data,
			link: `/projects/${projects.id}/`,
		})),
	});
}

export async function GET(context) {
	const working_experience = await getCollection('working_experience');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: working_experience.map((working_experience) => ({
			...working_experience.data,
			link: `/working_experience/${working_experience.id}/`,
		})),
	});
}

export async function GET(context) {
	const activity_experience = await getCollection('activity_experience');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: activity_experience.map((activity_experience) => ({
			...activity_experience.data,
			link: `/activity_experience/${activity_experience.id}/`,
		})),
	});
}