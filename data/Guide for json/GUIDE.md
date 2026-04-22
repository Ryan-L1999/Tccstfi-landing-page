# Facilities Management Guide

## Overview
✅ **Everything is now dynamically generated from `facilities.json`!**

Both facility cards AND modal content are loaded from this single file. No need to edit HTML or JavaScript.

## How It Works
When the page loads:
1. JavaScript reads `facilities.json`
2. Automatically creates facility cards with `cardDesc`
3. Automatically creates modals with `modalDesc`
4. Everything displays perfectly!

## File Structure
Each facility in `facilities.json` has this format:

## File Structure
Each facility in `facilities.json` has this format:

```json
{
  "id": 1,
  "title": "Administration Building",
  "badge": "Main Campus",
  "cardDesc": "Houses the President's Office, Registrar, Finance, and all administrative departments.",
  "img": "/images/tccstfi.png",
  "modalDesc": "The Administration Building is the central hub of our campus. It houses the President's Office, Registrar, Finance Department, and all major administrative departments."
}
```

## Field Explanations
| Field | Where Used | Description |
|-------|-----------|-------------|
| `id` | Internal | Unique identifier for the facility |
| `title` | Card + Modal | Facility name (displayed in both) |
| `badge` | Card | Location/category badge on the card |
| `cardDesc` | Card | Short description on the facility card |
| `img` | Modal | Image shown in modal (image path) |
| `modalDesc` | Modal | Detailed description when modal opens |

## How to Add a New Facility

1. Open `data/facilities.json`
2. Add a new facility object before the closing bracket `]`
3. Follow this template:

```json
,
{
  "id": 9,
  "title": "Your Facility Name",
  "badge": "Your Location/Badge",
  "cardDesc": "Short description for the card (one sentence)",
  "img": "/images/your-image.png",
  "modalDesc": "Longer, detailed description for the modal popup. This can be multiple sentences with more information."
}
```

## Important Notes
- ⚠️ **Add a comma** after the previous facility (see the comma before the new facility above)
- ✓ **No comma** after the last facility in the array
- ✓ Keep the same format/structure
- ✓ Use quotes around all text values
- ✓ Make sure JSON is valid (no trailing commas, proper brackets)

## Example: Adding 3 New Facilities

```json
[
  { ... existing facilities ... },
  
  {
    "id": 9,
    "title": "Research & Innovation Lab",
    "badge": "Building E",
    "cardDesc": "Advanced research facilities for student and faculty innovation projects.",
    "img": "/images/research-lab.png",
    "modalDesc": "State-of-the-art research laboratory featuring advanced equipment for innovation and research projects by students and faculty."
  },
  
  {
    "id": 10,
    "title": "Student Dormitory Complex",
    "badge": "Housing",
    "cardDesc": "Modern residential facilities providing comfortable and safe living spaces for students.",
    "img": "/images/dorms.png",
    "modalDesc": "Modern student dormitories featuring comfortable rooms, recreational facilities, dining services, and support staff for student wellbeing."
  },
  
  {
    "id": 11,
    "title": "Cafeteria & Commons",
    "badge": "Dining",
    "cardDesc": "Modern dining facility serving nutritious meals and providing social gathering spaces.",
    "img": "/images/cafeteria.png",
    "modalDesc": "Contemporary cafeteria with diverse menu options, outdoor dining areas, and comfortable commons space for student gatherings."
  }
]
```

## Card Images in HTML
Card images are handled automatically by CSS classes (f1, f2, f3, etc.). The facility cards are now generated dynamically - no need to edit HTML!

If you want to change the card image itself (not the path), you can customize the CSS for the `.fc-img` classes in `style.css`.

## Tips
- Use short, engaging text for `cardDesc` (1-2 sentences)
- Use more detailed descriptions for `modalDesc` (2-3 sentences)
- Keep all text professional and informative
- Don't forget to increment the `id` number for each new facility
- Test your JSON syntax (check for proper quotes, commas, brackets)

## Need Help?
If the modals don't appear or show incorrect content, check:
1. JSON syntax is valid (no missing quotes or commas)
2. All facilities have the required fields: `id`, `title`, `badge`, `cardDesc`, `img`, `modalDesc`
3. Browser console (F12) for any error messages

## 🎯 Where to Make Changes
| What you want to change | Where to edit |
|------------------------|---------------|
| Card title | `facilities.json` → `title` |
| Card description | `facilities.json` → `cardDesc` |
| Card badge/location | `facilities.json` → `badge` |
| Modal description | `facilities.json` → `modalDesc` |
| Modal image | `facilities.json` → `img` |
| Add new facility | `facilities.json` → Add new object |
| Delete facility | `facilities.json` → Remove object |

✅ **That's it! No HTML or JavaScript changes needed!**
