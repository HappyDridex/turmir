export const downloadByUrl = (
  uri: string,
  newTab = true,
  parent = document.body,
  download?: string
) => {
  const link = document.createElement("a");
  link.href = uri;

  if (newTab) {
    link.target = "_blank";
  }

  if (download) {
    link.download = download;
  }

  const parentElement = parent;
  parentElement.appendChild(link);
  link.click();
  parentElement.removeChild(link);
};
