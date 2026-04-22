# Courses Management Guide

## Overview
All course content is centralized in `courses.json`. Course cards, modals, and all program details are generated dynamically from this single file.

## How It Works
When the Courses page loads:
1. JavaScript reads `courses.json`
2. Automatically creates **course cards** with program information
3. Automatically creates **course modals** with detailed descriptions
4. Each card has a "View Details →" button that opens the corresponding modal

## File Structure
`courses.json` is an array of course objects:

```json
[
  {
    "id": 1,
    "icon": "💻",
    "bar": "b1",
    "name": "College Name",
    "level": "Undergraduate · Graduate",
    "cardDesc": "Short description for the card",
    "programs": ["Program 1", "Program 2", "Program 3"],
    "duration": "4 yrs (BS) · 2 yrs (MS)",
    "units": "136–142 Units",
    "img": "/images/path-to-image.png",
    "modalDesc": "Detailed description shown in the modal popup"
  },
  { ... more courses ... }
]
```

## Field Explanations
| Field | Used Where | Description |
|-------|-----------|-------------|
| `id` | Internal reference | Unique number (1-6 for 6 courses) |
| `icon` | Course card | Emoji icon displayed at top |
| `bar` | Course card | Color bar class (b1, b2, b3, etc.) |
| `name` | Card + Modal | College/Course name |
| `level` | Course card | Education levels (Undergraduate · Graduate) |
| `cardDesc` | Course card | Short description (1-2 sentences) |
| `programs` | Card + Modal | Array of program names offered |
| `duration` | Course card | Program duration (e.g., "4 yrs (BS)") |
| `units` | Course card | Total units required |
| `img` | Modal | Image displayed in modal |
| `modalDesc` | Modal popup | Detailed description (2-3 sentences) |

## How to Add/Edit Courses

### Add a New Course
1. Open `data/courses.json`
2. Add a new course object before the closing bracket `]`:

```json
,
{
  "id": 7,
  "icon": "🎨",
  "bar": "b7",
  "name": "College of Fine Arts",
  "level": "Undergraduate",
  "cardDesc": "Develop artistic skills and creative expression through various art disciplines.",
  "programs": ["BA Fine Arts", "BA Graphic Design", "BA Music", "BA Visual Arts"],
  "duration": "4 yrs (BA)",
  "units": "128 Units",
  "img": "/images/fine-arts.png",
  "modalDesc": "The College of Fine Arts nurtures creative professionals in visual arts, music, design, and performing arts. Our programs combine theoretical knowledge with practical studio and performance experience."
}
```

### Color Bar Classes
You can use existing bars (b1-b6) or add new colors by updating CSS:
- `b1` - Blue (Information Technology)
- `b2` - Purple (Engineering)
- `b3` - Gold (Business)
- `b4` - Pink (Health Sciences)
- `b5` - Green (Education)
- `b6` - Orange (Arts & Sciences)

### Icon Suggestions
- 💻 Technology
- ⚙️ Engineering
- 🏢 Business
- 🩺 Health
- 📚 Education
- 🔬 Science
- 🎨 Arts
- 🏗️ Architecture

## Example: Adding 2 Courses

```json
[
  { ... existing 6 courses ... },
  
  {
    "id": 7,
    "icon": "🏗️",
    "bar": "b3",
    "name": "College of Architecture",
    "level": "Undergraduate · Graduate",
    "cardDesc": "Design sustainable and innovative buildings that shape our communities.",
    "programs": ["BS Architecture", "BS Urban Planning", "Master of Architecture"],
    "duration": "5 yrs (BS) · 2 yrs (MA)",
    "units": "160–175 Units",
    "img": "/images/architecture.png",
    "modalDesc": "Our Architecture program combines design theory with practical CAD and building technology. Students work on real projects and collaborations with leading architectural firms."
  },
  
  {
    "id": 8,
    "icon": "🎬",
    "bar": "b4",
    "name": "College of Media & Film",
    "level": "Undergraduate",
    "cardDesc": "Create compelling visual stories through film, television, and digital media.",
    "programs": ["BS Film Production", "BS Broadcast Journalism", "BS Digital Media"],
    "duration": "4 yrs (BS)",
    "units": "130 Units",
    "img": "/images/media.png",
    "modalDesc": "Produce professional-quality films and media content. Our state-of-the-art studios and equipment prepare students for careers in entertainment, broadcasting, and digital content creation."
  }
]
```

## Important Notes
✓ **Increment the `id`** for each new course  
✓ **Add a comma** before new courses (except if it's the first)  
✓ **No comma** after the last course in the array  
✓ Keep `cardDesc` short (1-2 sentences)  
✓ Make `modalDesc` more detailed (2-3 sentences)  
✓ Ensure all fields are present (no missing fields)  
✓ Use valid JSON syntax

## Card Layout Structure
Each course card displays:
1. Color bar (top)
2. Icon + Name + Level
3. Card description
4. "Programs Offered" label
5. Program tags
6. Duration + Units info
7. "View Details →" button

## Modal Layout
When "View Details" is clicked:
1. Modal image
2. Course name
3. Detailed description
4. List of programs offered

## Customization

### Change Course Card Colors
Edit the `.cc-bar` classes in `style.css`:
```css
.cc-bar.b1 { background: #your-color; }
.cc-bar.b2 { background: #your-color; }
```

### Add More Color Bars
Add new bar classes in CSS and use them in JSON:
```css
.cc-bar.b7 { background: #ff6b6b; }
```

Then in `courses.json`:
```json
"bar": "b7"
```

## Testing Your Changes
1. Save the `courses.json` file
2. Refresh your browser
3. Check that course cards appear correctly
4. Click "View Details" to test modals

## Troubleshooting
- **Course cards not showing?** Check JSON syntax for errors
- **Modal won't open?** Verify `id` numbers are unique
- **Missing programs in modal?** Check `programs` array syntax
- **Image not loading?** Verify image path is correct
