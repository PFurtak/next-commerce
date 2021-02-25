import StickData from '../../data/shop/sticks';

export default (req, res) => {
  res.status(200).json(StickData);
};
