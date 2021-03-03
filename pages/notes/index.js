import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Page = () => {
	const notes = new Array(15).fill(1).map((e, i) => ({ id: i, title: `Note: ${i}` }));
	const router = useRouter();
	return (
		<div>
			<h1>Notes</h1>

			{notes.map((note) => (
				<div>
					{/*This is only for client side routing*/}{' '}
					{/*By using dynamic route, we need to use as to tells nextjs what the actual value of param is*/}
					<Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`}>
						<a>
							<strong>{note.title}</strong>
						</a>
					</Link>
					{/*This is only for client side routing*/}
					<button onClick={() => router.push('/notes/[id]', `/notes/${note.id}`)}>
						Programmatic routing to {note.tilte}
					</button>
				</div>
			))}
		</div>
	);
};

export default Page;
