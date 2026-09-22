# GitHub Copilot Back to School Series

A static, responsive GitHub Pages site for the 2026 GitHub Copilot Back to School learning series.

## Preview locally

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Update session links

Session links are plain `href` values in `index.html`. Completed sessions can replace their two registration choices with a single recording link; upcoming sessions retain their 10:00 and 16:00 BST registration links.

## Publish with GitHub Pages

In the repository settings, open **Pages**, select **Deploy from a branch**, then choose this branch (or `main` after merging) and the repository root.
