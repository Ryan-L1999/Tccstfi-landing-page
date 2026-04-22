# News Management Guide

## Overview
All news content is centralized in `news.json`. Both **Latest News** and **Upcoming News** carousel sections load from this single file.

## File Structure
The `news.json` file has two sections: `latest` and `upcoming`.

```json
{
  "latest": [
    { news items here }
  ],
  "upcoming": [
    { news items here }
  ]
}
```

## Each News Item Fields
| Field | Description |
|-------|-------------|
| `day` | Day of the month (e.g., "25") |
| `month` | Month abbreviation (e.g., "Apr", "May") |
| `tag` | Category tag (e.g., "Enrollment", "Event", "Technology") |
| `title` | News headline |
| `snip` | Brief summary/snippet |

## How It Works
- Both Latest News and Upcoming News display in **auto-scrolling carousels**
- Each carousel shows items doubled for seamless looping
- When you click on the news item, it currently shows the title and snippet

## How to Add/Edit News

### Add a New News Item
1. Open `data/news.json`
2. Find either the `"latest"` or `"upcoming"` array
3. Add a new object before the closing bracket `]`:

```json
,
{
  "day": "20",
  "month": "May",
  "tag": "Academic",
  "title": "Your News Title Here",
  "snip": "Brief description of the news item in one sentence."
}
```

**Important:** Remember to add a comma `,` before your new item (except if it's the first item).

### Example: Adding 3 News Items

```json
{
  "latest": [
    { ... existing news ... },
    
    {
      "day": "20",
      "month": "May",
      "tag": "Academic",
      "title": "Enrollment Deadline Extended",
      "snip": "New students now have until May 31 to submit their applications."
    },
    
    {
      "day": "18",
      "month": "May",
      "tag": "Event",
      "title": "Spring Convocation Ceremony",
      "snip": "Join us for the celebration of our graduating class of 2026."
    },
    
    {
      "day": "15",
      "month": "May",
      "tag": "Partnership",
      "title": "New Research Collaboration",
      "snip": "TCCSTFI partners with leading research institute for innovation projects."
    }
  ],
  "upcoming": [
    { ... existing items ... }
  ]
}
```

## Common Tags
- Academic
- Partnership
- Facility
- Award
- Enrollment
- Event
- Technology

## Best Practices
✓ Keep titles concise (5-10 words)
✓ Keep snippets short (one sentence)
✓ Use relevant, descriptive tags
✓ Always include valid day and month
✓ Check JSON syntax (no trailing commas, proper quotes)

## Testing Your Changes
1. Save the `news.json` file
2. Refresh your browser
3. Check that news items appear in the carousel

## Troubleshooting
- **News not showing?** Check JSON syntax for errors
- **Missing commas?** Each item except the last needs a comma before it
- **Wrong date format?** Use `"day"` for numbers and `"month"` for text
