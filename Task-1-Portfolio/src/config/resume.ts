// ────────────────────────────────────────────────────────────────
// Resume configuration
// ────────────────────────────────────────────────────────────────
// Paste your Google Drive "Anyone with the link can view" share link
// below. The FILE_ID is extracted automatically, so you normally only
// need to change this one line if you ever update your resume file.
//
// Share link looks like:
//   https://drive.google.com/file/d/FILE_ID/view?usp=drive_link
// ────────────────────────────────────────────────────────────────

export const RESUME_DRIVE_SHARE_LINK =
  "https://drive.google.com/file/d/1gUWu1CwqvjP2kH4ke0IHUuuakX_ojb9d/view?usp=drive_link";

const extractDriveFileId = (shareLink: string): string => {
  const match = shareLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
};

export const RESUME_FILE_ID = extractDriveFileId(RESUME_DRIVE_SHARE_LINK);

// Direct-download link — triggers an actual file download instead of
// opening Google Drive's preview page.
export const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

// Preview link — opens Google Drive's built-in viewer in a new tab.
export const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
