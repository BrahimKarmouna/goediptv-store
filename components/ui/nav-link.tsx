'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  targetId?: string;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ 
  href, 
  children, 
  targetId, 
  className = '',
  onClick
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (targetId && pathname.endsWith(targetId));
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
      return;
    }
    
    e.preventDefault();
    
    // If we're already on the home page, just scroll to section
    if (pathname === '/' && targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        // Close mobile menu if open
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        if (mobileMenu) {
          mobileMenu.closest('.fixed')?.classList.remove('opacity-100', 'visible');
          mobileMenu.closest('.fixed')?.classList.add('opacity-0', 'invisible');
          document.body.style.overflow = '';
        }
        
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
