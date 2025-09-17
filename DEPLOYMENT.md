# Deployment Guide

## Deploying to Netlify

### Step 1: Prepare Your Repository

1. Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Step 2: Deploy to Netlify

1. **Sign up/Login to Netlify:**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up or log in with your Git provider

2. **Create New Site:**
   - Click "New site from Git"
   - Choose your Git provider
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

### Step 3: Configure Netlify Identity

1. **Enable Identity:**
   - Go to your site dashboard
   - Navigate to "Settings" > "Identity"
   - Click "Enable Identity"

2. **Configure Registration:**
   - Set registration to "Invite only" (recommended for CMS)
   - Or "Open" if you want public registration

3. **Enable Git Gateway:**
   - In Identity settings, scroll to "Services"
   - Click "Enable Git Gateway"
   - This allows the CMS to commit changes to your repository

### Step 4: Set up CMS Access

1. **Invite Users (if using invite-only):**
   - In Identity tab, click "Invite users"
   - Enter email addresses of CMS users
   - Users will receive an email to set up their account

2. **Access the CMS:**
   - Visit `your-site-name.netlify.app/admin/`
   - Log in with Netlify Identity
   - Start editing your content!

### Step 5: Custom Domain (Optional)

1. **Add Custom Domain:**
   - In site settings, go to "Domain management"
   - Click "Add custom domain"
   - Follow the DNS configuration instructions

### Environment Variables

If you need environment variables:

1. Go to "Site settings" > "Environment variables"
2. Add any required variables
3. Redeploy the site

### Build Settings

The default build settings should work:
- Build command: `npm run build`
- Publish directory: `build`
- Node.js version: Latest LTS (automatically detected)

### Troubleshooting

**Common Issues:**

1. **Build fails:** Check the build logs in Netlify dashboard
2. **CMS not loading:** Ensure Identity is enabled and Git Gateway is configured
3. **Content not updating:** Check if Git Gateway has proper permissions

**Build Optimization:**
- The app includes `--legacy-peer-deps` flag for Netlify CMS compatibility
- All dependencies are properly configured for production builds

### Continuous Deployment

Once set up, any push to your main branch will automatically trigger a new deployment. The CMS will also trigger deployments when content is updated.
