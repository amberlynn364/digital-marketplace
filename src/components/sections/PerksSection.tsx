import { perks } from '@/lib/data';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Perk from '../Perk';

const PerksSection = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <Perk {...perk} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PerksSection;
