// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import StickData from '../../data/shop/sticks';

export default (req, res) => {
  res.status(200).json(StickData);
};
