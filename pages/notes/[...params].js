import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
	const {
		query: { params }
	} = useRouter();

	console.log(params);
	return <div>Note Page </div>;
};

export default Page;
