import yaml from 'js-yaml';

// Content loader utility for parsing markdown frontmatter
export const parseMarkdownContent = (markdownContent) => {
  // Extract frontmatter from markdown
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = markdownContent.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatter = match[1];
  
  try {
    // Parse YAML frontmatter using js-yaml
    const content = yaml.load(frontmatter);
    return content;
  } catch (error) {
    console.error('Error parsing YAML content:', error);
    return null;
  }
};

// Fetch content from the CMS-managed content
export const fetchContent = async () => {
  try {
    // First try to fetch the pre-built JSON content
    const jsonResponse = await fetch('/content/home.json');
    
    if (jsonResponse.ok) {
      const content = await jsonResponse.json();
      return content;
    }
    
    // Fallback: try to fetch and parse the markdown file
    const mdResponse = await fetch('/content/home.md');
    
    if (mdResponse.ok) {
      const markdownContent = await mdResponse.text();
      const parsedContent = parseMarkdownContent(markdownContent);
      
      if (parsedContent) {
        return parsedContent;
      }
    }
    
    console.warn('Content file not found, using default content');
    return getDefaultContent();
  } catch (error) {
    console.error('Error fetching content:', error);
    return getDefaultContent();
  }
};


// Default content fallback
export const getDefaultContent = () => ({
  hero: {
    title: "Welcome to Our Amazing Platform",
    subtitle: "Discover the power of modern web development with our cutting-edge solutions. Build, deploy, and scale your applications with ease.",
    image: "/img/hero-placeholder.svg",
    cta_text: "Get Started"
  },
  features: {
    title: "Why Choose Our Platform?",
    description: "We provide everything you need to build modern web applications",
    feature_list: [
      {
        title: "Fast Development",
        description: "Build applications quickly with our modern development tools and frameworks.",
        icon: "/img/speed-icon.svg"
      },
      {
        title: "Scalable Solutions", 
        description: "Our platform grows with your business, handling any scale of traffic.",
        icon: "/img/scale-icon.svg"
      },
      {
        title: "Easy Management",
        description: "Manage your content with our intuitive CMS interface.",
        icon: "/img/manage-icon.svg"
      }
    ]
  }
});
