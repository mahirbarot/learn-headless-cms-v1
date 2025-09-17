# Troubleshooting Guide

## Common Issues and Solutions

### 1. Changes in CMS not appearing on the live site

**Problem:** You made changes in the Netlify CMS admin panel, but they're not showing up on your website.

**Solutions:**

1. **Check Build Status:**
   - Go to your Netlify dashboard
   - Check if the build was triggered after your CMS changes
   - Look for any build errors in the deploy log

2. **Wait for Deploy:**
   - Changes can take 1-2 minutes to appear
   - Netlify needs to rebuild and deploy the site

3. **Clear Browser Cache:**
   - Hard refresh (Ctrl+F5 or Cmd+Shift+R)
   - Clear browser cache and cookies for your site

4. **Check Content Files:**
   - In your GitHub repository, verify that `content/home.md` was updated
   - The CMS should have committed changes to your repo

### 2. CMS Admin Panel not loading

**Problem:** `/admin/` shows a blank page or errors.

**Solutions:**

1. **Check Netlify Identity:**
   - Ensure Identity is enabled in Netlify dashboard
   - Verify Git Gateway is enabled

2. **Check Configuration:**
   - Verify `public/admin/config.yml` is correct
   - Ensure `public/admin/index.html` exists

3. **Check Console Errors:**
   - Open browser dev tools (F12)
   - Look for JavaScript errors in the console

### 3. Build Failures

**Problem:** Netlify build fails with errors.

**Common Causes & Solutions:**

1. **Missing Dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Node Version:**
   - Ensure you're using Node.js 16 or later
   - Check `netlify.toml` for correct Node version

3. **Content Processing Errors:**
   - Check `content/home.md` format
   - Ensure YAML frontmatter is valid

### 4. Images not displaying

**Problem:** Images uploaded through CMS don't show up.

**Solutions:**

1. **Check Image Paths:**
   - Images should be in `/img/` directory
   - Verify paths in content files are correct

2. **Check Build Process:**
   - Ensure images are copied to build directory
   - Check if images exist in the deployed site

### 5. Local Development Issues

**Problem:** App doesn't work locally or shows default content.

**Solutions:**

1. **Run Content Build:**
   ```bash
   npm run prebuild
   npm start
   ```

2. **Check Content Files:**
   - Ensure `public/content/home.json` exists
   - Verify content is being fetched correctly

### 6. Authentication Issues

**Problem:** Can't log into CMS admin.

**Solutions:**

1. **Identity Setup:**
   - Enable Netlify Identity in dashboard
   - Set registration to "Invite only" initially
   - Invite yourself as a user

2. **Git Gateway:**
   - Enable Git Gateway in Identity settings
   - Ensure it has repository access

### Debug Steps

1. **Check Browser Console:**
   - Open Dev Tools (F12)
   - Look for errors in Console tab

2. **Check Network Tab:**
   - See if content files are loading
   - Check for 404 errors

3. **Verify File Structure:**
   ```
   ├── public/
   │   ├── admin/
   │   │   ├── index.html
   │   │   └── config.yml
   │   └── content/
   │       ├── home.json
   │       └── home.md
   └── content/
       └── home.md
   ```

4. **Test Build Locally:**
   ```bash
   npm run build
   npx serve -s build
   ```

### Getting Help

If you're still having issues:

1. Check the browser console for specific error messages
2. Review Netlify build logs for deployment errors
3. Verify all configuration files are correct
4. Test with a fresh deployment

### Useful Commands

```bash
# Clean install dependencies
npm ci --legacy-peer-deps

# Build content and start development
npm run prebuild && npm start

# Test production build locally
npm run build && npx serve -s build

# Check content processing
node scripts/build-content.js
```
