import Link from "next/link";
import TagLabel from "./TagLabel";

const ProductCard = ({ product }) => {
  const { productName, productDescription, slug, tags, image } = product.fields
  
  return (
    <div className="card bg-white rounded overflow-hidden shadow-lg w-full mb-6">
      <Link href={`/product/${slug}`}>
        <a>
          <picture className="block h-64 overflow-hidden transition duration-300 hover:scale-105">
            <source src={`https:${image[0].fields.file.url}`} type={image[0].fields.file.contentType} />
            <img className="object-cover m-auto object-center h-full" src={`https:${image[0].fields.file.url}`} alt={image[0].fields.description} />
          </picture>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{productName}</h2>
            <p className="text-base">
              {productDescription.length > 50 ? `${productDescription.substring(0, 50).trim()}...` : productDescription}
            </p>
          </div>
        </a>
      </Link>
      <div className="px-6 pt-4 pb-2">
        {tags.map(tag => <TagLabel key={tag}>#{tag}</TagLabel>)}
      </div>
    </div>
  );
};

export default ProductCard;