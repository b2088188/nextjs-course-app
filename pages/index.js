import React from 'react';
import Link from 'next/link';
import styled from 'styled-components/macro';

const Page = ({ content }) => {
	return (
		<div
			css={`
				height: calc(100vh - 60px);
			`}
		>
			<div
				css={`
					width: 100%;
					max-width: 960px;
					margin: 0;
					margin: 0 auto;
					display: flex;
					align-items: center;
					height: 100%;
				`}
			>
				<h1
					css={`
						font-size: 8rem;
						margin: 0;
					`}
				>
					{content.title}
				</h1>
			</div>
		</div>
	);
};

export default Page;

export function getStaticProps() {
	return {
		props: {
			content: {
				title: 'This is my really nice app'
			}
		}
	};
}
