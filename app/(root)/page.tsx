import SearchForm from '@/components/SearchForm';
import StartUpCard from '@/components/StartUpCard';

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;

	const posts = [
		{
			createdAt: 'Yesterday',
			title: 'We Robot',
			category: 'Robotics',
			image:
				'https://media.istockphoto.com/id/1189903914/photo/robot-woman-sci-fi-android-female-artificial-intelligence-3d-render.webp?s=2048x2048&w=is&k=20&c=VfY4kehngTp_MHV6g_fYtvxyeuEUOs5Hcy2LG_gS3J4=',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.',
			_id: 1,
			author: {
				_id: 1,
				name: 'John Doe',
				image:
					'https://media.istockphoto.com/id/1292931074/photo/young-caucasian-businessman-work-on-laptop-thinking.webp?s=2048x2048&w=is&k=20&c=iJ0G4etSXjxe_JtwwYAq0CIJtHMIlF5tIAJPpReI1m8=',
			},
			views: 1000,
		},
	];

	return (
		<>
			<section className='pink_container'>
				<h1 className='heading'>
					Pitch Your Startup, <br /> Connect with Enterpreneurs
				</h1>
				<p className='sub-heading !max-w-3xl'>
					Submit Ideas, Votes on Pitches and Get Noticed in Virtual
					Competitions.
				</p>

				<SearchForm query={query} />
			</section>

			<section className='section_container'>
				<p className='text-30-semibold'>
					{query
						? `Search results for the 
					"${query}"`
						: 'All Startups'}
				</p>

				<ul className='mt-7 card_grid'>
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType, index: number) => (
							<StartUpCard key={post?._id} post={post} />
						))
					) : (
						<p className='no-results'>No Start-ups found</p>
					)}
				</ul>
			</section>
		</>
	);
}
