# Projects Editing Guide

This guide is for non-programmers who want to update the Projects page.

## Where the content lives
- Main content file: `public/content/site.json`
- Project images: `public/content/projects/images/`

## How to edit a project
1. Open `public/content/site.json`.
The projects list is here:

```json
"projectsPage": {
  "projects": [
    {
      "id": "unique-id",
      "title": { "en": "English Title", "zh": "中文标题" },
      "description": { "en": "English text", "zh": "中文说明" },
      "technologies": ["Tech1", "Tech2"],
      "image": "/content/projects/images/your-image.png",
      "github": "https://github.com/your/repo",
      "demo": "#",
      "featured": true
    }
  ]
}
```

## Add a new project
1. Copy one project block and paste it at the end of the list.
2. Change `id` to a new unique value (letters/numbers only).
3. Update `title`, `description`, and `technologies`.
4. Put the image in `public/content/projects/images/`.
5. Set the `image` path to `/content/projects/images/your-file.png`.
6. Set `featured` to `true` if you want it in the top section.

## Replace an image
1. Put the new image in `public/content/projects/images/`.
2. Update the `image` path in the project item.

## Tips
- Keep the JSON format exactly the same (commas and quotes matter).
- If a project should not show a live demo, keep `"demo": "#"` for now.
- English/Chinese text can be different; edit both if possible.
