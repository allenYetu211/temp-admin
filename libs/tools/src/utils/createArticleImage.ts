/*
 * @Date: 2022-10-23 17:01:04
 * @LastEditTime: 2022-10-23 18:31:01
 */
import html2canvas from 'html2canvas';
import FileSaver from 'file-saver'
import dayjs from 'dayjs'


export const createArticleImage = (targetElement: any) => {

  return new Promise((resolve, reject) => {
    const shareContent = targetElement;
    const copyNode = shareContent.cloneNode(true);
    copyNode.style.width = shareContent.scrollWidth + "px";
    copyNode.style.height = shareContent.scrollHeight + "px";
    document.body.appendChild(copyNode);
    html2canvas(copyNode).then((canvas: any) => {
      const context = canvas.getContext("2d");
      context.imageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
      context.imageSmoothingEnabled = false;
      copyNode.remove();
      resolve(canvas)
    }).catch(() => {
      reject()
    })
  })
}



export const saveImages = (canvas: any, name: string =  dayjs().format('YYYY-MM-DD')) => {
  canvas.toBlob(function (blob: any) {
    FileSaver.saveAs(blob, name);
  });
}
