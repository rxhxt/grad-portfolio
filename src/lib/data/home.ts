import { Platform } from '$lib/types';
import { getSkills } from './skills';
import { base } from '$app/paths';

export const title = 'Home';

export const name = 'Rohit';

export const profileImage = `${base}/logos/rohit-profile-pic.jpeg`;


export const lastName = 'Nagotkar';
export const subtitle = 'Full‑Stack & GenAI Engineer – Deployed 4 web apps & doubled UX engagement | Python • Node • AWS • React | M.S. CS‑Data Science ’25 | Ex‑Lead SWE, crafting people‑centric products at scale'

export const description =
	'A passionate Full Stack Developer and Data Science Enthusiast pursuing a Master\'s in Computer Science with a specialization in Data Science at Seattle University. With expertise in Machine Learning, Data Science, and Web Development, I thrive on using technology to solve real-world problems. My goal is to create impactful solutions that drive innovation and positive change.'

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/rxhxt' },
	{
		platform: Platform.Linkedin,
		link: 'https://linkedin.com/rohit-nagotkar'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'rohitajaynagotkar@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'python', 'nodejs', 'ts');
