# Event Photos Directory

## 📸 How to Add Event Photos

### For Event Cards

1. **Prepare the image**
   - Event **poster, flyer, or photo**
   - **Poster / portrait images are expected**
   - The site displays images using the aspect ratio:
   - Images close to standard **8.5×11** posters work perfectly
   - Compress if needed (keep under **2MB**)
   - Clear, high-quality images with readable text

2. **Name the file**
   - Use the following format: `<EventName>-<IEEECategory>-<Type>-<SemesterYear>.<ext>`

   **Rules:**
   - Use **PascalCase** (capitalize words, no spaces)
   - Separate sections with **hyphens**
   - No special characters (`&`, `/`, etc.)
   - Use consistent IEEE category naming

   **Examples (correct):**
   - `Last-OPSMeet-Poster-Fall2025`
   - `TrevorS-WorkshopMeet-Poster-Fall2025`
   - `MikeM-IEEESpeaker-Poster-Fall2025`
   - `PumpkinPaint-IEEESocial-Poster-Fall2025`
   - `Tesla-IEEETour-Photo-Fall2025`

   **Common Types:**
   - `Poster`
   - `Flyer`
   - `Photo`

3. **Upload to this folder**
   Just drag and drop the image here!

4. **Add event to events.ts**
   Go to `/src/content/data/events.ts` and add your event with the image path.

---

## ✅ Quick Reference

**Image Requirements:**
- Format: JPG, PNG
- Size: Under 2MB (use tinypng.com to compress)
- Dimensions: 
   - 850 x 900px or larger
   - 1130 x 1200px ideal (matches `aspect-[11.3/12]`)
- Quality: Clear and professional

**Naming Convention:**
```
Tesla-IEEETour-Photo-Fall2025.png
│     │        │     │
│     │        │     └─ Semester + Year
│     │        └─ Poster / Photo / Flyer
│     └─ IEEE Category (Workshop, Speaker, Social, Tour, Meeting)
└─ Event Name
```

---

## 💡 Tips

- **Use descriptive names** - Makes finding images easier
- **Include the date** - Helps organize chronologically
- **Compress images** - Keeps website fast
- **Match event in events.ts** - Make sure paths match exactly

See **PRESIDENT_GUIDE.md** in the root folder for full instructions!
