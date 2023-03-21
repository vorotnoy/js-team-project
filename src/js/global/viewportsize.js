
import { VIEWPORT_SIZES } from './const';


export function viewportWidthCheck() {
    const { tablet, desktop } = VIEWPORT_SIZES;
  
    const currentVpWidth = document.body.clientWidth;
  
    if (currentVpWidth < tablet) return 3;
    if (currentVpWidth >= tablet && currentVpWidth < desktop) return 6;
    if (currentVpWidth >= desktop) return 9;
  }