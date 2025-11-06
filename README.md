# BDSM Personality Test

A self-hosted, open-source BDSM personality test similar to BDSMtest.org. This is a purely client-side web application that runs entirely in the browser.

## Features

- 20 carefully crafted questions about BDSM preferences and tendencies
- 12 different BDSM type classifications
- Responsive design that works on desktop and mobile
- No tracking, no data collection - everything stays in your browser
- Easy to customize and extend

## Deployment to GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all the files** from this project to your repository
3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and root folder
   - Click "Save"

Your test will be available at: `https://[your-username].github.io/[repository-name]/`

## Customization

### Adding/Modifying Questions
Edit the `questions` array in `questions.js`

### Modifying BDSM Types
Update the `bdsmTypes` object in `results-data.js` to add new types or modify existing ones

### Styling
Modify `style.css` to change the appearance and colors

## Privacy

This test runs entirely in your browser. No answers or results are sent to any server. All data is temporarily stored in your browser's memory and is lost when you close the page.

## Disclaimer

This test is for educational and self-discovery purposes only. Results are not definitive and should be used as a starting point for personal exploration and conversation with partners.
