import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const IndividualPage = ({ note }) => {
	return (
		<div>
			<h1>Note: {note.title} </h1>
			<Link href='/notes'>
				<a>Notes</a>
			</Link>
		</div>
	);
};

export default IndividualPage;

export async function getServerSideProps({ params, req, res }) {
	const response = await fetch(`http://localhost:3000/api/notes/${params.id}`);
	if (!response.ok) {
		res.writeHead(302, {
			Location: '/notes'
		});
		res.end();
		return {
			props: {}
		};
	}
	const { data } = await response.json();

	return {
		props: { note: data }
	};
}
