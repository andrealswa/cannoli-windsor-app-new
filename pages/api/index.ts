// Fake users data
let confirmationCode = 0;

export default function handler(req, res) {
  confirmationCode += 1;
  if (confirmationCode > 1000) {
    confirmationCode = 0;
  }

  res.status(200).json(confirmationCode);
}
