import { NextApiHandler } from 'next';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler: NextApiHandler = (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({ name: 'Hello, world!' });
};

export default handler;
