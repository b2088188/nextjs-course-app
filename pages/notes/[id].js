import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
	const {
		query: { id }
	} = useRouter();

	return <div>Note Page {id}</div>;
};

export default Page;
