/*
 * @Date: 2022-10-23 10:12:37
 * @LastEditTime: 2022-10-23 10:57:01
 */
const Fullscreen = <const>['requestFullscreen',
  'webkitEnterFullscreen',
  'mozRequestFullScreen',
  'webkitRequestFullscreen',
  'msRequestFullscreen']


const ExitFullscreen = ['exitFullscreen',
  'mozExitFullScreen',
  'webkitExitFullscreen',
  'msRequestFullscreen',
  'msExitFullscreen']


const fullscreen = (element: HTMLDivElement) => {
  Fullscreen.some((item: typeof Fullscreen[number]) => {
    if ((element as any)[item]) {
      try {
        (element as any)[item]()
        return true;
      } catch (error) {
        throw error;
      }
    }
    return false
  })
};

const exitFullscreen = () => {
  ExitFullscreen.some((item: typeof ExitFullscreen[number]) => {
    if ((document as any)[item]) {
      try {
        (document as any)[item]().then(() => {
          console.log('exitFullscreen', item)
        });
      } catch (error) {
        throw error;
      }
      return true
    }
    return false
  })
};


export const toggleFullscreen = (element: HTMLDivElement | null, state: boolean) => {

  if (!element) return;
  state ? exitFullscreen() : fullscreen(element)
}
