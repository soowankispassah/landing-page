type RouterLike = {
  push: (url: string) => Promise<void> | void;
}

export const handleSectionNavigation = async (
  e: React.MouseEvent<HTMLAnchorElement>, 
  href: string, 
  pathname: string,
  router: RouterLike,
  closeMenu?: () => void
) => {
  e.preventDefault()
  if (closeMenu) closeMenu()

  // If we're not on the home page, navigate to home first
  if (pathname !== '/') {
    // Store the target section ID
    const targetSection = href.substring(1)
    
    // Navigate to home page with the section as a query parameter
    await router.push(`/?section=${targetSection}`)
    
    // Wait for navigation and DOM to be ready
    setTimeout(() => {
      const element = document.getElementById(targetSection)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 500)
  } else {
    // If already on home page, just scroll
    const targetSection = href.substring(1)
    const element = document.getElementById(targetSection)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
} 