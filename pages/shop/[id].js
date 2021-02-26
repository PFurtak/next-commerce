import { getAllStickIds, getStickById } from '../../lib/fetchSticks';

export async function getStaticPaths() {
  const paths = await getAllStickIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const stickData = await getStickById(params.id);
  return {
    props: {
      stickData,
    },
  };
}

const Product = ({ stickData }) => {
  return (
    <h1>
      {stickData.brand} {stickData.model}
    </h1>
  );
};

export default Product;
