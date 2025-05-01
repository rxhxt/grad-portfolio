import { items } from '@data/projects';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const project = items.find((item) => {
			return item.slug === params.slug;
		});

		return { project };
	}
}


// <CardLogo
// 									src={getAssetURL(item.logo)}
// 									alt={item.name}
// 									radius={'0px'}
// 									size={15}
// 									classes="mr-2"
// 								/>
