export const NAVIGATION_CONFIG: readonly {
  key: string;
  path: string;
  isContentType: boolean;
}[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
