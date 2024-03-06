import { H1 } from '@/src/theme/typography';
import { getPeople } from '@/src/helpers/api';
import Link from 'next/link';

export const getServerSideProps = async () => {
	try {
		return {
			props: {
				data: await getPeople(),
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};

const Home = ({ data }) => {
	return (
		<>
			<H1>Manual of Us</H1>
			<ul>
				{data.data.map((person) => (
					<li key={person._id}>
						<Link href={person.slug}>
							{person.firstName} {person.lastName}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Home;
