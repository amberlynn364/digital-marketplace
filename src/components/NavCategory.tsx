import Link from 'next/link';
import Image from 'next/image';

interface NavCategoryProps {
  imageSrc: string;
  href: string;
  name: string;
}

const NavCategory = ({ imageSrc, href, name }: NavCategoryProps) => {
  return (
    <div
      className="group relative text-base sm:text-sm"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <Image
          src={imageSrc}
          alt="product category image"
          fill
          className="object-cover object-center"
        />
      </div>
      <Link
        href={href}
        className="mt-6 block font-medium text-gray-900"
      >
        {name}
      </Link>
      <p className="mt-1" aria-hidden="true">
        Shop now
      </p>
    </div>
  );
};

export default NavCategory;
