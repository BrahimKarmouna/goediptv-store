'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  targetId?: string;
  className?: string;
}

export function NavLink({ href, children, targetId, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a home link with no target, let the default Link handle it
    if (href === '/' && !targetId) {
      return; // Let Next.js handle the navigation
    }
    
    e.preventDefault();
    
    // Close any open dialogs or menus
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
    
    // If we're already on the home page, just scroll to section
    if (pathname === '/' && targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        // Add a small delay to ensure any open menus are closed before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', targetId);
        }, 100);
      }
    } else if (targetId) {
      // If we're on a different page, use Next.js router to navigate
      window.location.href = `/${targetId}`;
    } else {
      // Regular navigation for other links
      window.location.href = href;
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={`${className} ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-primary'} transition-colors`}
    >
      {children}
    </Link>
  );
}
