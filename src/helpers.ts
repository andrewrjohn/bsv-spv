export function formatBytes(bytes: number) {
  if (bytes >= 1000000000) {
    return `${Number(bytes / 1000000000).toFixed(1)} GB`;
  } else if (bytes >= 1000000) {
    return `${Number(bytes / 1000000).toFixed(1)} MB`;
  } else if (bytes >= 1000) {
    return `${Number(bytes / 1000).toFixed(1)} KB`;
  } else {
    return `${Number(bytes).toFixed(0)} Bytes`;
  }
}
