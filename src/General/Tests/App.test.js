import { downloadData } from "../../Downloads/DownloadData";
import moment from "moment";

test('generateDownloadsData', () => {
  const data = downloadData(100);
  expect(data.length).toBe(100);
})
