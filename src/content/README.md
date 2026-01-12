# Content Management Guide

Welcome! This folder contains all the editable content for the IEEE TXST website. Non-technical users can update website content by editing these files.

## 📋 Quick Start

**To update website content:**
1. Find the file you want to edit (see guide below)
2. Open it in any text editor
3. Change the text between the quotes `"like this"`
4. Save the file
5. The website will automatically update

## 📁 File Structure

```
/content
  ├── config.ts              # Site-wide settings (contact info, colors)
  ├── /pages
  │   └── home.ts            # Homepage content
  ├── /data
  │   ├── events.ts          # All events (past & upcoming)
  │   └── team.ts            # Team members and officers
  └── README.md              # This file
```

## 🎯 Common Tasks

### How to Update Contact Information
**File:** `config.ts`
1. Open `config.ts`
2. Find the `contact` section
3. Update email, social media links
4. Save the file

### How to Add a New Event
**File:** `data/events.ts`
1. Open `data/events.ts`
2. Read the instructions at the top of the file
3. Copy the event template
4. Paste it at the top of the events array
5. Fill in your event details:
   - Title, description, date, time, location
   - Add event image to `/public/images/events/`
   - Update the image path
6. Save the file

### How to Update Homepage Text
**File:** `pages/home.ts`
1. Open `pages/home.ts`
2. Find the section you want to edit:
   - `hero` - Top section with main title
   - `whatWeDo` - Description of IEEE activities
   - `whyJoin` - Benefits of joining
3. Change the text between quotes
4. Save the file

### How to Add a New Team Member
**File:** `data/team.ts`
1. Take a professional headshot photo
2. Save it to `/public/images/team/firstname-lastname.jpg`
3. Open `data/team.ts`
4. Copy the team member template
5. Fill in the details (name, position, major, bio)
6. Update the image path
7. Save the file

## 💡 Important Tips

### ✅ DO:
- Keep text between quotes: `"text here"`
- Use descriptive image names: `arduino-workshop-2026.jpg`
- Follow the date format: `"2026-02-15"` (Year-Month-Day)
- Save images before referencing them in code
- Keep file structure organized

### ❌ DON'T:
- Don't delete commas `,` between items
- Don't remove quotes `"` around text
- Don't delete curly braces `{}` or brackets `[]`
- Don't rename the files themselves
- Don't delete the template comments

## 🆘 Troubleshooting

**Problem: Website doesn't update after saving**
- Solution: Make sure you saved the file (Ctrl+S or Cmd+S)
- Wait a few seconds for the website to rebuild

**Problem: Image doesn't show up**
- Check the image path matches the actual file location
- Make sure the image is in the correct folder
- Verify the filename is exactly the same (check spelling and case)

**Problem: Website shows an error**
- You might have accidentally deleted a comma or quote
- Use Ctrl+Z (Cmd+Z on Mac) to undo your changes
- Contact your web administrator

## 📞 Need Help?

If you're stuck or something isn't working:
1. Check that you followed the instructions in each file
2. Make sure you didn't delete any commas, quotes, or brackets
3. Contact your web administrator

## 🎨 Working with Images

All website images are stored in `/public/images/`

**To add a new image:**
1. Go to the appropriate folder (events, team, gallery, branding)
2. Read the README in the images folder for naming guidelines
3. Upload your image
4. Reference it in the content file with the path: `"/images/folder/filename.jpg"`

---

**Questions?** Contact your web administrator or technical team lead.
