'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Category } from '@/types';
import { Button } from './ui/button';
import NavCategories from './NavCategories';

interface NavItemProps {
  category: Category
  handleOpen: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

const NavItem = ({
  category, isAnyOpen, isOpen, handleOpen,
}: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}
        >
          {category.label}
          <ChevronDown className={cn(
            'h-4 w-4 transition-all text-muted-foreground',
            {
              '-rotate-180': isOpen,
            },
          )}
          />
        </Button>
      </div>

      {isOpen && <NavCategories isAnyOpen={isAnyOpen} category={category} />}
    </div>
  );
};

export default NavItem;
