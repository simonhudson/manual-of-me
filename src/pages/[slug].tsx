import { H1, Strong } from '@/src/theme/typography';
import { getPerson } from '@/src/helpers/api';

export const getServerSideProps = async (req: { params: { slug: string } }) => {
	return {
		props: {
			data: await getPerson(req.params.slug),
		},
	};
};

const Person = ({ data }) => {
	const person = data.data[0];

	return (
		<>
			<H1>
				{person.firstName} {person.lastName}
			</H1>
			<p>
				Hi, my name&apos;s{' '}
				<Strong>
					{person.firstName} {person.lastName}
				</Strong>
				{person.preferredName ? ` (but you can call me ${person.preferredName})` : ''}.
			</p>
		</>
	);
};

export default Person;
