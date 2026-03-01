import {SVGProps} from 'react';

export const BinepadLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 70"
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill:currentColor}'}</style>
      </defs>
      <polygon className="cls-1" points="7 17.3253519 7 52.7877911 35 70 63 52.7877911 63 17.3253519 34.9579382 0 23.3107689 7.36876727 23.3107689 42.6720168 35 49.7039863 46.5814478 42.6720168 46.5814478 27.393764 35 20.0565715 24.5607924 26.7333246 24.5607924 16.354427 35 9.63557427 55.4972303 22.5865018 55.4972303 47.6634653 35 60.2841731 14.6407849 47.6634653 14.6407849 12.606236" />
    </svg>
  );
};
