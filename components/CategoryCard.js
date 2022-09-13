import Link from "next/link";

const CategoryCard = ({ category }) => {
  const { title, slug, icon } = category.fields
  return (
    <div className="card bg-white rounded overflow-hidden shadow-lg w-full mb-6">
      <Link href={`/categories/${slug}`}>
      <a>
        <picture className="block h-64 overflow-hidden">
          <source src={`https:${icon.fields.file.url}`} type={icon.fields.file.contentType} />
          <img className="object-cover m-auto object-center h-full" src={`https:${icon.fields.file.url}`} alt={icon.fields.description} />
        </picture>
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
        </div>
      </a>
      </Link>
    </div>
  );
};

export default CategoryCard;