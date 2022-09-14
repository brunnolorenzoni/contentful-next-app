import Link from "next/link";

const CategoryCard = ({ category }) => {
  const { title, slug, image } = category.fields
  return (
    <div className="card bg-white rounded overflow-hidden shadow-lg w-full transform transition duration-300 hover:-translate-y-1 hover:text-gray-700 hover:scale-105">
      <Link href={`/categories/${slug}`}>
      <a>
        <picture className="block overflow-hidden">
          <source src={`https:${image.fields.file.url}`} type={image.fields.file.contentType} />
          <img className="w-full h-28 object-cover m-auto object-center" src={`https:${image.fields.file.url}`} alt={image.fields.description} />
        </picture>
        <div className="px-4 py-2">
          <h2 className="font-bold text-center text-md">{title}</h2>
        </div>
      </a>
      </Link>
    </div>
  );
};

export default CategoryCard;