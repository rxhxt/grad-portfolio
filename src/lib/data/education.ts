import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'M.S. in Computer Science, Specialization in Data Science',
		description: '',
		location: 'Seattle, WA, USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Seattle University',
		period: { from: new Date(2023, 9, 20) },
		shortDescription: 'CGPA: 3.92/4.0',
		slug: 'masters-education',
		subjects: ['Big Data Analytics', 'ML', 'AI', 'LLM', 'Capstone', 'Ethics', 'Visual Analytics']
	},
	{
		degree: 'B.E. in Electronics and Telecommunication',
		description: '',
		location: 'Pune, MH, India',
		logo: Assets.Unknown,
		name: '',
		organization: 'PICT',
		period: { from: new Date(2017, 8, 1), to: new Date(2021, 6, 1) },
		shortDescription: 'CGPA: 9.4/10.0',
		slug: 'bachelors-education',
		subjects: []
	}
];

export const title = 'Education';
