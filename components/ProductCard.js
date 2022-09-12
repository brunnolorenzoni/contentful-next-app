const ProductCard = ({ product }) => {
  const { productName, productDescription, slug, tags, image } = product.fields
  
  const tagsLabels = () => tags.map((tag, index) => <span key={`tag-${tag}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>)

  return (
    <div className="card bg-white rounded overflow-hidden shadow-lg w-full mb-6">
      <a href={`/product/${slug}`}>
        <picture className="block h-64 overflow-hidden">
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
      <div className="px-6 pt-4 pb-2">
        {tagsLabels()}
      </div>
    </div>
  );
};

export default ProductCard;