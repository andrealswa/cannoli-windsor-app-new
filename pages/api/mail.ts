const nodemailer = require('nodemailer');

export default function userHandler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ code: 'email sent' });
      break;
    case 'PUT':
      // Update or create data in your database
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
