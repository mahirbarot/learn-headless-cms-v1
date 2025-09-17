# React App with Netlify CMS

A simple React application with Netlify CMS integration for content management. Edit hero section text, images, feature section content, and more through an intuitive admin interface.

## Features

- 🎨 Modern, responsive design
- ✏️ Edit hero section title, subtitle, image, and CTA button
- 📝 Manage features section with title, description, and feature list
- 🖼️ Upload and manage images
- 🚀 Built with React and Netlify CMS

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

### Setting up Netlify CMS

#### For Local Development

1. The app runs with default content locally
2. To test the CMS interface locally, you can use Netlify CMS's test-repo backend

#### For Production (Netlify Deployment)

1. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Deploy the site

2. **Enable Netlify Identity:**
   - Go to your Netlify site dashboard
   - Navigate to Settings > Identity
   - Click "Enable Identity"

3. **Configure Git Gateway:**
   - In Identity settings, scroll to "Services"
   - Click "Enable Git Gateway"

4. **Access the CMS:**
   - Visit `yourdomain.netlify.app/admin/`
   - Sign up/log in with Netlify Identity
   - Start editing your content!

## Content Structure

The CMS manages content in `content/home.md` with the following structure:

- **Hero Section:**
  - Title
  - Subtitle
  - Hero Image
  - CTA Button Text

- **Features Section:**
  - Section Title
  - Section Description
  - Feature List (each with title, description, and icon)

## File Structure

```
src/
├── components/
│   ├── Hero.js          # Hero section component
│   ├── Hero.css         # Hero section styles
│   ├── Features.js      # Features section component
│   └── Features.css     # Features section styles
├── utils/
│   └── contentLoader.js # Content parsing utilities
├── App.js               # Main app component
└── App.css              # Global styles

public/
├── admin/
│   ├── index.html       # CMS admin interface
│   └── config.yml       # CMS configuration
├── img/                 # Images directory
└── index.html           # Main HTML file

content/
└── home.md              # Content file managed by CMS
```

## Customization

### Adding New Content Types

1. Update `public/admin/config.yml` to add new collections or fields
2. Create corresponding React components
3. Update the content loader utility if needed

### Styling

- Modify component CSS files for styling changes
- Update `src/App.css` for global styles
- The design uses CSS Grid and Flexbox for responsive layouts

## Technologies Used

- **React** - Frontend framework
- **Netlify CMS** - Content management
- **Netlify Identity** - Authentication
- **CSS3** - Styling with modern features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.