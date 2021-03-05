import nc from 'next-connect';

const handlers = nc()
   .get((req, res) => {
      res.status(200).json({ message: 'ok' });
   })
   .post((req, res) => {
      res.status(201).json({ message: 'posted' });
   });

export default handlers;
