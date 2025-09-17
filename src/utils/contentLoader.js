// Content loader utility for parsing markdown frontmatter
export const parseMarkdownContent = (markdownContent) => {
  // Simple frontmatter parser
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = markdownContent.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatter = match[1];
  
  // Parse YAML-like content (simplified)
  try {
    // For this demo, we'll use a simplified approach
    // In production, you'd want to use a proper YAML parser
    const content = parseSimpleYaml(frontmatter);
    return content;
  } catch (error) {
    console.error('Error parsing content:', error);
    return null;
  }
};

const parseSimpleYaml = (yamlString) => {
  // This is a very basic YAML parser for our specific structure
  // In production, use a proper YAML library like js-yaml
  const lines = yamlString.split('\n');
  const result = {};
  let currentSection = null;
  let currentList = null;
  let currentItem = null;
  
  for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    
    if (line.endsWith(':') && !line.includes('"')) {
      const key = line.slice(0, -1);
      if (key === 'hero' || key === 'features') {
        currentSection = key;
        result[currentSection] = {};
      } else if (key === 'feature_list') {
        currentList = [];
        result[currentSection][key] = currentList;
      } else if (line.startsWith('  ') && currentSection) {
        // Nested property
        result[currentSection][key] = {};
        currentItem = result[currentSection][key];
      }
    } else if (line.includes(':')) {
      const [key, ...valueParts] = line.split(':');
      let value = valueParts.join(':').trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      const cleanKey = key.trim();
      
      if (line.startsWith('    -')) {
        // List item
        if (!currentList) {
          currentList = [];
          if (currentSection) {
            result[currentSection].feature_list = currentList;
          }
        }
        const itemKey = cleanKey.replace('- ', '');
        if (!currentItem) {
          currentItem = {};
          currentList.push(currentItem);
        }
        currentItem[itemKey] = value;
      } else if (line.startsWith('  ') && currentSection) {
        // Section property
        result[currentSection][cleanKey] = value;
      }
    } else if (line.startsWith('    -') && currentList) {
      // New list item
      currentItem = {};
      currentList.push(currentItem);
    }
  }
  
  return result;
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
