/**
 * Converts a file size in bytes into a human-readable string.
 *
 * Supports automatic conversion to the appropriate unit:
 * Bytes, KB, MB, GB, or TB, using a 1024-based scale.
 *
 * Examples:
 *   formatSize(1024)           => "1.00 KB"
 *   formatSize(1048576)        => "1.00 MB"
 *   formatSize(5368709120)     => "5.00 GB"
 *
 * Rounds to two decimal places for clarity.
 *
 * Usage:
 * Use this utility when displaying file sizes in the UI or logging.
 * Designed for accuracy and readability across a wide range of values.
 *
 * Note:
 * If needed, this function can be extended to handle larger units (PB, EB).
 */
export function formatSize(bytes: number): string {
  if (isNaN(bytes) || bytes < 0) return "0 Bytes";

  const units = ["Bytes", "KB", "MB", "GB", "TB"];
  const base = 1024;

  const i = Math.floor(Math.log(bytes) / Math.log(base));
  const size = bytes / Math.pow(base, i);

  return `${size.toFixed(2)} ${units[i]}`;
}

export const generateUUID: () => string = () => crypto.randomUUID();
