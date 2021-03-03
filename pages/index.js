import React from 'react';
import Link from 'next/link';
import styled from 'styled-components/macro';

const Page = () => {
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
					Index Page
				</h1>
			</div>
		</div>
	);
};

export default Page;
