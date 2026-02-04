# Image Organization Guide

This folder contains all images used on the IEEE TXST website. Images are organized into specific folders for easy management.

## Folder Structure

### 📁 `/branding`
- **What goes here:** Logos, icons, and brand assets
- **Examples:** IEEE logo, chapter logo, navigation icons
- **Format:** PNG, SVG (vector graphics preferred for logos)

### 📁 `/events`
- **What goes here:** Photos from events and event promotional images
- **Examples:** Workshop photos, meeting photos, event flyers
- **Format:** JPG, PNG
- **Naming convention:** `event-name-YYYY-MM-DD.jpg`
  - Example: `arduino-workshop-2026-02-15.jpg`

### 📁 `/team`
- **What goes here:** Headshots of officers and team members
- **Examples:** President photo, VP photo, committee member photos
- **Format:** JPG, PNG
- **Naming convention:** `firstname-lastname.jpg`
  - Example: `john-doe.jpg`
- **Best practices:**
  - Square format (1:1 ratio)
  - Professional photo
  - Good lighting
  - Plain background

### 📁 `/gallery`
- **What goes here:** General photos of activities, campus, and community
- **Examples:** Lab photos, group photos, campus shots
- **Format:** JPG, PNG
- **Naming convention:** Descriptive names
  - Example: `lab-project-2026.jpg`, `team-dinner.jpg`

## How to Add a New Image

1. **Prepare your image:**
   - Use descriptive filename (lowercase, hyphens for spaces)
   - Optimize for web (compress large images)
   - Recommended max size: 2MB

2. **Choose the right folder:**
   - Refer to the folder descriptions above

3. **Upload the image:**
   - Drag and drop the image into the appropriate folder
   - Or use File → Upload

4. **Update the code:**
   - Find the content file that needs the image
   - Update the image path
   - Example: `image: "/images/events/your-image.jpg"`

## Need Help?

Contact your web administrator or refer to the documentation in `/src/content/`
