// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
const exec = require('child_process').exec;

type Data = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const pyFile = path.join(__dirname, 'hello.py');

	console.log(process.cwd());
	console.log(__dirname);
	console.log(__filename);

	exec(
		`python -c "print('python ci here')"`,
		(err: any, stdout: any, stderr: any) => {
			console.log(`cat worked fine`);
			console.log({ stdout, stderr, err });
		}
	);

	res.status(200).json({ name: 'John Doe' });
}
