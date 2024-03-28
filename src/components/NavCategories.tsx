import { cn } from '@/lib/utils';
import { Category } from '@/types';
import NavCategory from './NavCategory';

interface NavCategoriesProps {
  isAnyOpen: boolean;
  category: Category

}
const NavCategories = ({ isAnyOpen, category }: NavCategoriesProps) => {
  return (
    <div className={cn('absolute inset-x-0 top-full text-sm text-muted-foreground', {
      'animate-in fade-in-10 slide-in-from-top-5': !isAnyOpen,
    })}
    >
      <div
        className="absolute inset-0 top-1/2 bg-white shadow"
        aria-hidden="true"
      />

      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
            <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
              {category.featured.map(({ name, href, imageSrc }) => (
                <NavCategory
                  key={name}
                  name={name}
                  href={href}
                  imageSrc={imageSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCategories;
