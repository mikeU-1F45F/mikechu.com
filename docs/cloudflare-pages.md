# Configuring Cloudflare Pages for Mike Chu Portfolio Website

This document outlines the steps to set up and deploy the Mike Chu portfolio website on Cloudflare Pages.

## Setup Instructions

### 1. Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/sign-up)
- Your GitHub repository (mikechu.com) pushed to GitHub
- Admin access to the GitHub repository

### 2. Connect to GitHub Repository

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** from the sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authenticate with GitHub and grant permissions to Cloudflare
6. Select the `mikechu.com` repository from the list
7. Click **Begin setup**

### 3. Configure Build Settings

Enter the following build configuration:

| Setting | Value |
|---------|-------|
| Project name | `mikechu-portfolio` |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | Leave empty (no build required) |
| Build output directory | `src` |
| Root directory | `/` |
| Environment variables | None required at this time |

### 4. Advanced Settings

- **Compatibility flags**: None required
- **Always use HTTPS**: Enabled
- **Web Analytics**: Enabled
- **Preview deployments**: Enabled for Pull Requests

### 5. Deploy

1. Click **Save and Deploy**
2. Wait for the initial deployment to complete
3. Cloudflare will provide a URL like `https://mikechu-portfolio.pages.dev`

## Custom Domain Setup (Optional)

To use a custom domain:

1. From the Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `mikechu.com`)
4. Follow the verification steps (DNS configuration)
5. Wait for DNS propagation (may take up to 24 hours)

## Deployment Configuration

### Automatic Deployments

Cloudflare Pages automatically deploys:
- All pushes to the main branch
- Preview deployments for all pull requests

### Environment Variables by Branch

Different environment variables can be set for:
- Production (main branch)
- Preview deployments (pull requests)

## Monitoring & Analytics

Access analytics for your website from the Cloudflare Pages dashboard:
- Performance metrics
- Visitor statistics
- Resource usage

## Troubleshooting

If you encounter deployment issues:
1. Check build logs in the Cloudflare Pages dashboard
2. Verify your build output directory is correct
3. Ensure your HTML entry point is properly configured
4. Check for any JavaScript errors in the browser console