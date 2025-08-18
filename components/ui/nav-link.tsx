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
    
    // If we're already on the home page, just scroll to section
    if (pathname === '/' && targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', targetId);
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
