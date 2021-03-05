import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components/macro';

const Page = ({ notes }) => {
	const router = useRouter();
	return (
		<div
			css={`
				width: 100%;
				max-width: 960px;
				margin: 0;
				margin: 0 auto;
			`}
		>
			<h1>My Notes</h1>
			<div
				css={`
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-wrap: wrap;
				`}
			>
				{notes.map((note) => (
					<div
						css={`
							width: 33%;
							padding: 2rem;
						`}
					>
						<Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`}>
							<a
								css={`
									text-decoration: none;
									cursor: pointer;
								`}
							>
								<div
									css={`
										box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
											0 1px 2px rgba(0, 0, 0, 0.24);
										border: 1px solid #777;
										border-radius: 4px;
										padding: 2rem;
									`}
								>
									<strong>{note.title}</strong>
								</div>
							</a>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;

export async function getServerSideProps() {
	const res = await fetch(`http://localhost:3000/api/notes/`);
	const { data } = await res.json();

	return {
		props: { notes: data }
	};
}
