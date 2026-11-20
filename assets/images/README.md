# FITNESS STUDIO — Image Assets Directory

This folder is the designated target directory for all website image assets.

## Integration Instructions
1. Follow `IMAGE-GENERATION-GUIDE.md` located in the root folder of the project.
2. Generate or export high-resolution JPG images corresponding to the filenames listed in the guide.
3. Save the final image files into this folder (`fitness-studio/assets/images/`).
4. To integrate into HTML, replace the corresponding `<div class="media-placeholder ...">...</div>` blocks with:
   ```html
   <img src="assets/images/<filename>.jpg" alt="Descriptive accessible alt text" loading="lazy">
   ```
   Or preserve the container and place the `<img>` element inside with standard CSS object-fit cover.

## Placeholder Specifications
All image positions in this demo project currently utilize zero-dependency CSS and inline SVG responsive placeholders. They enforce explicit aspect ratios, prevent layout shifts (CLS), display subtle development labels, and indicate the exact target filename for 1-to-1 replacement.
