const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Read the markdown content file
const contentPath = path.join(__dirname, '../content/home.md');
const publicContentPath = path.join(__dirname, '../public/content');

// Ensure public/content directory exists
if (!fs.existsSync(publicContentPath)) {
  fs.mkdirSync(publicContentPath, { recursive: true });
}

try {
  // Read the markdown file
  const markdownContent = fs.readFileSync(contentPath, 'utf8');
  
  // Extract frontmatter
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = markdownContent.match(frontmatterRegex);
  
  if (match) {
    const frontmatter = match[1];
    const content = yaml.load(frontmatter);
    
    // Write JSON version for the app to consume
    fs.writeFileSync(
      path.join(publicContentPath, 'home.json'), 
      JSON.stringify(content, null, 2)
    );
    
    // Also copy the markdown file for CMS access
    fs.copyFileSync(contentPath, path.join(publicContentPath, 'home.md'));
    
    console.log('Content files generated successfully');
  } else {
    console.error('No frontmatter found in content file');
  }
} catch (error) {
  console.error('Error processing content:', error);
  process.exit(1);
}
